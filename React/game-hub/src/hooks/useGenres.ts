import { useQuery } from "@tanstack/react-query";
import staticGenres from "../data/genres";
import ApiClient from "../service/api-client";
import ms from "ms";
import type { Genre } from "../entities/Genres";

const apiClient = new ApiClient<Genre>("/genres");
// const useGenres = () => useData<Genres>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"], // 唯一查询键
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: staticGenres,

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
