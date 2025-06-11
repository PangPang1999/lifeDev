import { useQuery } from "@tanstack/react-query";
import ApiClient from "../service/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 5,
  });

export default usePlatform;
