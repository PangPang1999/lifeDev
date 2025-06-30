import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <h1>Oops...</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist." // 路由未找到错误
            : "An unexpected error occurred."}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
