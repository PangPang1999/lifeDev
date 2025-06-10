import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  // const fetchData = (): Promise<Todo[]> =>
  //   axios
  //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.data);
  return useQuery<Todo[], Error>({
    queryFn: todoService.getAll,
    queryKey: CACHE_KEY_TODOS,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
