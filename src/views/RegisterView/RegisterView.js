import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "50px",
          borderRadius: "40px",
          position: "relative",
        }}
      >
        <Typography component="h2" variant="h5">
          SIGN UP PAGE
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            margin="normal"
            required
            fullWidth
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            color="inherit"
            sx={{
              margin: "0 auto",
              mt: 3,
              mb: 2,
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
