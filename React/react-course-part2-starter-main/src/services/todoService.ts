import ApiClient from "./apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export default new ApiClient<Todo>("/todos");
