import { useEffect, useState } from "react";
// import axios from "axios";
import apiClient, { CanceledError } from "./services/api-client";
import UserService, { User } from "./services/user-service";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //获取
  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = UserService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      });
    return () => cancel();
  }, []); // 依赖项为空 → 只在初次渲染时执行
  //删除
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    UserService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  //添加
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);
    UserService.addUser(newUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  //更新
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    UserService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers); // 回滚原始列表
    });
  };
  return (
    <>
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <div className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger mx-2"
                onClick={() => deleteUser(user)}
              >
                delete
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => updateUser(user)}
              >
                update
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
export default App;
