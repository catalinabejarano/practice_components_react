

export const SecondComponent = () => {

   const books = [
   "Harry Potter y piefdra filosofal",
   "Harry Potter y camara secreta",
   "Harry Potter y prisionero de Azkaban",
   "Harry Potter y caliz de fuego",
   "Harry Potter y orden del Fenix",
   "Harry Potter y misterio del principe",
   "Harry Potter y reliquias de la muerte ",
    ]
     
  // condicion ? ( si_verdadero) : (si_falso)

  return (
    <>
        <h1>SecondComponent</h1>
        <div>
          <ul>
            {books.lenght >= 1 ? 
            (
                books.map((book, index) => {
                return <li key={index}> {book} </li>
              })
             
            ) :
            (
              <p>No existen Libros</p>

            )
          }
            
          </ul>
        </div>
    </>
  )
}
