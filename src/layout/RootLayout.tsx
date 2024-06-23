import { Grid, GridItem } from "@chakra-ui/react";
import {colors} from "../customTheme/colorTheme.ts";
import Sidebar from "../Components/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
export const RootLayout = () => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"80px 1fr 50px"}
      gridTemplateColumns={"299px 1fr"}
      h="100vh"
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    > 
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"nav"} background={colors.primary.doggerBlue["400"]}>
        <Sidebar />
      </GridItem>
      <GridItem pl="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};
