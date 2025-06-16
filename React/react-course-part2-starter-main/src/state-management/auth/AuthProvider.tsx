import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";
interface Login {
  type: "LOGIN";
  payload: string;
}
interface Logout {
  type: "LOGOUT";
}
export type AuthAction = Login | Logout;

const authReducer = (state: string, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return "";
  }
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
