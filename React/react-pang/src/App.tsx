import { useState } from "react";
import { produce } from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", isClosed: false },
    { id: 2, title: "Bug 2", isClosed: false },
  ]);

  const handleClick = () => {
    setBugs(
      // bugs.map((bug) => (bug.id === 1 ? { ...bug, isClosed: true } : bug))
      produce((draft) => {
        // 使用produce，传入一个操作draft的函数
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.isClosed = true;
        }
      })
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
