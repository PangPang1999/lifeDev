import { useContext, useReducer, useState } from "react";
import authReducer from "./reducers/AuthReducer";
import AuthContext from "./context/authContext";
import useAuth from "./hooks/useAuth";
const AuthStatus = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(authReducer, "");
  // const { user, dispatch } = useContext(AuthContext);
  const { user, dispatch } = useAuth();
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

export default AuthStatus;
