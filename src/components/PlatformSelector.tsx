import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGames from "../hooks/useGames";

interface Props {
  onPlatformSelect: (platform: String) => void;
  selectedPlatform: String;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data: games, error, isLoading } = useGames();
  const uniquePlatformSet = new Set(games.map((game) => game.platform));
  const uniquePlatformArray = Array.from(uniquePlatformSet);
  const platforms: { [key: string]: String } = {
    "Web Browser": "browser",
    "PC (Windows)": "pc",
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform
          ? Object.keys(platforms).find(
              (key) => platforms[key] === selectedPlatform
            )
          : "Platforms"}
      </MenuButton>
      <MenuList>
        {uniquePlatformArray.map((platform) => (
          <MenuItem
            onClick={() => onPlatformSelect(platforms[platform])}
            key={platform}
          >
            {platform}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
