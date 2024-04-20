import { Grid, GridItem, Stack, Icon, Text, Flex } from "@chakra-ui/react";
import { colors } from "../customTheme/colorTheme";
import { icons } from "../customTheme/iconStyle";
import {
  CustomButton,
  CustomIconButton,
} from "./reusableComponents/CustomButton";
export const Header = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" pt="3"gap={4}>
        <GridItem colSpan={2} h="10">
          <Flex
            as={CustomButton}
            flexDirection="column"
            alignItems="center"
            variant="ghost"
          >
            <Icon as={icons.humberger_icon1} mb="-15px" />
            <Icon as={icons.humberger_icon2} mb="-15px" />
            <Icon as={icons.humberger_icon3} mb="1" />
          </Flex>
        </GridItem>
        <GridItem colStart={4} colEnd={6} h="10" mr="10">
          <Stack direction="row" spacing={6}>
            <CustomButton
              rightIcon={<Icon as={icons.dropdown_list_icon} />}
              variant="link"
            >
              Langue
            </CustomButton>
            <CustomIconButton
              colorScheme={colors.primary.doggerBlueBlue[300]}
              bg={colors.primary.doggerBlueBlue[300]}
              aria-label="Call Segun"
              size="md"
              icon={
                <Icon
                  as={icons.profil_avatar_icon}
                  fontSize={22}
                  textAlign="center"
                />
              }
            />
            <Text mt={2}>Username </Text>
            <CustomButton
              rightIcon={
                <CustomIconButton
                  colorScheme={colors.primary.doggerBlueBlue[300]}
                  bg={colors.secondary.lightGrey[0]}
                  aria-label="Call Segun"
                  size="xs"
                  icon={
                    <Icon
                      as={icons.disconnect_icon}
                      color={colors.secondary.royalBlue[300]}
                      bg="WhiteAlpha 800"
                      fontSizeAdjust={10}
                    />
                  }
                />
              }
              colorScheme={colors.primary.doggerBlueBlue[300]}
              bg={colors.primary.doggerBlueBlue[300]}
              variant="solid"
              pl={10}
              pr={10}
            >
              Déconnexion
            </CustomButton>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
