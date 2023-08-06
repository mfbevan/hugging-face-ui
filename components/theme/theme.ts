import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { semanticTokens } from "./semantic-tokens";
import { Tooltip, Button, Textarea, Select, Input } from "./variants";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  semanticTokens,
  components: {
    Tooltip,
    Button,
    Textarea,
    Select,
    Input,
  },
});
