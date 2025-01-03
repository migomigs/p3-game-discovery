import useGames, { Game } from "../../hooks/games/useGames";
import GameCard from "./GameCard";

const gameList = () => {
  const { games } = useGames();

  return (
    <>
      {games && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  );
};

export default gameList;
