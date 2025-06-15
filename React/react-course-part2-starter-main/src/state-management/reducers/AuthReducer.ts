interface Login {
  type: "LOGIN";
  payload: string;
}
interface Logout {
  type: "LOGOUT";
}
export type AuthAction = Login | Logout;

const authnReducer = (state: string, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return "";
  }
};
export default authnReducer;
