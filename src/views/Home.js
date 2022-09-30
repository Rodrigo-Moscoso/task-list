import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebaseConfig";

export default function Home() {
  const [errroMessage, setErrorMessage] = useState("");

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log(userCredential.user.displayName);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

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
      <HStack justify="center">
        <Text
          boxSize="50%"
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
        <VStack
          boxSize="30%"
          fontSize="xl"
          textAlign="center"
          color="pink.500"
          borderWidth="2px"
          borderRadius="md"
          borderRightColor="pink.600"
          borderBottomColor="pink.600"
          p="3%"
          spacing="5%"
        >
          <Text as="b" fontSize="xl" bold textAlign="center" color="pink.500">
            Ingrese a la Aplicación:
          </Text>
          <Button onClick={handleGoogle}>Registrarse con Google</Button>
          {errroMessage && <p>{errroMessage}</p>}
        </VStack>
      </HStack>
    </VStack>
  );
}
