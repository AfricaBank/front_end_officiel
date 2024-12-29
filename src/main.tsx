import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Gestionsgroupes } from "./pages/Gestiongroupes.tsx";
import App from "./App.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Gestionroles } from "./pages/Gestionroles.tsx";
import { Tachesactives } from "./pages/Tachesactives.tsx";
import { Gestiondossiers } from "./pages/Gestiondossiers.tsx";
import { Provider } from "./Components/ui/provider.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { system } from "./theme.ts";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
