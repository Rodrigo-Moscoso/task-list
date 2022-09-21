import Header from "./components/Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import SobreNosotros from "./views/SobreNosotros";
import Tareas from "./views/Tareas";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/tareas">
          <button>Tareas</button>
        </Link>
        <Link to="/sobrenosotros">
          <button>Sobre Nosotros</button>
        </Link>
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
