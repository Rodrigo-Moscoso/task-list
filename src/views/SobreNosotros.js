import { Heading, Text, VStack } from "@chakra-ui/react";

export default function SobreNosotros() {
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
        Sobre Nosotros
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
        Con esta APP podrá crear un listado de tareas, dondre podrá
        verificar/cambiar su estado de ejecución, así como crear, editar o
        borrar tareas. Para mayor seguridad, se ha incluido la autenticación de
        usuarios.
      </Text>

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
        Las tecnologías usadas para esta APP han sido hechas con React, React
        Router, Lazy Loading, Hooks, Chakras, Autenticación y Firestore, entre
        otras herramientas.
      </Text>
    </VStack>
  );
}
