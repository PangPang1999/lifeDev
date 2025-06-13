interface Login {
  type: "LOGIN";
  payload: string;
}
interface Logout {
  type: "LOGOUT";
}
type Action = Login | Logout;

const loginReducer = (state: string, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return "";
  }
};
export default loginReducer;
