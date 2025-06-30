import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) return null;
  console.log(game);

  return (
    <div>
      <Heading>{game.name}</Heading>

      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </div>
  );
};

export default GameDetailPage;
