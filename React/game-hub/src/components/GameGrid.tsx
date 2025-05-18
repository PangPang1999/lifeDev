import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
const GameGrid = () => {
  const { gameList, error } = useGames();
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
