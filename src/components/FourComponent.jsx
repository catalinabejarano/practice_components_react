export const FourComponent = () => {
  const handleClicked = (e, name) => {
    alert("Has hecho click >>>> " + name);
  };

  const handledDoubleClicked = () => {
    alert("Has hecho doble click >>>>");
  };

  const handleMouseEnter = (e) => {
    alert("Haz entrado a la caja");
  };

  const handleMouseLeave = (e) => {
    alert("Haz salido de la caja");
  };

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja  `);
  };

  const handleInsideInput = (e) => {
    console.log("Estas dentro del input, escribe tu nombre !!");
  };

  const handleOutsideInput = (e) => {
    console.log("Estas fuera del input, Adios !!");
  };

  return (
    <>
      <h1>FourComponent</h1>
      {/* EventoClick*/}
      <button
        className=" btn btn-danger"
        onClick={() => {
          alert("Hola, soy un evento");
        }}
      >
        Haz Click !!
      </button>
      <br />
      <button
        className=" btn btn-success"
        onClick={(e) => handleClicked(e, "Roger")}
      >
        ¡Aqui tambien haz click!
      </button>
      <br />
      <button className="btn btn-info" onDoubleClick={handledDoubleClicked}>
        Haz Doble Click
      </button>
      <br />
      <div
        id="box1"
        onMouseEnter={(e) => {
          handleMouseEnter(e, "entrando a");
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e, "Saliendo a");
        }}
      >
        <p>Pasa el mouse por encima!!</p>
      </div>
      <br />
      <div
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <p> Pasa mouse aqui opcion 2</p>
      </div>
      <br />
      <div
        id="box2"
        className="mt-4"
        onMouseEnter={(e) => handleMouse(e, "entrado a")}
        onMouseLeave={(e) => handleMouse(e, " salido de")}
      ></div>
      <br />
      <div className="mt-4">
        <input
          type="text"
          onFocus={(e) => handleInsideInput(e)}
          onBlur={(e) => handleOutsideInput(e)}
        />
      </div>
    </>
  );
};
