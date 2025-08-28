import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);
  };

  return <Like onClick={handleClick} />;
}

export default App;
