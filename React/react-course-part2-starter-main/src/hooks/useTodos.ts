import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTodos = () => {
  interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

  const fetchData = (): Promise<Todo[]> =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchData,
  });
};

export default useTodos;
