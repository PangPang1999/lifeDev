import React, { useState } from "react";
interface Props {
  maxChars?: number;
  children: string;
  handleClick: () => void;
}
const ExpandableText = ({ maxChars = 10, children, handleClick }: Props) => {
  const [text1,setText] = useState(children);
  // if (children.length <= maxChars) return <p>{children}</p>;
  const text = children.substring(0, maxChars);
  return (
    <>
      <div>
        {text}...
        <button onClick={()=>{children.length <= maxChars?setText(children):setText(text)}}>
          {children.length <= maxChars ? "less" : "more"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
