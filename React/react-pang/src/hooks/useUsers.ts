import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";

type Status = "idle" | "loading" | "success" | "error";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setStatus("loading");

    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setStatus("success");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setStatus("error");
      });

    return cancel;
  }, []);

  return { users, error, status, setUsers };
};

export default useUsers;
