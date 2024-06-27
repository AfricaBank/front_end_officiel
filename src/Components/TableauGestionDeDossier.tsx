import {Table, Thead, Input, Tbody, Tr, Th, Td, Box, IconButton, Flex, HStack, Button} from "@chakra-ui/react";
import {useState} from "react";
import { icons } from'../customTheme/iconStyle.ts'
import {colors} from "../customTheme/colorTheme.ts";
import FilterForm from "./reusableComponents/FilterForm.tsx";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const data = [
    {
        prenomNom: "Issaga Gaye",
        numeroDossier: "123456",
        typeProcessus: "EER",
        dernierStatut: "Términer",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Mor Mbathie",
        numeroDossier: "20000",
        typeProcessus: "EER",
        dernierStatut: "À valider DG",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Abdilah",
        numeroDossier: "85000",
        typeProcessus: "EER",
        dernierStatut: "En cours",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Glad",
        numeroDossier: "841200",
        typeProcessus: "EER",
        dernierStatut: "À valider DE",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Berthonge",
        numeroDossier: "58000",
        typeProcessus: "Processus A",
        dernierStatut: "En cours",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Pape Aldiouma",
        numeroDossier: "54230",
        typeProcessus: "Processus A",
        dernierStatut: "En cours",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Ahmed Kawsara",
        numeroDossier: "502100",
        typeProcessus: "Processus A",
        dernierStatut: "En cours",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
    {
        prenomNom: "Diagaraf",
        numeroDossier: "42000",
        typeProcessus: "Processus A",
        dernierStatut: "En cours",
        typeModification: "Modification 1",
        typeClient: "Client A",
        categorieClientele: "Catégorie 1",
        dateCreation: "2024-03-21",
        dateFin: "2024-04-21",
        initiateur: "Alice",
        codeExploitant: "ABC123",
    },
];

const Tableau = () => {
    const [filterValue, setFilterValue] = useState('');
    const filteredData = data.filter(item =>
        item.prenomNom.toLowerCase().includes(filterValue.toLowerCase())
    );
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
    };
    const navigate = useNavigate();

    const handleInitiateDossier = () => {
        navigate('/initiation-dossier');
      };

    return (
        <Box>
            <Box >
                {/* Formulaire de filtre */}

                <FilterForm />
                <Box mb={4}>
                    <Button onClick={handleInitiateDossier} colorScheme="teal">
                        Initier un dossier
                    </Button>
                </Box>
            </Box>
            <HStack overflow="auto">
                    <Table variant="simple">
                        <Thead>
                            <Tr height="62px"
                                top="666px"
                                left="123.31px"
                                borderRadius="10px"
                                bg={colors.primary.doggerBlueBlue[200]}>
                                <Th borderLeftRadius="10px" color="white" whiteSpace="nowrap">Prenom Nom ou Raison sociale</Th>
                                <Th color="white" whiteSpace="nowrap">Numéro de dossier</Th>
                                <Th color="white" whiteSpace="nowrap">Type de processus</Th>
                                <Th color="white" whiteSpace="nowrap">Dernier Statut</Th>
                                <Th color="white" whiteSpace="nowrap">Type de modification</Th>
                                <Th color="white" whiteSpace="nowrap">Type de Client</Th>
                                <Th color="white" whiteSpace="nowrap">Catégorie clientèle</Th>
                                <Th color="white" whiteSpace="nowrap">Date de création</Th>
                                <Th color="white" whiteSpace="nowrap">Date de fin</Th>
                                <Th color="white" whiteSpace="nowrap">Initiateur</Th>
                                <Th color="white" whiteSpace="nowrap">Code Exploitant</Th>
                                <Th borderRightRadius="10px" color="white">Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody overflowX={"scroll"}>
                            {filteredData.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.prenomNom}</Td>
                                    <Td>{item.numeroDossier}</Td>
                                    <Td>{item.typeProcessus}</Td>
                                    <Td>{item.dernierStatut}</Td>
                                    <Td>{item.typeModification}</Td>
                                    <Td>{item.typeClient}</Td>
                                    <Td>{item.categorieClientele}</Td>
                                    <Td>{item.dateCreation}</Td>
                                    <Td>{item.dateFin}</Td>
                                    <Td>{item.initiateur}</Td>
                                    <Td>{item.codeExploitant}</Td>
                                    <Td>
                                        <Flex>
                                            <IconButton
                                                aria-label="Modifier"
                                                colorScheme='blue'
                                                size='sm'
                                                icon={<icons.edit_icons/>}
                                                //onClick={() => handleEdit(item)}
                                                mr={2}
                                            />
                                            <IconButton
                                                aria-label="Modifier"
                                                size='sm'
                                                bg={colors.state.orange[0]}
                                                icon={<icons.edit_icon fontSize="30px" paddingTop={2.5} paddingLeft={2.5}/>}
                                                //onClick={() => handleEdit(item)}
                                                mr={2}
                                            />
                                            <IconButton
                                                aria-label="Supprimer"
                                                colorScheme='red'
                                                size='sm'
                                                icon={<icons.delete_icon fontSize="30px" paddingTop={2.5} paddingLeft={2.5}/>}
                                                //onClick={() => handleDelete(item)}
                                            />
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
            </HStack>
        </Box>
    );
};

export default Tableau;
