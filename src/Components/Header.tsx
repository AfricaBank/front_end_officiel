import {
  Grid,
  GridItem,
  Text,
  Flex,
  createListCollection,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select";
import { LuSearch } from "react-icons/lu";
import { Button } from "./ui/button";
import { RiArrowRightLine } from "react-icons/ri";
import { TfiAlignRight } from "react-icons/tfi";

export const Header = () => {
  return (
    <>
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem colSpan={1} height="4rem">
          <Flex marginTop="25px" marginLeft="10px">
            <Icon>
              <TfiAlignRight />
            </Icon>
          </Flex>
        </GridItem>
        <GridItem colStart={4} colSpan={4} height="4em">
          <Flex
            align="center"
            gap="4"
            justify="space-around"
            marginTop="12px"
            marginRight="120px"
          >
            <SelectRoot>
              <SelectTrigger>
                <SelectValueText placeholder="Français" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <IconButton aria-label="Search database">
              <LuSearch />
            </IconButton>
            <Text>Username </Text>
            <Button colorPalette="teal">
              Deconnexion <RiArrowRightLine />
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
const frameworks = createListCollection({
  items: [
    { label: "Français", value: "react" },
    { label: "Anglais", value: "vue" },
  ],
});
