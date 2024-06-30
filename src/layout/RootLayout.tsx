import { Grid, GridItem, Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { colors } from "../customTheme/colorTheme";
import { Footer } from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { breakpoints } from "../customTheme/customTypographie";
export const RootLayout = () => {
  return (
    <Container centerContent maxW={breakpoints.xl} minW={breakpoints.lg}>
      <Box w="full" ml="-30px">
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
            pl="2px"
            area={"header"}
            bg="white"
            position="fixed"
            top="0"
            ml="300px"
            zIndex="1"
            height="70px"
            width="auto"
          >
            <Header />
          </GridItem>
          <GridItem area={"nav"} bg={colors.primary.doggerBlueBlue[101]}>
            <Sidebar />
          </GridItem>
          <GridItem pl="2" border="1px" borderColor="gray.500" area={"main"}>
            <Outlet />
          </GridItem>
          <GridItem pl="2" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};
