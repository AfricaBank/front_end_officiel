import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "./customTheme/policeStyle.ts";
import {
  fontSize,
  fontWeights,
  lineHeights,
} from "./customTheme/customTypographie.ts";
import { colors } from "./customTheme/colorTheme.ts";
import { buttonTheme } from "./customTheme/buttonStyle.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Gestionsgroupes } from "./pages/Gestiongroupes.tsx";
import App from "./App.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Gestionroles } from "./pages/Gestionroles.tsx";
import { Tachesactives } from "./pages/Tachesactives.tsx";
import { Gestiondossiers } from "./pages/Gestiondossiers.tsx";
import { GeneralInfo } from "./pages/GeneralInfo.tsx";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "groupes",
        element: <Gestionsgroupes />,
      },
      {
        path: "roles",
        element: <Gestionroles />,
      },
      {
        path: "agents",
        element: <Gestionroles />,
      },
      {
        path: "taches",
        element: <Tachesactives />,
      },
      {
        path: "dossiers",
        element: <Gestiondossiers />,
      },
      {
        path: "infos",
        element: <GeneralInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
