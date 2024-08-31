import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGames from "../hooks/useGames";

const PlatformSelector = () => {
  const { data: games, error, isLoading } = useGames();
  const uniquePlatformSet = new Set(games.map((game) => game.platform));
  const uniquePlatformArray = Array.from(uniquePlatformSet);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        {uniquePlatformArray.map((platform) => (
          <MenuItem key={platform}>{platform}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
