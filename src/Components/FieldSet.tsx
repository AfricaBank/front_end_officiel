// src/components/FieldSet.js
import React from 'react';
import { Box, VStack, Text, Divider } from '@chakra-ui/react';

const FieldSet = ({ title, children }) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} mb={4}>
      {title && (
        <VStack align="start" mb={4}>
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {title}
          </Text>
          <Divider />
        </VStack>
      )}
      <VStack spacing={4}>
        {children}
      </VStack>
    </Box>
  );
};

export default FieldSet;
