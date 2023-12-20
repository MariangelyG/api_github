import { useEffect, useState } from "react";

// hook para obtener los datos de la api de github. 
export const useFetch = () => {
    
    const [userData, setUserData] = useState({})
    // funcion asincrona que verifica si inputValue tiene un valor definido
    const getUsers = async(inputValue) =>{

        if(inputValue !== undefined){
            // peticion a la url de la api
            const resp = await fetch(`https:api.github.com/users/${inputValue}`)
            // convertir la respuesta a un objeto JSON
            const data  = await resp.json()
            // console.log(data);
            // Actualizar el estado con el setUserData
            setUserData(data)
        }
         else{
            return
         }
        };
// ejecutar codigo cuando se actualiza el componente, recibe la funcion detUsers y un array vacio. 
    useEffect(() => {
        getUsers()
    }, []);

// el hook devuelve un objeto con las dos propiedades
    return {
        userData, 
        getUsers,
    };



}
