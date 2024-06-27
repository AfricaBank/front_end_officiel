import React from 'react';
import {colors} from "../customTheme/colorTheme.ts";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";

const InitiationDossier = () => {

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    setCurrentDate(dateString);
  }, []);
  const navigate = useNavigate();
  const handleAbandoner = () => {
    navigate('/dossiers-gestion');
  };
  return (
    <Box>
    <Box h='50px' 
      bg='#C9E1F8'
      marginTop={"10px"} 
      display="flex"
      alignItems="center"
      paddingLeft="20px">
      INITIALISATION DE DOSSIER
    </Box>
    <Center h="100vh" bg="gray.100">
      <Box 
        p={8} 
        borderWidth={1} 
        borderRadius="lg" 
        bg="white" 
        boxShadow="lg" 
        width="full" 
        maxWidth="800px"
      >
        <form>
        
          <VStack spacing={4} align="stretch">

          <HStack spacing={4}>
              <FormControl id="dateCreation">
                <FormLabel>Date de création</FormLabel>
                <Input type='date'
                value={currentDate} 
                isReadOnly 
                bg="gray.100" // Griser le champ
                />
              </FormControl>
              <FormControl id="typePersonne">
                <FormLabel>Type de personne</FormLabel>
                <Select>
                  <option value="PP">Personne Physique</option>
                  <option value="PM">Personne Morale</option>
                </Select>
              </FormControl>
            </HStack>

            <HStack spacing={4}>
              <FormControl id="codeExploitant">
                <FormLabel>Code Siège</FormLabel>
                <Select>
                  <option value="code1">Code 1</option>
                  <option value="code2">Code 2</option>
                  <option value="code3">Code 3</option>
                </Select>
              </FormControl>
              <FormControl id="nomExploitant">
                <FormLabel>Nature de la relation</FormLabel>
                <Input type="text" placeholder='Nature de la relation'/>
              </FormControl>
            </HStack>

            <HStack spacing={4}>
              <FormControl id="typePersonne">
                <FormLabel>Code exploitant</FormLabel>
                <Select>
                  <option value="type1">Code ex 1</option>
                  <option value="type2">Code ex 1</option>
                  <option value="type3">Code ex 1</option>
                </Select>
              </FormControl>
              <FormControl id="nomCollectivite">
                <FormLabel>Non de la colléctivité</FormLabel>
                <Input type="text" placeholder='Nom de la colléctivité'/>
              </FormControl>
            </HStack>

            <HStack spacing={4}>
              <FormControl id="nomExploitant">
                <FormLabel>Nom de l'exploitant</FormLabel>
                <Input type="text" placeholder='Issaga Gaye' bg="gray.100"/>
              </FormControl>
              <FormControl id="civiliteCollectivite">
                <FormLabel>Civilité de la collectivité</FormLabel>
                <Select>
                  <option value="mr">Monsieur</option>
                  <option value="mme">Madame</option>
                  <option value="mlle">Mademoiselle</option>
                </Select>
              </FormControl>
            </HStack>

            <HStack spacing={100} marginLeft={"25%"}>
            <Button bg={colors.primary.doggerBlueBlue[300]} color={"#ffff"}>Instruire le dossier</Button>
            <Button colorScheme='red' variant='outline' onClick={handleAbandoner}>Abandonner</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Center>
    </Box>
  );
};

export default InitiationDossier;
