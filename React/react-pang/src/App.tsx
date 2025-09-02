import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

type Status = "idle" | "loading" | "success" | "error";

function App() {
  const [status, setStatus] = useState<Status>("idle");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setStatus("success");
      } catch (err) {
        setError((err as AxiosError).message);
        setStatus("error");
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {status === "error" && <p className="text-danger">{error}</p>}
      {status === "success" && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
