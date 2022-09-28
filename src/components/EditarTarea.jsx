import { useState } from "react";
import { Input, Heading, VStack, Button } from "@chakra-ui/react";

function EditarTarea({ id, nombre, estado, editarNombreTarea }) {
  const [nombreTareaEditada, setNombreTareaEditada] = useState("");

  const handleSubmit = (e) => {
    //La función preventDefault cancela el evento de enviar los datos del form a un backend
    e.preventDefault();
    editarNombreTarea(id, nombreTareaEditada);
    setNombreTareaEditada("");
  };

  return (
    <form>
      <VStack
        w="100%"
        borderBottomWidth="4px"
        borderRightWidth="8px"
        borderBottomColor="pink.700"
        borderRightColor="pink.700"
        paddingBottom="10px"
      >
        <Heading as="h4" size="md" color="pink.700">
          Editar Tarea
        </Heading>
        <Input
          id="nombre-tarea-editar"
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
          value={nombreTareaEditada}
          onChange={(e) => setNombreTareaEditada(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          bg="pink.500"
          textColor="whiteAlpha.800"
          _hover={{ textColor: "black", bg: "pink.300" }}
        >
          Editar Tarea
        </Button>
      </VStack>
    </form>
  );
}

export default EditarTarea;
