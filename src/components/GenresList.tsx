import React from "react";
import useGames from "../hooks/useGames";
import { Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface Props {
  genre: String;
  onSelectGenre: (genre: String) => void;
}

const GenresList = ({ genre, onSelectGenre }: Props) => {
  const { data: games, error, isLoading } = useGames();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {games.map((game) => (
        <ListItem paddingY="5px" key={game.id}>
          <Button
            fontSize="lg"
            variant="link"
            onClick={() => onSelectGenre(game.genre)}
          >
            {game.genre}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
