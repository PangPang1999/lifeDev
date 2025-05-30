import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const fetchData = (userId?: number): Promise<Post[]> => {
  const params = userId ? { userId } : {};

  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  return axios
    .get<Post[]>(endpoint, {
      params,
    })
    .then((res) => res.data);
};
const usePost = (userId: number | undefined) => {
  const queryKey = userId ? ["users", userId, "posts"] : ["posts"];
  return useQuery<Post[], Error>({
    queryKey: queryKey,
    queryFn: () => fetchData(userId),
  });
};

export default usePost;
