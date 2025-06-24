import useAuth from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // 1. 获取认证状态
  const { user } = useAuth();

  // 2. 检查权限
  if (!user) {
    // 3. 如果未认证，渲染 Navigate 组件以执行重定向
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
