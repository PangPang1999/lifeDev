import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", isClosed: false },
    { id: 2, title: "Bug 2", isClosed: false },
  ]);

  const handleClick = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, isClosed: true } : bug))
    );
  };

  return (
    <div>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} {bug.isClosed ? "(Closed)" : "(Open)"}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>UPDATE</button>
    </div>
  );
}

export default App;
