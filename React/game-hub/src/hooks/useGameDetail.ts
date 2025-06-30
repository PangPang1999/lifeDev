import { useQuery } from "@tanstack/react-query";
import ApiClient from "../service/api-client";
import ms from "ms";
import type { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games");
const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ["games", slug], // 唯一查询键
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),

    // 获取数据的函数
  });
// const useGenres = () => {
//   return {
//     data: staticGenres as Genres[],
//     isLoading: false,
//     error: null,
//   };
// };
export default useGameDetail;
