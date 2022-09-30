import {
  Avatar,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useUser } from "../customHooks/useUser";

export default function Home() {
  const [errroMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [photoUrl, setPhoto] = useState("");

  const { user, setUser } = useUser();

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setUser({
          name: userCredential.user.displayName,
          photoUrl: userCredential.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    setName(user.name);
    setPhoto(user.photoUrl);
  }, [user]);

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
            Iniciar Sesión
          </Text>
          <Button onClick={handleGoogle}>Registrarse con Google</Button>
          {errroMessage && <p>{errroMessage}</p>}

          {name ? (
            <Text fontSize="md" color="pink.500">
              ¡Bienvenido!
            </Text>
          ) : (
            <p></p>
          )}

          <Text fontSize="md" color="gray.600">
            {name}
          </Text>

          {name ? <Avatar src={photoUrl} alt="Imagen Usuario" /> : <p></p>}

          {name ? (
            <Text fontSize="md" color="pink.500">
              Ya pudes ir gestionar tus tareas
            </Text>
          ) : (
            <p></p>
          )}
        </VStack>
      </HStack>
    </VStack>
  );
}
