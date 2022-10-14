import Tarea from "./Tarea";
import CrearTarea from "./CrearTarea";
import useListaTareas from "../customsHooksTareas/useListaTareas";
import EditarTarea from "./EditarTarea";
import EliminarTarea from "./EliminarTarea";

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
  const [
    tareas,
    agregarTarea,
    borrarTarea,
    editarNombreTarea,
    colocarPendiente,
    colocarCompleto,
    colocarEnProceso,
  ] = useListaTareas(listadoTareas);

  //Se comentaron todas las funciones, por que cree el Hook useListaTareas.jsx

  //Funciones para CAMBIAR ESTADO de las tareas

  // const colocarPendiente = (id) => {
  //   setTareas(
  //     tareas.map((tarea) => {
  //       if (id === tarea.id) {
  //         return { ...tarea, estado: "pendiente" };
  //       } else {
  //         return tarea;
  //       }
  //     })
  //   );
  // };

  // const colocarCompleto = (id) => {
  //   setTareas(
  //     tareas.map((tarea) => {
  //       if (id === tarea.id) {
  //         return { ...tarea, estado: "completo" };
  //       } else {
  //         return tarea;
  //       }
  //     })
  //   );
  // };

  // const colocarEnProceso = (id) => {
  //   setTareas(
  //     tareas.map((tarea) => {
  //       if (id === tarea.id) {
  //         return { ...tarea, estado: "en proceso" };
  //       } else {
  //         return tarea;
  //       }
  //     })
  //   );
  // };

  //función para CREAR TAREA

  // function crearNuevaTarea(nuevaTarea) {
  //   setTareas([
  //     ...tareas,
  //     { id: tareas.length + 1, nombre: nuevaTarea, estado: "pendiente" },
  //   ]);
  // }

  // //Función para EDITAR TAREA

  // function editarNombreTarea(id, tareaEditada) {
  //   setTareas(
  //     tareas.map((tarea) => {
  //       if (id === tarea.id) {
  //         return { ...tarea, nombre: tareaEditada };
  //       } else {
  //         return tarea;
  //       }
  //     })
  //   );
  // }

  // //Función para BORRAR TAREA

  // function borrarTarea(id) {
  //   const tareasFiltradas = tareas.filter((tarea) => id !== tarea.id);
  //   setTareas(tareasFiltradas);
  // }

  return (
    <div>
      <CrearTarea crearNuevaTarea={agregarTarea} />

      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <Tarea
            id={tarea.id}
            nombre={tarea.nombre}
            estado={tarea.estado}
            colocarPendiente={colocarPendiente}
            colocarCompleto={colocarCompleto}
            colocarEnProceso={colocarEnProceso}
          />
          <EditarTarea id={tarea.id} editarNombreTarea={editarNombreTarea} />
          <EliminarTarea
            id={tarea.id}
            borrarTarea={() => borrarTarea(tarea.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaTareas;
