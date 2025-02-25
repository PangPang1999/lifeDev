import React, { useState } from "react";
interface Props {
  maxChars?: number;
  children: string;
  handleClick: () => void;
}
const ExpandableText = ({ maxChars = 10, children, handleClick }: Props) => {
  const [expanded, setExpanded] = useState(false);
  // if (children.length <= maxChars) return <p>{children}</p>;
  const text = expanded ? children.substring(0, maxChars) : children;
  return (
    <>
      <div>
        {text}...
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? "less" : "more"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
