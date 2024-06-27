import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";
export const SidebarMenu = () => {
  return (
    <>
      <Box>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </Box>
      <Box>
        <NavLink to="/groupes">Gestion des groupes </NavLink>
      </Box>
      <Box>
        <NavLink to="/roles">Gestion des roles </NavLink>
      </Box>
      <Box>
        <NavLink to="/agents">Gestion des agents </NavLink>{" "}
      </Box>
      <Box>
        <NavLink to="/taches">Gestion des taches actives </NavLink>{" "}
      </Box>
      <Box>
        <NavLink to="/dossiers">Gestion des dossiers </NavLink>
      </Box>
    </>
  );
};
