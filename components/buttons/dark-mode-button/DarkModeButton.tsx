import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  Button,
  chakra,
  LightMode,
  Tooltip,
} from "@chakra-ui/react";

export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";
  return (
    <LightMode>
      <Tooltip label={isLight ? "Dark Mode" : "Light Mode"}>
        <StyledButton onClick={toggleColorMode} colorScheme="yellow">
          {isLight ? <MoonIcon /> : <SunIcon />}
        </StyledButton>
      </Tooltip>
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
