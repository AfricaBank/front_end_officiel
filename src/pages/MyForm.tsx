// src/pages/MyForm.js
import React from 'react';
import { Box, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import FieldSet from '../Components/FieldSet';

const MyForm = () => {
  return (
    <Box maxW="md" mx="auto" mt={8}>
      <form>
        <FieldSet title="Informations Personnelles">
          <FormControl id="firstName" isRequired>
            <FormLabel>Prénom</FormLabel>
            <Input placeholder="Entrez votre prénom" />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Nom</FormLabel>
            <Input placeholder="Entrez votre nom" />
          </FormControl>
        </FieldSet>

        <FieldSet title="Détails de Contact">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Entrez votre email" />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Téléphone</FormLabel>
            <Input type="tel" placeholder="Entrez votre numéro de téléphone" />
          </FormControl>
        </FieldSet>

        <Button colorScheme="blue" type="submit" w="full">
          Soumettre
        </Button>
      </form>
    </Box>
  );
};

export default MyForm;
