import type { Genre } from "./Genres";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";

export interface Game {
  name: string;
  id: number;
  slug: string;
  genres: Genre[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  publishers: Publisher[];
}
