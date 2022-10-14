import { useState } from "react";

export default function useListaTareas(listadoTareas) {
  const [tareas, setTareas] = useState(listadoTareas);

  const agregarTarea = (nuevaTarea) => {
    setTareas([
      ...tareas,
      { id: tareas.length + 1, nombre: nuevaTarea, estado: "pendiente" },
    ]);
  };

  const borrarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => id !== tarea.id);
    setTareas(tareasFiltradas);
  };

  const editarNombreTarea = (id, tareaEditada) => {
    setTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          return { ...tarea, nombre: tareaEditada };
        } else {
          return tarea;
        }
      })
    );
  };

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

  return [
    tareas,
    agregarTarea,
    borrarTarea,
    editarNombreTarea,
    colocarPendiente,
    colocarCompleto,
    colocarEnProceso,
  ];
}
