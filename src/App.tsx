import "./App.css";
import GameList from "./components/gameList/gameList";
import NavBar from "./components/navigation/NavBar";
import useGames from "./hooks/games/useGames";

function App() {
  const { error } = useGames();

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <div className="">
        <NavBar />
        <div className="flex w-auto">
          <div className="hidden md:block md:w-3/12">Categories</div>
          <div className="w-auto">
            <GameList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
