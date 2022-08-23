import Tarea from "./Tarea";

function ListaTareas({ nombre, estado }) {
  const listadoTareas = [
    {
      id: 1,
      nombre:
        "Realizar la tarea 1 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "pediente",
    },
    {
      id: 2,
      nombre:
        "Realizar la tarea 2 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "completo",
    },
    {
      id: 3,
      nombre:
        "Realizar la tarea 3 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "parcial",
    },
    {
      id: 4,
      nombre:
        "Realizar la tarea 4 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "parcial",
    },
    {
      id: 5,
      nombre:
        "Realizar la tarea 5 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "completo",
    },
    {
      id: 6,
      nombre:
        "Realizar la tarea 6 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "parcial",
    },
    {
      id: 7,
      nombre:
        "Realizar la tarea 7 Lorem ipsum dolor sit amet. Et minima sint sit sequi",
      estado: "pendiente",
    },
  ];
  return (
    <>
      {listadoTareas.map((tareas) => (
        <Tarea key={tareas.id} nombre={tareas.nombre} estado={tareas.estado} />
      ))}
    </>
  );
}

export default ListaTareas;
