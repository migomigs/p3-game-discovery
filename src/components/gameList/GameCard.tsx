import { Game } from "../../hooks/games/useGames";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="h-56 border border-solid border-2 border-black-800 rounded overflow-hidden">
      <img
        src={game.background_image}
        alt="Game image"
        className="h-40 w-auto object-cover w-full"
      />
      <div className="container px-2 pt-1">
        <h1 className="text-md font-bold">{game.name}</h1>
      </div>
    </div>
  );
};

export default GameCard;
