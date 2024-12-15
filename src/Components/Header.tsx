import { Grid, GridItem, Stack, Icon, Text, Flex } from "@chakra-ui/react";
import { icons } from "../customTheme/iconStyle";
import {
  CustomButton,

} from "./reusableComponents/CustomButton";
export const Header = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" pt="3" gap={4}>
        <GridItem colSpan={2} h="10">
          <Flex
            as={CustomButton}
            flexDirection="column"
            alignItems="center"

          >
            <Icon as={icons.humberger_icon1} mb="-15px" />
            <Icon as={icons.humberger_icon2} mb="-15px" />
            <Icon as={icons.humberger_icon3} mb="1" />
          </Flex>
        </GridItem>
        <GridItem colStart={4} colEnd={6} h="10" mr="10">
          <Stack direction="row">


            <Text mt={2}>Username </Text>

          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
