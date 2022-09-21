function EliminarTarea(id, borrarTarea) {
  return (
    <div>
      <button onClick={() => borrarTarea(id)}>Borar Tarea</button>
    </div>
  );
}

export default EliminarTarea;
