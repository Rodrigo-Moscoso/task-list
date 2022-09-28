import { useState } from "react";
import {
  Center,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

function CrearTarea({ crearNuevaTarea }) {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState("");
  const [nuevaTareaDescripcion, setNuevaDescripcion] = useState("");

  const handleSubmit = (e) => {
    //La función preventDefault cancela el evento de enviar los datos del form a un backend
    e.preventDefault();
    crearNuevaTarea(nuevaTareaNombre, nuevaTareaDescripcion);
    setNuevaTareaNombre("");
    setNuevaDescripcion("");
  };

  return (
    <form>
      <Center>
        <VStack
          w="xl"
          borderBottomWidth="4px"
          borderRightWidth="8px"
          borderBottomColor="pink.700"
          borderRightColor="pink.700"
          paddingBottom="10px"
        >
          <Heading as="h4" size="lg" color="pink.700">
            Crear Nueva Tarea
          </Heading>
          <VStack boxSize="100%">
            <Text fontSize="x-large" textColor="pink.600">
              Nombre:
            </Text>
            <Input
              id="nombre-tarea-nueva"
              type="text"
              size="lg"
              boxSize="60%"
              textAlign="center"
              variant="filled"
              _placeholder={{
                opacity: 0.7,
                color: "pink.500",
              }}
              placeholder="... nombre de tarea"
              value={nuevaTareaNombre}
              onChange={(e) => setNuevaTareaNombre(e.target.value)}
              required
            />
          </VStack>

          <VStack boxSize="100%">
            <Text fontSize="x-large" textColor="pink.600">
              Descripción:
            </Text>
            <Input
              id="descripcion-tarea-nueva"
              type="text"
              size="lg"
              boxSize="60%"
              textAlign="center"
              variant="filled"
              _placeholder={{
                opacity: 0.7,
                color: "pink.500",
              }}
              placeholder="... descripción de tarea"
              value={nuevaTareaDescripcion}
              onChange={(e) => setNuevaDescripcion(e.target.value)}
            />
          </VStack>
          <HStack>
            <Button
              onClick={handleSubmit}
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
            >
              Crear Tarea
            </Button>
          </HStack>
        </VStack>
      </Center>
    </form>
  );
}

export default CrearTarea;
