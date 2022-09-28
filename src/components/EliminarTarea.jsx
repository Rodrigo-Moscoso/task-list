import { VStack, Heading, Button } from "@chakra-ui/react";

function EliminarTarea({ id, borrarTarea }) {
  return (
    <VStack
      w="20%"
      borderBottomWidth="4px"
      borderRightWidth="8px"
      borderBottomColor="pink.700"
      borderRightColor="pink.700"
      paddingBottom="10px"
    >
      <Heading as="h4" size="md" color="pink.700">
        Eliminar Tarea
      </Heading>
      <Button
        bg="pink.500"
        textColor="whiteAlpha.800"
        _hover={{ textColor: "black", bg: "pink.300" }}
        onClick={borrarTarea}
      >
        Borar Tarea
      </Button>
    </VStack>
  );
}

export default EliminarTarea;
