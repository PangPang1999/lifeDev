import { useQuery } from "@tanstack/react-query";
import staticGenres from "../data/genres";
import apiClient from "../service/api-client";
import { type FetchResponse } from "./useData";
export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
// const useGenres = () => useData<Genres>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"], // 唯一查询键
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 1000 * 60 * 5,
    initialData: { count: staticGenres.length, results: staticGenres },

    // 获取数据的函数
  });
// const useGenres = () => {
//   return {
//     data: staticGenres as Genres[],
//     isLoading: false,
//     error: null,
//   };
// };
export default useGenres;
