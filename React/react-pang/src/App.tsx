import { useState } from "react";
import Timer from "./components/Timer";
import BadTimer from "./components/BadTimer";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Unmount Timer" : "Mount Timer"}
      </button>
      {show && <Timer />}
    </div>
  );
}

export default App;
