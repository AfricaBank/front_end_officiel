import {
  Step,
  StepIndicator,
  StepNumber,
  StepStatus,
  Stepper,
  useSteps,
  Box,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../customTheme/colorTheme";

const steps = [
  { title: "Etat Civil", description: "Etat Civil" },
  { title: "Origine EER", description: "Origine EER" },
  { title: "Informations  personnelles ", description: "Info personnel" },
  { title: "Activités Professionnelles ", description: "Activités Pro" },
  { title: "Conformité & Relation bancaire", description: "Conformité RB" },
  { title: "Pièces justificatives", description: "Pièces justificatives" },
];

export const SingleStep = () => {
  const { activeStep } = useSteps({
    index: 1, // Initial active step (starts from second step)
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="12">
      {steps.map((step, index) => (
        <Step key={index}>
          {" "}
          <Box
            width="10rem"
            border="2px"
            borderRadius="10px"
            borderColor={colors.primary.doggerBlueBlue[300]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px 10px"
            m="-10px 16px"
          >
            <HStack
              spacing={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <StepIndicator>
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <VStack spacing={0}>
                <Text fontWeight="bold" textAlign="center">
                  {step.title}
                </Text>
              </VStack>
            </HStack>
            {index < steps.length - 1 && (
              <Box
                height="1px"
                bg={colors.primary.doggerBlueBlue[200]}
                width="0pxx"
              /> // Separator
            )}
          </Box>
          {index >= 1 && (
            <Box
              h="30px"
              w="3px"
              backgroundColor={colors.primary.doggerBlueBlue[300]}
              marginLeft="-105px"
              marginTop="-40px"
            ></Box>
          )}
        </Step>
      ))}
    </Stepper>
  );
};
