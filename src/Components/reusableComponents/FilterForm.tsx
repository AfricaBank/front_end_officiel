import { Box, Input, Button, Flex, Spacer } from '@chakra-ui/react';

const Filtre = ({ onFilter }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const filterData = {
            civilite: formData.get('civilite'),
            prenom: formData.get('prenom'),
            nom: formData.get('nom'),
            dateNaissance: formData.get('dateNaissance'),
        };
        onFilter(filterData);
    };

    return (
        <Box p="4"

             bg="#C2C7CA26">
            <Flex>
                <Box display="flex" flexDirection="column">
                    <Button colorScheme="teal" type="submit" w='120px' margin='10px'>Nom</Button>
                    <Button colorScheme="teal" type="submit" w='120px' margin='10px'>Siège/Racine</Button>
                    <Button colorScheme="teal" type="submit" w='120px' margin='10px'>Id National</Button>
                    <Button colorScheme="teal" type="submit" w='120px' margin='10px'>Id Bénéficiaire</Button>
                </Box>
                <Spacer />
                <Box height='100%' bg="#FFFFFF" width="40%" boxShadow="1px 1px 10px #000">
                    <form onSubmit={handleSubmit}>
                        <Box mb="4" >
                            <Flex marginBottom='100px' marginTop='10px'>
                                <Input name="civilite" placeholder="Civilité" ml="2" mr="2"/>
                                <Input name="prenom" placeholder="Prénom" ml="2" mr="2" />
                            </Flex>
                            <Flex marginBottom='10px' marginTop='100px'>
                                <Input name="nom" placeholder="Nom" ml="2" mr="2" />
                                <Input type="date" name="dateNaissance" placeholder="Date de naissance" ml="2" mr="2" />
                            </Flex>
                            {/*<Spacer />*/}
                            {/*<Button colorScheme="teal" type="submit">Filtrer</Button>*/}
                        </Box>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
};

export default Filtre;
