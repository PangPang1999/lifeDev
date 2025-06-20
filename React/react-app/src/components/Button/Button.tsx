import styles from "./Button.module.css";
interface Props {
  children: string;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}
const Button = ({ children, onClick, color = "danger" }: Props) => {
  return (
    // <button className={`btn btn-${color}`} onClick={onClick}>
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
