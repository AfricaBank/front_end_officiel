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
import { GroupManagement } from "./pages/GroupManagement.tsx";
import { RoleManagement } from "./pages/RoleManagement.tsx";
import { AgentManagement } from "./pages/AgentManagement.tsx";
import { ActiveTaskManagement } from "./pages/ActiveTaskManagement.tsx";
import { BankingAccountManagement } from "./pages/BankingAccountManagement.tsx";
import TableauGestionDeDossier from "./Components/TableauGestionDeDossier.tsx";
import InitiationDossier from "./Components/InitiationDossier";
import App from "./App.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";

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
        element: <GroupManagement />,
      },
      {
        path: "roles",
        element: <RoleManagement />,
      },
      {
        path: "agents",
        element: <AgentManagement />,
      },
      {
        path: "taches",
        element: <ActiveTaskManagement />,
      },
      {
        path: "dossiers",
        element: <BankingAccountManagement />,
      },
      {
        path: "dossiers-gestion",
        element: <TableauGestionDeDossier />,
      },
      {
        path: "initiation-dossier",
        element: <InitiationDossier />,
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
