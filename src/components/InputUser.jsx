import { useState } from "react"
import { CardUser } from "./CardUser"
import {useFetch} from '../hooks/useFetch'
import {  Box, TextField, createTheme } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';


// componente para buscar y mostrar usuarios de github
export const InputUser = () => {

// desestructurar las propiedades del hook useFetch e importarlo 
// para obtener los datos del usuario
const { userData, getUsers } = useFetch()

// hook para guardar y actualizar el estado
const [ inputValue, setInputValue ] = useState( '' )


// Funcion que actualiza el estado con el valor que se obtiene del evento
const handleInputChange = ({ target }) => {
  setInputValue( target.value )
  
}
// funcion que previene el comportamiento por defecto y llama la funcion getUsers y el inputValue como argumento
const handleSubmit = (e) => {
  e.preventDefault()
  getUsers(inputValue)

  // console.log(inputValue)
}



  return (

    <>
    {/* formulario para buscar el usuario */}
    <Box sx={{ mb: 5, 
      width:605, 
      backgroundColor:"#233454",
      borderRadius: 5,
      mt:2
      }}>
      <form onSubmit={ handleSubmit }>
        <TextField color="secondary"
        type="text"
        placeholder="Search username" 
        label="Github username"
        value={ inputValue }
        onChange={ handleInputChange } 
        fullWidth={true}
        InputProps={{ style: {color: "white" }}}
       
       
        />
      </form>
    </Box>

    {/*condición que muestra el icono si el input esta vacio o el componente
     cardUser que recibe los datos como props  */}
    <Box sx={{ 
      borderRadius: 5, 
      backgroundColor:"#233454", 
      width: 600,
      display:"flex",
      justifyContent:"center"
      }}>
      {inputValue === "" ? <GitHubIcon sx={{fontSize: 500}}/> : <CardUser userData={ userData } />}

    </Box>

    </>

  )
}