import { Flex, Spacer, Text, chakra } from "@chakra-ui/react";
import { DarkModeButton, GitHubIconButton, HuggingFaceIcon } from "..";
import Link from "next/link";

export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <NavbarContainer>
      <HuggingFaceIcon />

      <Link href="/">
        <NavigationItem fontWeight="bold">Huggingface.js UI</NavigationItem>
      </Link>

      {/* <Link
        href="https://huggingface.co/docs/huggingface.js/index"
        target="_blank"
      >
        <NavigationItem fontSize="lg">SDK Docs</NavigationItem>
      </Link> */}

      <Spacer />
      <GitHubIconButton href="https://github.com/mfbevan/hugging-face-ui" />
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
    gap: "10px",
  },
});

const NavigationItem = chakra(Text, {
  baseStyle: {
    fontSize: "xl",
    mr: "20px",
  },
});
