import { Button, Heading, HStack, VStack } from "@chakra-ui/react";

function Tarea({
  id,
  nombre,
  descripcion,
  estado,
  colocarPendiente,
  colocarCompleto,
  colocarEnProceso,
}) {
  return (
    <HStack>
      <HStack
        width="2xl"
        spacing="auto"
        className="Tarea"
        style={{
          background:
            estado === "completo"
              ? "lightgreen"
              : estado === "en proceso"
              ? "lightblue"
              : "#F7DC6F",
        }}
      >
        <VStack
          w="90%"
          borderRadius="5px"
          borderColor="whiteAlpha.600"
          borderWidth="2px"
          p="3px"
        >
          <Heading as="h4" size="lg" color="pink.700">
            Tarea
          </Heading>
          <Heading as="h5" size="md">
            {nombre}
          </Heading>
          <h5>{descripcion}</h5>
          <p>({estado})</p>
        </VStack>
        {estado === "completo" ? (
          <img
            src="https://t3.ftcdn.net/jpg/02/62/70/68/240_F_262706858_dHBUuxgP8bjfNAcGDbNQgToJlqRlYo72.jpg"
            alt="Icono Check Verde de Completo"
            width="50px"
          />
        ) : estado === "en proceso" ? (
          <img
            src="https://t4.ftcdn.net/jpg/02/72/79/67/240_F_272796737_1gfclSQF8yzFHZeE2XX5513eOQMV53dw.jpg"
            alt="Icono Check Azul de Parcial"
            width="50px"
          />
        ) : (
          <img
            src="https://t3.ftcdn.net/jpg/02/81/22/18/240_F_281221851_8k7mS1AMptTskwKBWrU6Y9U6NdwILIYK.jpg"
            alt="Icono Check Amarillo de Pendiente"
            width="50px"
          />
        )}
      </HStack>
      <VStack
        w="30%"
        justify="center"
        borderBottomWidth="4px"
        borderRightWidth="8px"
        borderBottomColor="pink.700"
        borderRightColor="pink.700"
        paddingBottom="10px"
      >
        <Heading as="h4" size="md" color="pink.700">
          Cambiar Estado
        </Heading>
        {estado === "completo" ? (
          <VStack justify="center">
            <Button
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
              className="boton-estado"
              onClick={() => {
                colocarEnProceso(id);
              }}
            >
              En Proceso
            </Button>
            <Button
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
              className="boton-estado"
              onClick={() => {
                colocarPendiente(id);
              }}
            >
              Pendiente
            </Button>
          </VStack>
        ) : estado === "pendiente" ? (
          <VStack justify="center">
            <Button
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
              className="boton-estado"
              onClick={() => {
                colocarCompleto(id);
              }}
            >
              Completo
            </Button>
            <Button
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
              className="boton-estado"
              onClick={() => {
                colocarEnProceso(id);
              }}
            >
              En Proceso
            </Button>
          </VStack>
        ) : (
          <VStack justify="center">
            <Button
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
              className="boton-estado"
              onClick={() => {
                colocarCompleto(id);
              }}
            >
              Completo
            </Button>

            <Button
              bg="pink.500"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
              className="boton-estado"
              onClick={() => {
                colocarPendiente(id);
              }}
            >
              Pendiente
            </Button>
          </VStack>
        )}
      </VStack>
    </HStack>
  );
}

export default Tarea;
