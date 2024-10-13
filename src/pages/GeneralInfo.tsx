import React from 'react';
import {
    Box,
    Flex,
    Text,
    Divider,
    SimpleGrid,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Icon,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useBreakpointValue
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import { FaFileExport } from 'react-icons/fa';
import { colors } from '../customTheme/colorTheme';
import { icons } from '../customTheme/iconStyle';



export const GeneralInfo = () => {
    // Use breakpoint value for responsive SimpleGrid columns
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });

    return (
        <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md" mx={{ base: 2, md: 6 }}>
            <Flex mb={4} direction={{ base: 'column', md: 'row' }}>
                <Box
                    bg="blue.100"
                    p={4}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={{ base: "60px", md: "80px" }}
                    height={{ base: "60px", md: "80px" }}
                    mb={{ base: 4, md: 0 }}
                >
                    <Text fontSize={{ base: "2xl", md: "3xl" }}>📄</Text>
                </Box>
                <Box ml={{ base: 0, md: 4 }} flex="1" border="1px" borderColor="blue.200" p={4} borderRadius="md">
                    <SimpleGrid columns={columns} spacingX={4} spacingY={2}>
                        <Box>
                            <Text fontWeight="bold">Référence du dossier :</Text>
                            <Text>AB-EER-2024</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Type de personne :</Text>
                            <Text>Personne Physique</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Code exploitant :</Text>
                            <Text>CC10</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Initiateur :</Text>
                            <Text>Commercial 10</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Type de dossier :</Text>
                            <Text>EER</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Responsable du dossier :</Text>
                            <Text>Commercial 10</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Statut :</Text>
                            <Text>Instruit</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Date de création :</Text>
                            <Text>10/01/2024</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
            <Divider />

            <Tabs variant="enclosed" align="center">
                <TabList>
                    <Tab>Titulaire</Tab>
                    <Tab>Co-Titulaire</Tab>
                    <Tab>Personnes liées physiques</Tab>
                    <Tab>Personnes liées morales</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Text>Content pour Titulaire</Text>
                    </TabPanel>
                    <TabPanel>
                        <Flex justify="space-between" mb={4} wrap="wrap">
                            <Button mb={2}>Précédent</Button>
                            <Flex mb={2}>
                                <Button leftIcon={<AddIcon />} colorScheme="blue" mr={2} variant='outline'>Créer un Titulaire</Button>
                                <Button leftIcon={<Icon as={FaFileExport} />} colorScheme="green">Exporter</Button>
                            </Flex>
                        </Flex>
                        <Box overflowX="auto">
                            <Table variant="striped" border="2px" borderColor={colors.primary.doggerBlueBlue[102]} borderRadius="md">
                                <Thead bg={colors.primary.doggerBlueBlue[102]}>
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
                        </Box>
                        <Flex mt={4} justify="space-between" wrap="wrap">
                            <Button mb={2} border="2px" borderColor={colors.primary.doggerBlueBlue[102]} borderRadius="md" colorScheme='blue'>Précédent</Button>
                            <Flex mb={2}>
                                <Button mr={2}>1</Button>
                                <Button mr={2}>2</Button>
                                <Button mr={2}>...</Button>
                                <Button>20</Button>
                            </Flex>
                            <Button mb={2} border="2px" borderColor={colors.primary.doggerBlueBlue[102]} borderRadius="md" colorScheme='blue'>Suivant</Button>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Text>Content pour Personnes liées physiques</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text>Content pour Personnes liées morales</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

// export default GeneralInfo;
