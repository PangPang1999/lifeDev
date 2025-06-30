import type { Platform } from "./Platform";

export interface Game {
  name: string;
  id: number;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
