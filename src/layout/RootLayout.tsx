import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { colors } from "../customTheme/colorTheme";
import { Footer } from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

export const RootLayout = () => {
  return (
    <Box w="full" ml="-30px" m="0px" p="0px">
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
        <GridItem
          area={"header"}
          bg="white"
          position="relative"
          top="0"
          zIndex="1"
          height="70px"
          width="auto"
          border="1px solid green"
        >
          <Header />
        </GridItem>
        <GridItem area={"nav"} bg={colors.primary.doggerBlueBlue[101]}>
          <Sidebar />
        </GridItem>
        <GridItem
          area={"main"}
          pl="2"
          border="1px solid red"
          borderColor="gray.500"
        >
          <Outlet />
        </GridItem>
        <GridItem pl="2" area={"footer"} border="1px solid black">
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};
