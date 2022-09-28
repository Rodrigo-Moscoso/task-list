import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack alignContent="center">
      <Heading
        as="h1"
        boxSize="80%"
        textAlign="center"
        color="pink.600"
        borderWidth="5px"
        borderRadius="md"
        borderRightColor="pink.600"
        borderBottomColor="pink.600"
        p="1%"
      >
        Home
      </Heading>
      <Text
        boxSize="70%"
        fontSize="xl"
        textAlign="center"
        color="pink.500"
        borderWidth="2px"
        borderRadius="md"
        borderRightColor="pink.600"
        borderBottomColor="pink.600"
        p="3%"
      >
        Bienvenido a la aplicación para gestionar tareas. Donde podrá hacer un
        seguimiento a las actividades que estén pendientes, en proceso o
        completadas.
      </Text>
    </VStack>
  );
}
