import { Box } from "@chakra-ui/react";
import { SingleStep } from "./SingleStep";
import { colors } from "../../customTheme/colorTheme";

export const StepperComponent = () => {
  return (
    <>
      <Box
        h="1080px"
        w="200px"
        border="3px solid black"
        mt="20px"
        borderColor={colors.primary.doggerBlueBlue[300]}
        borderRadius="15px"
        display="flex"
        pt="80px"
        
      >
        <SingleStep />
      </Box>
    </>
  );
};
