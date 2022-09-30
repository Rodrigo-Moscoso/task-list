import Header from "./components/Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import SobreNosotros from "./views/SobreNosotros";
import Tareas from "./views/Tareas";
import { Button, Center, HStack, Text } from "@chakra-ui/react";
import { useUser } from "./customHooks/useUser.jsx";

function App() {
  const { user } = useUser();
  return (
    <>
      <Header />

      <Router>
        <HStack p="3%" justify="center" spacing="3%">
          <Link to="/">
            <Button
              bg="pink.600"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/tareas">
            <Button
              bg="pink.600"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
            >
              Tareas
            </Button>
          </Link>
          <Link to="/sobrenosotros">
            <Button
              bg="pink.600"
              textColor="whiteAlpha.800"
              _hover={{ textColor: "black", bg: "pink.300" }}
            >
              Sobre Nosotros
            </Button>
          </Link>
        </HStack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route
            path="/tareas"
            element={
              user.name ? (
                <Tareas />
              ) : (
                <Center>
                  <Text
                    as="b"
                    fontSize="xl"
                    bold
                    textAlign="center"
                    color="pink.500"
                  >
                    Acceso denegado. Por favor, inicie sesión primero.
                  </Text>
                </Center>
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
