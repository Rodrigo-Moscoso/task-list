import { useState } from "react";

function CrearTarea({ crearNuevaTarea }) {
  const [nuevaTareaNombre, setNuevaTareaNombre] = useState("");

  const handleSubmit = (e) => {
    //La función preventDefault cancela el evento de enviar los datos del form a un backend
    e.preventDefault();
    crearNuevaTarea(nuevaTareaNombre);
    setNuevaTareaNombre("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre-tarea-nueva">
          Ingrese el nombre de la tarea a crear:{" "}
        </label>
        <input
          id="nombre-tarea-nueva"
          type="text"
          placeholder="... nueva tarea"
          value={nuevaTareaNombre}
          onChange={(e) => setNuevaTareaNombre(e.target.value)}
        />
      </div>
      <div>
        <button>Crear Tarea</button>
      </div>
    </form>
  );
}

export default CrearTarea;
