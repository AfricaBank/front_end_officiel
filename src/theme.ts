import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {},
    tokens: {
      colors: {},
      fonts: {},
    },
    semanticTokens: {
      colors: {},
    },
    keyframes: {},
  },
});
