
import React from 'react'

export const MyFirstComponent = () => {

  const name = " William Roger"; 
  const github_profile = "https://www.github.com";

  const student = {
    name: "Diana",
    last_name:"Arevalo",
    mobile:"333333",
    linkelin_profile:"hhttps://www.linkedin.com/in/diana-arevalo-168b0925b/"
  }

  return (
    <>
     <div>MyFirstComponent</div>
     <div  className="container e mt-4">
     <h1>Temas de REACT</h1>
        <ol>
         <li>Componentes</li>
         <li>Eventos</li>
         <li>Estados Hooks</li>
         <li>Props</li>
        </ol>
     </div>
     <div  className="container pb-2 pt-2">
     <h1>Datos del Docente</h1>
        <p>Nombre: <strong>{ name }</strong></p>
        <p>Github: <a href="">{ github_profile } </a> </p>
     </div>
     <div  className="container  pb-2 pt-2">
     <h1>Datos del Estudiante</h1>
        <p>Nombre: <strong>{ student.name }</strong></p>
        <p>Apellido: { student.last_name }  </p>
        <p>Celular: { student.mobile }</p>
        <p>Linkelin: <a href={ student.linkelin_profile }>{ student.linkelin_profile }</a></p>
     </div>
        <div className="container mt-2 pt-2 ">
          <h1 >Objeto Completo</h1>
          <pre>{ JSON.stringify(student) }</pre>
          </div>    
    </>
   
  )
}


