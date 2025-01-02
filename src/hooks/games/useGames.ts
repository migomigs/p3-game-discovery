import { useEffect, useState } from "react";
import gamesService from "../../services/gamesService";

interface Game {
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
      .then((games: any) => {
        setGames(games);
      })
      .catch((error) => {
        setError(error);
      });

    return () => gamesService.cancel();
  }, []);

  return { games, error };
};
