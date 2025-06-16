import { useContext } from "react";
import authContext from "./authContext";

const useAuth = () => useContext(authContext);

export default useAuth;
