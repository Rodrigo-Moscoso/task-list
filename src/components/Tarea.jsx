function Tarea({ nombre, estado }) {
  return (
    <div
      className="Tarea"
      style={{
        background:
          estado === "completo"
            ? "lightgreen"
            : estado === "parcial"
            ? "lightblue"
            : "goldenrod",
      }}
    >
      <h3>{nombre}</h3>
      <p>({estado})</p>
      {estado === "completo" ? (
        <img
          src="https://t3.ftcdn.net/jpg/02/62/70/68/240_F_262706858_dHBUuxgP8bjfNAcGDbNQgToJlqRlYo72.jpg"
          alt="Icono Check Verde de Completo"
          width="50px"
        />
      ) : estado === "parcial" ? (
        <img
          src="https://t4.ftcdn.net/jpg/02/72/79/67/240_F_272796737_1gfclSQF8yzFHZeE2XX5513eOQMV53dw.jpg"
          alt="Icono Check Azul de Parcial"
          width="50px"
        />
      ) : (
        <img
          src="https://t3.ftcdn.net/jpg/02/81/22/18/240_F_281221851_8k7mS1AMptTskwKBWrU6Y9U6NdwILIYK.jpg"
          alt="Icono Check Amarillo de Pendiente"
          width="50px"
        />
      )}
    </div>
  );
}

export default Tarea;
