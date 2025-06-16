import { useContext } from "react";
import authContext from "../context/authContext";

const useAuth = () => useContext(authContext);

export default useAuth;
