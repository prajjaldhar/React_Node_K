import React from "react";
import { Box, VStack, HStack, Avatar, Text, Button } from "@chakra-ui/react";

const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.100"
    >
      <Box
        p={8}
        bg="white"
        boxShadow="xl"
        borderRadius="lg"
        w={"96"}
        maxW="xl"
        textAlign="center"
      >
        {/* HStack to align boxes horizontally */}
        <HStack spacing={6} justify="center">
          {/* Circular Box */}
          <Box
            w={"16"}
            h={"16"}
            bg="blue.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontWeight="bold">
              C
            </Text>
          </Box>

          {/* Square Box */}
          <Box
            w={16}
            h={16}
            bg="red.500"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontWeight="bold">
              S
            </Text>
          </Box>
        </HStack>

        {/* Profile Details */}
        <VStack spacing={4} mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md" color="gray.500">
            Web Developer
          </Text>
          <Button colorScheme="blue" size="sm">
            View Profile
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default App;
