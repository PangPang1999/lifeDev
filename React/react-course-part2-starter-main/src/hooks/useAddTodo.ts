import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import ApiClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";
interface AddTodoContext {
  previousTodos: Todo[];
}
const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient(); // 1. 获取 QueryClient 实例
  // 2. 使用 useMutation Hook
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    // 3. 定义 mutationFn
    mutationFn: todoService.post,
    // (todo: Todo) =>
    //   axios
    //     .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
    //     .then((res) => res.data),

    onMutate(newTodo) {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
      onAdd();
    },

    onError: (error: Error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
