import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gg-logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Heading fontSize={20}>Game Guild</Heading>
      </HStack>

      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
