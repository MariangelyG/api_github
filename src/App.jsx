import { Container } from "@mui/material";
import {  InputUser,} from "./components";


export const App = () => {
  return (
    <>
    <Container sx={{
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
    }}>
     <InputUser/>

    </Container>
 

    </>
  )
}
