import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "sad", "angry"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "excited"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "sad"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
