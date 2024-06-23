import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

interface FileDetailsProps {
    reference: string;
    typePersonne: string;
    typeDossier: string;
    responsable: string;
    codeExploitant: string;
    initiateur: string;
    statut: string;
    dateCreation: string;
}

const FileDetails: React.FC<FileDetailsProps> = ({
    reference,
    typePersonne,
    typeDossier,
    responsable,
    codeExploitant,
    initiateur,
    statut,
    dateCreation
}) => {
    return (
        <SimpleGrid columns={2} spacing={4}>
            <Box>
                <Text fontWeight="bold">Référence du dossier:</Text>
                <Text>{reference}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Type de personne:</Text>
                <Text>{typePersonne}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Type de dossier:</Text>
                <Text>{typeDossier}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Responsable du dossier:</Text>
                <Text>{responsable}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Code exploitant:</Text>
                <Text>{codeExploitant}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Initiateur:</Text>
                <Text>{initiateur}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Statut:</Text>
                <Text>{statut}</Text>
            </Box>
            <Box>
                <Text fontWeight="bold">Date de création:</Text>
                <Text>{dateCreation}</Text>
            </Box>
        </SimpleGrid>
    );
};

export default FileDetails;
