
import PropTypes from 'prop-types'

export const FourComponent = () => {


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
    </>
  )
}

FourComponent.propTypes = {
  
 }