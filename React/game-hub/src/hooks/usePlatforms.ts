import { useQuery } from "@tanstack/react-query";
import ApiClient from "../service/api-client";
import ms from "ms";
import staticPlatforms from "../data/platform";
import type { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: staticPlatforms,
  });

export default usePlatforms;
