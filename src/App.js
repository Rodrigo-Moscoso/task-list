import Header from "./components/Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import SobreNosotros from "./views/SobreNosotros";
import Tareas from "./views/Tareas";
import { Button, HStack } from "@chakra-ui/react";

function App() {
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
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
