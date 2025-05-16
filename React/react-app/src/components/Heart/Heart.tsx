import React, { useState } from "react";
import styles from "./Heart.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface Props {
  children: boolean;
  onClick: () => void;
}
export default function Heart({ children, onClick }: Props) {
  const [status, setStatus] = useState(false);
  const onClick1 = () => {
    console.log("clicked");
    setStatus(!status);
  };
  return (
    <div onClick={onClick1}>
      {status ? <AiOutlineHeart /> : <AiFillHeart />}
    </div>
  );
}
