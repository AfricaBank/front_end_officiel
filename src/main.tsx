import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "./customTheme/policeStyle.ts";
import {
  fontSize,
  fontWeights,
  lineHeights,
} from "./customTheme/customTypographie.ts";
import { colors } from "./customTheme/colorTheme.ts";
import { buttonTheme } from "./customTheme/buttonStyle.ts";

const theme = extendTheme({
  fonts,
  fontSize,
  fontWeights,
  lineHeights,
  colors,
  components: {
    Button: buttonTheme,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
