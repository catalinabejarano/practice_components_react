

export const FourComponent = () => {

  const handleClicked = (e, name) => {
  alert("Has hecho click >>>> " + name);

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
    </>
  )
}
