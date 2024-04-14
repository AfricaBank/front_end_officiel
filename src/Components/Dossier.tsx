import React, { useState } from 'react';
import { Button, ChakraProvider, CSSReset, extendTheme, Box } from '@chakra-ui/react';
import Titulaire from './Titulaire';

const theme = extendTheme({
    // Ajoutez des configurations de thème personnalisées si nécessaire
});

const Dossier: React.FC = () => {
    const [titulaireVisible, setTitulaireVisible] = useState(false);

    const handleAddTitulaire = () => {
        setTitulaireVisible(true);
    };

    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            {titulaireVisible ? (
                <Titulaire />
            ) : (
                <Box>
                    <Button colorScheme="teal" onClick={handleAddTitulaire}>
                        Ajouter Titulaire
                    </Button>
                    {/* Ajoutez ici d'autres composants ou éléments au besoin */}
                </Box>
            )}
        </ChakraProvider>
    );
};

export default Dossier;
