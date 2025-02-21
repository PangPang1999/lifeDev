import { useState } from "react";
import styles from "./Heart.module.css";
import { FaHeart } from "react-icons/fa";
interface Props {
  children: string;
  onClick: () => void;
}
const Heart = ({ children, onClick }: Props) => {
  const [color1, setColor1] = useState(false);
  return (
    <FaHeart
      onClick={() => {
        setColor1(!color1);
        onClick;
      }}
      size={30}
      color={color1 ? "red" : ""}
      className={[styles.heart, styles.color].join(" ")}
    ></FaHeart>
  );
};

export default Heart;
