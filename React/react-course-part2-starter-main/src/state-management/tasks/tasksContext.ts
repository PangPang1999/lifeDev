import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const tasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

export default tasksContext;
