import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) return null;
  return (
    <div>
      <Heading>{game.name}</Heading>

      <Text>{game.description_raw} </Text>
    </div>
  );
};

export default GameDetailPage;
