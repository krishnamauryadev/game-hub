import React from "react";
import useGames from "../hooks/useGames";

const GenresList = () => {
  const { data: games, error, isLoading } = useGames();
  return (
    <ul>
      {games.map((game) => (
        <li>{game.genre}</li>
      ))}
    </ul>
  );
};

export default GenresList;
