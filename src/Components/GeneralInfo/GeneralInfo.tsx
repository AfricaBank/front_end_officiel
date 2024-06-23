import React from 'react';
import { Box, Flex, Text, Divider, SimpleGrid, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Icon } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import { FaFileExport } from 'react-icons/fa'; // Importing the export icon from react-icons

const GeneralInfo: React.FC = () => {
    return (
        <Box
            bg="gray.100"
            p={6}
            borderRadius="md"
            boxShadow="md"
        >
            <Flex mb={4}>
                <Box
                    bg="blue.100"
                    p={4}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="80px"
                    height="80px"
                >
                    <Text fontSize="3xl">📄</Text>
                </Box>
                <Box ml={4}>
                    <SimpleGrid columns={2} spacing={2}>
                        <Box>
                            <Text fontWeight="bold">Référence du dossier:</Text>
                            <Text>AB-EER-2024</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Type de personne:</Text>
                            <Text>Personne Physique</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Type de dossier:</Text>
                            <Text>EER</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Responsable du dossier:</Text>
                            <Text>Commercial 10</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Code exploitant:</Text>
                            <Text>CC10</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Initiateur:</Text>
                            <Text>Commercial 10</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Statut:</Text>
                            <Text>Instruit</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Date de création:</Text>
                            <Text>10/01/2024</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
            <Divider />
            <Flex mt={4} mb={4}>
                <Button mr={2} colorScheme="blue">Titulaire</Button>
                <Button mr={2} colorScheme="blue">Co-Titulaire</Button>
                <Button mr={2} colorScheme="blue">Personnes liées physiques</Button>
                <Button mr={2} colorScheme="blue">Personnes liées morales</Button>
            </Flex>
            <Flex justify="space-between" mb={4}>
                <Button>Précédent</Button>
                <Flex>
                    <Button leftIcon={<AddIcon />} colorScheme="blue" mr={2}>Créer un Titulaire</Button>
                    <Button leftIcon={<Icon as={FaFileExport} />} colorScheme="green">Exporter</Button>
                </Flex>
            </Flex>
            <Table variant="simple">
                <Thead bg="blue.500">
                    <Tr>
                        <Th color="white">Civilité</Th>
                        <Th color="white">Nom de Famille</Th>
                        <Th color="white">Prénom</Th>
                        <Th color="white">Date de naissance</Th>
                        <Th color="white">Lieu de naissance</Th>
                        <Th color="white">Numéro d'identité</Th>
                        <Th color="white">Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {[...Array(5)].map((_, index) => (
                        <Tr key={index}>
                            <Td>Monsieur</Td>
                            <Td>CAMARA</Td>
                            <Td>Ismael</Td>
                            <Td>01/01/1999</Td>
                            <Td>MOMBASSA</Td>
                            <Td>012584785</Td>
                            <Td>
                                <IconButton aria-label="View" icon={<ViewIcon />} mr={2} />
                                <IconButton aria-label="Edit" icon={<EditIcon />} mr={2} />
                                <IconButton aria-label="Delete" icon={<DeleteIcon />} colorScheme="red" />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Flex mt={4} justify="space-between">
                <Button>Précédent</Button>
                <Flex>
                    <Button mr={2}>1</Button>
                    <Button mr={2}>2</Button>
                    <Button mr={2}>...</Button>
                    <Button>20</Button>
                </Flex>
                <Button>Suivant</Button>
            </Flex>
        </Box>
    );
};

export default GeneralInfo;
