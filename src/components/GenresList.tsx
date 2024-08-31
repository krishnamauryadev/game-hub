import React from "react";
import useGames from "../hooks/useGames";
import { Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface Props {
  selectedGenre: String;
  onSelectGenre: (genre: String) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: games, error, isLoading } = useGames();
  const uniqueGenresSet = new Set(games.map((game) => game.genre));
  const uniqueGenresArray = Array.from(uniqueGenresSet);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {uniqueGenresArray.map((genre) => (
        <ListItem paddingY="5px" key={genre}>
          <Button
            fontWeight={selectedGenre === genre ? "bold" : "normal"}
            fontSize="lg"
            variant="link"
            onClick={() => onSelectGenre(genre)}
          >
            {genre}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
