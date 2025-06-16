import { useContext } from "react";
import TasksContext from "../tasks/tasksContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;
