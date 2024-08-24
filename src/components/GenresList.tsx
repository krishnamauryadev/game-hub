import React from "react";
import useGames from "../hooks/useGames";
import { List, ListItem, Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data: games, error, isLoading } = useGames();
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
