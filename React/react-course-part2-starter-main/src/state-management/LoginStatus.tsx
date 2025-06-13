import { useReducer, useState } from "react";
import loginReducer from "./reducers/loginReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const [user, dispatch] = useReducer(loginReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", payload: "wwwww" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
