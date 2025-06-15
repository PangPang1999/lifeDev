import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import TasksContext from "./state-management/context/tasksContext";
import HomePage from "./state-management/HomePage";
import Navbar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <Navbar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
