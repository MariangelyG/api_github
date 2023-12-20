import { Box, Container, Typography } from "@mui/material"


export const UserRepositories = ({userData}) => {
  return (
    <>
    {/* componente que contiene los repositorios, seguidores y siguiendo */}
    <Container sx={{
      backgroundColor:"#0C1D30",
      display:"flex", 
      justifyContent:"space-around",
      width:400,
      borderRadius:3 
    }}>
    <Box>
      <Typography variant="subtitle2" sx={{color:"GrayText", paddingTop:0.5, paddingBottom:0.5}}>Repos:</Typography>
       <b>{userData.public_repos }</b>
    </Box>

    <Box>
      <Typography variant="subtitle2" sx={{color:"GrayText", paddingTop:0.5, paddingBottom:0.5}}>Followers:</Typography>
       <b>{userData.followers }</b>
    </Box>
    
    <Box>
      <Typography  variant="subtitle2" sx={{color:"GrayText", paddingTop:0.5, paddingBottom:0.5}}>Following:</Typography>
     <b>{userData.following }</b>
    </Box>
    </Container>
    </>
  )
}
