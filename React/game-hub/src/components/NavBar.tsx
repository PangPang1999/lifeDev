import { HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput
        onSearch={(searchText) => setSearchText(searchText)}
      ></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
