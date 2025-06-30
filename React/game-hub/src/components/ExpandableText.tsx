import { Button, Text } from "@chakra-ui/react";
import { useState, type ReactNode } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (children.length < limit) return <Text>{children}</Text>;
  const text = isExpanded ? children.slice(0, limit) + "..." : children;
  return (
    <div>
      {text}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        ml={2}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "show more" : "show less"}
      </Button>
    </div>
  );
};

export default ExpandableText;
