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
    setUsers((prev) => prev.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        alert("Delete failed. " + err.message);
        setUsers((prev) => [user, ...prev]);
      });
  };

  const addUser = () => {
    const tempId = -Date.now(); // 负数临时 id，避免和服务端正数撞
    const optimistic: User = { id: tempId, name: "Mosh" };
    // 乐观更新：先更新 UI
    setUsers((prev) => [optimistic, ...prev]);

    axios
      .post<User>("https://jsonplaceholder.typicode.com/users", {
        name: optimistic.name,
      })
      .then(({ data: saved }) =>
        // 成功：用返回数据替换掉占位项
        {
          setUsers((prev) => prev.map((u) => (u.id === tempId ? saved : u)));
        }
      )
      .catch((err) => {
        alert("Add user failed. " + err.message);
        // 失败：把占位项移除
        setUsers((prev) => prev.filter((u) => u.id !== tempId));
      });
  };

  return (
    <>
      <h1>Users</h1>
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
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
