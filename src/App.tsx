import { Heading, Text, Container } from "@chakra-ui/react";
const App = () => {
  return (
    <>
      <Container>
        <Heading>Page de test</Heading>
        <Text>Ce fichier est dédiée specialement pour les test</Text>
        <Text>
          Lorsque vous allez puller le projet racine, vous pouvez ecraser son
          contenu et vous servir de celui pour vos tests en local{" "}
        </Text>
        <Text>
          Lors des merges du code, le contenu de fichier ne sera pas pris en
          compte
        </Text>
      </Container>
    </>
  );
};

export default App;
