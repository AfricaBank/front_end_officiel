import { ButtonGroup, Icon } from "@chakra-ui/react";
import { CustomButton } from "./CustomButton";
import { AddIcon } from "@chakra-ui/icons";
import { icons } from "../../customTheme/iconStyle";
import { colors } from "../../customTheme/colorTheme";

function ButtonRecherche() {
  return (
    <div>
      <ButtonGroup spacing={4}>
        <CustomButton
          leftIcon={<AddIcon />}
          size="smol"
          bg={colors.primary.darkGrey[400]}
        >
          Creer un dossier
        </CustomButton>
        <CustomButton
          leftIcon={<Icon as={icons.icon10} />}
          size="smol"
          colorScheme="messenger"
        >
          Reviser un dossier
        </CustomButton>
        <CustomButton
          leftIcon={<Icon as={icons.icon2 } />}
          size="smol"
          colorScheme="green"
        >
          Exporter un dossier
        </CustomButton>
        <CustomButton
          colorScheme="white"
          alignItems="center"
          bg={colors.state.orange[900]}
          leftIcon={<Icon as={icons.icon5} />}
        ></CustomButton>
      </ButtonGroup>
    </div>
  );
}

export default ButtonRecherche;
