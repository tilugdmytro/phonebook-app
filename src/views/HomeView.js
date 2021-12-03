import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const HomeView = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Container component="main" sx={{ mt: 12, mb: 2 }} maxWidth="sm">
      <Typography variant="h1" component="h1">
        Welcome to Phonebook!
      </Typography>
    </Container>
  </Box>
);

export default HomeView;
