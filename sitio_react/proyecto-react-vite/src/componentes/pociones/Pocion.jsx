const Pocion = ({ pocion }) => {
//Destucturacion
  const { id, nombre } = pocion;

  return (
    <div className="pocion"> 
      <p>{nombre}</p>
      <button>Estado</button>
      <button>Eliminar</button>
    </div>
  );
};

export default Pocion;

