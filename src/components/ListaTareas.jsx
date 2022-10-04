import Tarea from "./Tarea";
import { useState } from "react";
import CrearTarea from "./CrearTarea";
import EditarTarea from "./EditarTarea";
import EliminarTarea from "./EliminarTarea";
import { Heading, HStack, VStack, Button } from "@chakra-ui/react";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

//Al plicar el LocalStorage, y luego firebase, ya no requiero el arreglo listadoTareas

// const listadoTareas = [
//   {
//     id: 1,
//     nombre: "Realizar la tarea 1: Limpiar",
//     estado: "pendiente",
//   },
//   {
//     id: 2,
//     nombre: "Realizar la tarea 2: Barrer",
//     estado: "completo",
//   },
//   {
//     id: 3,
//     nombre: "Realizar la tarea 3: Aspirar",
//     estado: "en proceso",
//   },
//   {
//     id: 4,
//     nombre: "Realizar la tarea 4: Desempolvar",
//     estado: "en proceso",
//   },
//   {
//     id: 5,
//     nombre: "Realizar la tarea 5: Lustrar",
//     estado: "completo",
//   },
//   {
//     id: 6,
//     nombre: "Realizar la tarea 6: Ordenar",
//     estado: "en proceso",
//   },
//   {
//     id: 7,
//     nombre: "Realizar la tarea 7: Descansar",
//     estado: "pendiente",
//   },
// ];

function ListaTareas({ nombre, estado }) {
  const [tareas, setTareas] = useState([]);
  const documentos = [];

  const leerTareas = async () => {
    try {
      const query = await getDocs(collection(db, "tareas"));
      query.forEach((document) => {
        documentos.push({ id: document.id, ...document.data() });
        //trae, mete en arreglo documentos, el "id" y todos los demás
        // datos con "...document.data()"
        setTareas(documentos);
        console.log(documentos);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Funciones para EDITAR ESTADO de las tareas

  const colocarPendiente = async (id) => {
    try {
      const docRef = doc(collection(db, "tareas"), id);
      await updateDoc(docRef, {
        estado: "pendiente",
      });
      const docu = await getDoc(docRef);
      documentos.push({ id: docu.id, ...docu.data() });
      setTareas(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  const colocarCompleto = async (id) => {
    try {
      const docRef = doc(collection(db, "tareas"), id);
      await updateDoc(docRef, {
        estado: "completo",
      });
      const docu = await getDoc(docRef);
      documentos.push({ id: docu.id, ...docu.data() });
      setTareas(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  const colocarEnProceso = async (id) => {
    try {
      const docRef = doc(collection(db, "tareas"), id);
      await updateDoc(docRef, {
        estado: "en proceso",
      });
      const docu = await getDoc(docRef);
      documentos.push({ id: docu.id, ...docu.data() });
      setTareas(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  //Estas funciones se hicieron cuando se trabajaba sin base de datos.

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

  //Guardando las tareas en LocalStorage

  // useEffect(() => {
  //   let tareaGuardada = localStorage.getItem("tareasEnLocal");
  //   if (tareaGuardada) {
  //     setTareas(JSON.parse(tareaGuardada));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tareasEnLocal", JSON.stringify(tareas));
  // }, [tareas]);

  //Función para CREAR TAREA

  const crearTarea = async (nuevaTarea, nuevaDescripcion) => {
    if (nuevaTarea.length < 3) {
      alert("El nombre de la tarea debe tener más de 3 caracteres");
    } else {
      try {
        const docRef = await addDoc(collection(db, "tareas"), {
          nombre: nuevaTarea,
          descripcion: nuevaDescripcion,
          estado: "pendiente",
        });
        const doc = await getDoc(docRef);
        documentos.push({ id: doc.id, ...doc.data() });
        setTareas(documentos);
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Función para EDITAR TAREA

  const editarTarea = async (id, tareaEditada) => {
    try {
      const docRef = doc(collection(db, "tareas"), id);
      await updateDoc(docRef, {
        nombre: tareaEditada,
      });
      const docu = await getDoc(docRef);
      documentos.push({ id: docu.id, ...docu.data() });
      setTareas(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  //Función para BORRAR TAREA

  const borrarTarea = async (id) => {
    try {
      await deleteDoc(doc(db, "tareas", id));
      //Luego de Eliminar el documento, leo los demás documentos de la BD
      const query = await getDocs(collection(db, "tareas"));
      query.forEach((document) => {
        documentos.push({ id: document.id, ...document.data() });
        //trae, mete en arreglo documentos, el "id" y todos los demás datos con "...document.data()"
        setTareas(documentos);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Función que se hizo cuando no se usaba base de datos.

  // function borrarTarea(id) {
  //   const tareasFiltradas = tareas.filter((tarea) => id !== tarea.id);
  //   setTareas(tareasFiltradas);
  // }

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

      <CrearTarea crearNuevaTarea={crearTarea} />

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

            <EditarTarea id={tarea.id} editarNombreTarea={editarTarea} />
            <EliminarTarea
              id={tarea.id}
              borrarTarea={() => borrarTarea(tarea.id)}
            />
          </HStack>
        </div>
      ))}
      <Button onClick={leerTareas} colorScheme="telegram">
        Cargar
      </Button>
    </VStack>
  );
}

export default ListaTareas;
