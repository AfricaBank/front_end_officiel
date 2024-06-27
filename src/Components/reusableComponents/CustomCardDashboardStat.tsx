import { colors } from "../../customTheme/colorTheme";
import { Flex, Text, Box, Icon, Spacer } from "@chakra-ui/react";
import { icons } from "../../customTheme/iconStyle";
export const CustomCardDashboardStat = () => {
  return (
    <>
      <Box
        maxWidth="331px"
        m="10"
        borderRadius="md"
        minHeight="170px"
        p={"14px"}
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1)"
      >
        <Flex>
          <Box rounded="10" bg={colors.primary.doggerBlueBlue[300]} p="4">
            <Icon
              as={icons.dossiers_management_icon}
              color="white"
              fontSize="30px"
              p="3px"
            />
          </Box>
          <Box ml="3">
            <Text mb="2">Total Dossier </Text>
            <Text fontSize="xl">
              1200
              <sup
                style={{
                  verticalAlign: "super",
                  color: "#00A887",
                  fontSize: "13px",
                }}
              >
                +12%
              </sup>
            </Text>
          </Box>
        </Flex>
        <Box position="relative" mt="28px">
          <Flex>
            <Text color={colors.secondary.green[300]}>0</Text>
            <Spacer />
            <Text color={colors.secondary.green[300]}>1200</Text>
          </Flex>
          <Box bg={colors.secondary.green[300]} h="8px" w="100%" rounded="md" />
        </Box>
      </Box>
    </>
  );
};
