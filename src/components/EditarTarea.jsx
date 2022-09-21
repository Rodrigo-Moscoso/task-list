import { useState } from "react";

function EditarTarea({ id, nombre, estado, editarNombreTarea }) {
  const [nombreTareaEditada, setNombreTareaEditada] = useState("");

  const handleSubmit = (e) => {
    //La función preventDefault cancela el evento de enviar los datos del form a un backend
    e.preventDefault();
    editarNombreTarea(id, nombreTareaEditada);
    setNombreTareaEditada("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre-tarea-editar">
          Ingrese la nombre de la tarea a editar:{" "}
        </label>
        <input
          id="nombre-tarea-editar"
          type="text"
          placeholder="... editar tarea"
          value={nombreTareaEditada}
          onChange={(e) => setNombreTareaEditada(e.target.value)}
        />
      </div>
      <div>
        <button>Editar Tarea</button>
      </div>
    </form>
  );
}

export default EditarTarea;
