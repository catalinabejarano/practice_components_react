

export const FourComponent = () => {

  const handleClicked = (e, name) => {
  alert("Has hecho click >>>> " + name);

  }

  const handledDoubleClicked = () => {
    alert("Has hecho doble click >>>>" );
  }

  const handleMouseEnter = (e) => {
    alert("Haz entrado a la caja");
  }

  const handleMouseLeave = (e) => {
    alert("Haz salido de la caja");
  }


  return (
    <>
    <h1>FourComponent</h1>
    {/* EventoClick*/}
    <button 
    className =" btn btn-danger"
    onClick={ () => {
        alert("Hola, soy un evento");
    }}
    >Haz Click !!
    </button>
    <br/>
    <button
    className=" btn btn-success"
    onClick={(e) => handleClicked (e, "Roger")}>
      ¡Aqui tambien haz click!
    </button>
    <br/>
    <button className="btn btn-info" 
     onDoubleClick={ handledDoubleClicked }>
     Haz Doble Click
    </button>
    <br/>
    <div id="box1" onMouseEnter={ (e) => {
        handleMouseEnter(e, "entrando a");
    }}
    onMouseLeave={(e) => {
        handleMouseLeave(e, "Saliendo a");
    }}
    >
     <p>Pasa el mouse aqui</p>
    </div>

    </>
  )
}
