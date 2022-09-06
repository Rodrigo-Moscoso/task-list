import Tarea from "./Tarea";
import { useState } from "react";

const listadoTareas = [
  {
    id: 1,
    nombre: "Realizar la tarea 1: Limpiar",
    estado: "pendiente",
  },
  {
    id: 2,
    nombre: "Realizar la tarea 2: Barrer",
    estado: "completo",
  },
  {
    id: 3,
    nombre: "Realizar la tarea 3: Aspirar",
    estado: "en proceso",
  },
  {
    id: 4,
    nombre: "Realizar la tarea 4: Desempolvar",
    estado: "en proceso",
  },
  {
    id: 5,
    nombre: "Realizar la tarea 5: Lustrar",
    estado: "completo",
  },
  {
    id: 6,
    nombre: "Realizar la tarea 6: Ordenar",
    estado: "en proceso",
  },
  {
    id: 7,
    nombre: "Realizar la tarea 7: Descansar",
    estado: "pendiente",
  },
];

function ListaTareas({ nombre, estado }) {
  const [tareas, setTareas] = useState(listadoTareas);

  const colocarPendiente = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          return { ...tarea, estado: "pendiente" };
        } else {
          return tarea;
        }
      })
    );
  };

  const colocarCompleto = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          return { ...tarea, estado: "completo" };
        } else {
          return tarea;
        }
      })
    );
  };

  const colocarEnProceso = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          return { ...tarea, estado: "en proceso" };
        } else {
          return tarea;
        }
      })
    );
  };

  return tareas.map((tarea) => (
    <Tarea
      key={tarea.id}
      id={tarea.id}
      nombre={tarea.nombre}
      estado={tarea.estado}
      colocarPendiente={colocarPendiente}
      colocarCompleto={colocarCompleto}
      colocarEnProceso={colocarEnProceso}
    />
  ));
}

export default ListaTareas;
