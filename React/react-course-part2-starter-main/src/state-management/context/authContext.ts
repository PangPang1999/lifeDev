import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/AuthReducer";
interface AuthContext {
  user: string;
  dispatch: Dispatch<AuthAction>;
}
const authContext = React.createContext<AuthContext>({} as AuthContext);
export default authContext;
