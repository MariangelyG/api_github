import { Box, Container, Typography } from "@mui/material";
import { UserRepositories } from "./UserRepositories";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const CardUser = ({ userData }) => {
  return (
    <>
      <Container
        sx={{
          height: 500,
          width: 600,
          padding: 5,
        }}
      >
        {/* Contenedor de imagen, nombre y creación */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
         >
          {/* imagen */}
          <Box>
            <img src={userData.avatar_url} alt="avatar user" />
          </Box>

          {/* login, name, bio */}
          <Box>
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              {userData.login}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ paddingTop: 1 }}
              color="#2E7DDB">
              {userData.name}
            </Typography>

            <Typography variant="subtitle2" sx={{ paddingTop: 1 }}>
              {userData.bio ? userData.bio : "This user has no bio"}
            </Typography>

          </Box>

          {/* Fecha de creación */}
          <Box>
            <Typography variant="subtitle1">{userData.created_at}</Typography>
          </Box>

        </Box>

        {/* Componente Repos, Flowers, flowing */}
        <Box sx={{ padding: 5 }}>
          <UserRepositories userData={userData} />
        </Box>

        {/* Iconos, localización, url, twiter, compañia */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            padding: 2,
            ml: 10,
          }}
        >
          <Typography>
            <LocationOnIcon sx={{ mr: 1, fontSize: "medium" }} />{" "}
            {userData.location ? userData.location : "Not Available"}
          </Typography>

          <Typography>
            <TwitterIcon sx={{ mr: 1, fontSize: "medium" }} />
            {userData.twitter_username
              ? userData.twitter_username
              : "Not Available"}
          </Typography>

          <Typography>
            <LinkIcon sx={{ mr: 1, fontSize: "medium" }} />
            {userData.blog ? userData.blog : "Not Available"}
          </Typography>

          <Typography>
            <ApartmentIcon sx={{ mr: 1, fontSize: "medium" }} />
            {userData.company ? userData.company : "Not Available"}
          </Typography>
          
        </Box>
      </Container>
    </>
  );
};
