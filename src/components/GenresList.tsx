import React from "react";
import useGames from "../hooks/useGames";
import { List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data: games, error, isLoading } = useGames();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {games.map((game) => (
        <ListItem paddingY="5px">
          <Text fontSize="lg">{game.genre}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
