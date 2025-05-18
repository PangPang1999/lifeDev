import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Text } from "@chakra-ui/react";
const GameGrid = () => {
  interface Game {
    name: string;
    id: number;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGameList(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      <Text>{error && <p>{error}</p>}</Text>

      <div>
        {gameList.map((g) => (
          <p key={g.id}>{g.name}</p>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
