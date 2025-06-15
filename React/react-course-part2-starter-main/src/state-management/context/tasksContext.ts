import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const tasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

export default tasksContext;
