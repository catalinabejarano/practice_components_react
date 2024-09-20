import React from 'react'
import PropTypes from 'prop-types'

export const ThirdComponent = (props) => {
  return (
    <>
    <h1>Comunicacion entre Componentes</h1>
    <ul>
        <li>{ props.name}</li>
        <li>{ props.last_name}</li>
    </ul>
    </>
   
  )
}
ThirdComponent.propTypes ={

     name: PropTypes.string,
     last_name: PropTypes.string,
     age: PropTypes.number
}