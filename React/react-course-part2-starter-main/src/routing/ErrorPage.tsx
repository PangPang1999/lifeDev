import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist." // 路由未找到错误
          : "An unexpected error occurred."}
      </p>
    </>
  );
};

export default ErrorPage;
