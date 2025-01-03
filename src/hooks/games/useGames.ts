import { useEffect, useState } from "react";
import gamesService from "../../services/gamesService";

export interface Game {
  id: string;
  name: string;
  background_image: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    gamesService
      .get()
      .then(({ data: { results } }: any) => {
        if (results) {
          const games = results.map((game: Game) => {
            const details = {
              id: game.id,
              name: game.name,
              background_image: game.background_image,
            };
            return details;
          });
          setGames(games);
        }
      })
      .catch((error) => {
        setError(error);
      });

    // return () => gamesService.cancel();
  }, []);

  return { games, error };
};

export default useGames;
