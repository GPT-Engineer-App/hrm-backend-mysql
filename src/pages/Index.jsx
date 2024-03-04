import React from "react";
import { Box, Flex, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaUserPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

const Index = () => {
  // Example data, replace with real data from your backend.
  const employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", department: "Development" },
    { id: 2, name: "Jane Smith", position: "Product Manager", department: "Product" },
    // ... more employees
  ];

  // Color mode for styling
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Box bg={bgColor} minH="100vh" p={5}>
      <Heading as="h1" size="xl" mb={5} color={textColor}>
        HRM Dashboard
      </Heading>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Text fontSize="xl" color={textColor}>
          Employees
        </Text>
        <Button leftIcon={<FaUserPlus />} colorScheme="teal">
          Add Employee
        </Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color={textColor}>ID</Th>
            <Th color={textColor}>Name</Th>
            <Th color={textColor}>Position</Th>
            <Th color={textColor}>Department</Th>
            <Th color={textColor}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.id}>
              <Td>{employee.id}</Td>
              <Td>{employee.name}</Td>
              <Td>{employee.position}</Td>
              <Td>{employee.department}</Td>
              <Td>
                <IconButton aria-label="Edit" icon={<FaPencilAlt />} mr={2} colorScheme="yellow" />
                <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
