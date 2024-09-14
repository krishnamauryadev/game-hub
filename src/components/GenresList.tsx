import React from "react";
import useGames from "../hooks/useGames";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  selectedGenre: number | null;
  onSelectGenre: (genre: number) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres?.results.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              src={genre.image_background}
              objectFit="cover"
              borderRadius="3px"
              boxSize="20px"
            ></Image>
            <Button
              fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              whiteSpace="wrap"
              textAlign="left"
              onClick={() => onSelectGenre(genre.id)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
