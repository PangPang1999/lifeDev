import React, { useState } from "react";
interface Props {
  maxChars?: number;
  children: string;
  handleClick: () => void;
}
const ExpandableText = ({ maxChars = 10, children, handleClick }: Props) => {
  const [expanded, setExpanded] = useState(true);
  // if (children.length <= maxChars) return <p>{children}</p>;
  const text = expanded ? children.slice(0, maxChars) : children;

  return (
    <>
      <div>
        {text}...
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? "more" : "less"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
