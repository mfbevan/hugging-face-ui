import { Flex, Spacer, Text, chakra } from "@chakra-ui/react";
import { DarkModeButton, HuggingFaceIcon } from "..";

export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <NavbarContainer>
      <HuggingFaceIcon mr="10px" />
      <NavigationItem>Hugging Face UI</NavigationItem>
      <Spacer />
      <DarkModeButton />
    </NavbarContainer>
  );
};

const NavbarContainer = chakra(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
    h: "60px",
    px: "10px",
    border: "1px solid",
    borderColor: "border",
    roundedBottom: "2xl",
    boxShadow: "lg",
    position: "fixed",
    w: "full",
    zIndex: "999",
    bg: "pageBg",
  },
});

const NavigationItem = chakra(Text, {
  baseStyle: {
    fontSize: "xl",
    fontWeight: "bold",
  },
});
