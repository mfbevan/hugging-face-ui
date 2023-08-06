import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Button, Box, chakra, LightMode } from "@chakra-ui/react";

export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <LightMode>
      <StyledButton onClick={toggleColorMode} colorScheme="yellow">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </StyledButton>
    </LightMode>
  );
};

const StyledButton = chakra(Button, {
  baseStyle: {
    boxSize: "40px",
    boxShadow: "base",
    rounded: "2xl",
  },
});
