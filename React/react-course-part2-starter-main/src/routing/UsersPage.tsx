import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth"; // 假设这是一个获取认证状态的 Hook
import UserList from "./UserList";

const UsersPage = () => {
  // 1. 获取认证状态
  const { user } = useAuth();

  // 2. 检查权限
  if (!user) {
    // 3. 如果未认证，渲染 Navigate 组件以执行重定向
    return <Navigate to="/login" />;
  }

  // 4. 如果已认证，渲染页面内容
  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
