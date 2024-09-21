import PropTypes from 'prop-types'


export const Child = (props) => {
  const handledChangeName = () => {
    const newName = prompt("Ingesa un nuevo nombre");
    if (newName) {
      props.setName (newName);
    }
    
  }

  return (
    <div>
      <h1>Child</h1>
      <p>Nombre Actual: { props.name } </p>
      <p>Edad: {props.age}</p> 
      <button
       className="btn btn-primary"  
       onClick={handledChangeName}>
       Cambiar Nombre
       </button>
      </div>
  )
}

Child.propTypes = {
   name: PropTypes.string ,
   setName : PropTypes.func,
   age :PropTypes.number
}
