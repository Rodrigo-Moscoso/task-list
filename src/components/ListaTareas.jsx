import Tarea from "./Tarea";
import { useState, useEffect } from "react";
import CrearTarea from "./CrearTarea";
import EditarTarea from "./EditarTarea";
import EliminarTarea from "./EliminarTarea";
import { Heading, HStack, VStack } from "@chakra-ui/react";

//Al plicar el LocalStorage, ya no requiero el arreglo listadoTareas
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
  const [tareas, setTareas] = useState([]);

  //Funciones para CAMBIAR ESTADO de las tareas

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

  //Guardando las tareas en LocalStorage

  useEffect(() => {
    let tareaGuardada = localStorage.getItem("tareasEnLocal");
    if (tareaGuardada) {
      setTareas(JSON.parse(tareaGuardada));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareasEnLocal", JSON.stringify(tareas));
  }, [tareas]);

  //función para CREAR TAREA

  function crearNuevaTarea(nuevaTarea, nuevaDescripcion) {
    if (nuevaTarea.length < 3) {
      alert("El nombre de la tarea debe tener más de 3 caracteres");
    } else {
      setTareas([
        ...tareas,
        {
          id: tareas.length + 1,
          nombre: nuevaTarea,
          descripcion: nuevaDescripcion,
          estado: "pendiente",
        },
      ]);
    }
  }

  //Función para EDITAR TAREA

  function editarNombreTarea(id, tareaEditada) {
    setTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          return { ...tarea, nombre: tareaEditada };
        } else {
          return tarea;
        }
      })
    );
  }

  //Función para BORRAR TAREA

  function borrarTarea(id) {
    const tareasFiltradas = tareas.filter((tarea) => id !== tarea.id);
    setTareas(tareasFiltradas);
  }

  return (
    <VStack alignContent="center" boxSize="100%">
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
        Tareas
      </Heading>

      <CrearTarea crearNuevaTarea={crearNuevaTarea} />

      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <HStack>
            <Tarea
              id={tarea.id}
              nombre={tarea.nombre}
              descripcion={tarea.descripcion}
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
          </HStack>
        </div>
      ))}
    </VStack>
  );
}

export default ListaTareas;
