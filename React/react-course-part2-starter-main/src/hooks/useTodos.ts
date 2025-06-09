import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import ApiClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const apiClient = new ApiClient<Todo>("/todos");
const useTodos = () => {
  // const fetchData = (): Promise<Todo[]> =>
  //   axios
  //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.data);
  return useQuery<Todo[], Error>({
    queryFn: apiClient.getAll,
    queryKey: CACHE_KEY_TODOS,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
