import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGames from "../hooks/useGames";
import usePlatforms from "../hooks/usePlateforms";

interface Props {
  onPlatformSelect: (platform: number) => void;
  selectedPlatform: number | undefined;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();
  // const { data: games, error, isLoading } = useGames();
  // const uniquePlatformSet = new Set(games.map((game) => game.platform));
  // const uniquePlatformArray = Array.from(uniquePlatformSet);
  // const platforms: { [key: string]: String } = {
  //   "Web Browser": "browser",
  //   "PC (Windows)": "pc",
  // };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform
          ? platforms.find((platform) => platform.id == selectedPlatform)?.name
          : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map(({ id, name }) => (
          <MenuItem onClick={() => onPlatformSelect(id)} key={id}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
