import { Grid, GridItem } from "@chakra-ui/react";
import TableauGestionDeDossier from "../Components/TableauGestionDeDossier.tsx";
import { SidebarMenu } from "../Components/SidebarMenu";
import { Header } from "../Components/Header";
import {Outlet} from "react-router-dom";
export const RootLayout = () => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"90px 1fr 50px"}
      gridTemplateColumns={"289px 1fr"}
      h="100vh"
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"nav"}>
        <SidebarMenu />
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"main"}>
       
          <TableauGestionDeDossier/>
        
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};
