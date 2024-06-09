import { Grid, GridItem, Box } from "@chakra-ui/react";
import { SidebarMenu } from "../Components/SidebarMenu";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { colors } from "../customTheme/colorTheme";
import { Footer } from "../Components/Footer";
export const RootLayout = () => {
  return (
    <Box>
      {" "}
      <Grid
        templateAreas={`"nav header"
                "nav main"
                "nav footer"`}
        gridTemplateRows={"70px 1fr 50px"}
        gridTemplateColumns={"299px 1fr"}
        h="100vh"
        gap="0.5"
        color="blackAlpha.700"
        fontWeight="bold"
        width="100%"
      >
        <GridItem pl="2px" area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"nav"} bg={colors.primary.doggerBlueBlue[101]}>
          <SidebarMenu />
        </GridItem>
        <GridItem pl="2" border="1px" borderColor="gray.500" area={"main"}>
          <Outlet />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};
