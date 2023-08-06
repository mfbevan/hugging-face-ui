import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { semanticTokens } from "./semantic-tokens";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  semanticTokens,
});
