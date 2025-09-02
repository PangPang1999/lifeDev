import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

type Status = "idle" | "loading" | "success" | "error";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setStatus("success");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    // 乐观更新：先更新 UI
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/Xusers/" + user.id)
      .catch((err) => {
        alert("Delete failed. " + err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      <h1>Users</h1>
      {status === "loading" && <div className="spinner-border"></div>}
      {status === "error" && <p className="text-danger">{error}</p>}
      {status === "success" && (
        <ul className="list-group">
          {users.map((u) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={u.id}
            >
              {u.name}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(u)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
