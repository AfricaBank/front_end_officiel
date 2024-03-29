import { Grid, GridItem } from "@chakra-ui/react";
export const RootLayout = () => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"70px 1fr 50px"}
      gridTemplateColumns={"289px 1fr"}
      h="100vh"
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"header"}>
        Navbar
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"nav"}>
        Sidebar
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"main"}>
        MainContent
      </GridItem>
      <GridItem pl="2" border="1px" borderColor="gray.500" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};
