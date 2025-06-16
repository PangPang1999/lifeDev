import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import TasksContext from "./state-management/context/tasksContext";
import HomePage from "./state-management/HomePage";
import Navbar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Navbar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
