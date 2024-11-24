// src/components/FieldSet.js
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const FieldSet = ({ title, children }) => {
  return (
    <Box
      border="1px"
      borderColor="blue.300"
      borderRadius="md"
      p={4}
      mb={4}
      position="relative"
    >
      {title && (
        <Flex
          position="absolute"
          top="-10px"
          left="16px"
          backgroundColor="white"
          px={2}
          color="blue.500"
          fontWeight="bold"
          fontSize="sm"
        >
          {title}
        </Flex>
      )}
      <Box mt={2}>{children}</Box>
    </Box>
  );
};

export default FieldSet;
