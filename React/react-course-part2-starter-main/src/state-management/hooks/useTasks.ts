import { useContext } from "react";
import TasksContext from "../context/tasksContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;
