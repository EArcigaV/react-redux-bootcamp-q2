import React, { useState } from "react";
import loginApi from "../../utils/loginApi";

// Componets
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormContainer, CustomButton } from "./Login.styles";

const Login = ({ setIsLoggedIn }) => {
  const [userValues, setUserValues] = useState({
    user: "",
    password: "",
  });

  const { user, password } = userValues;

  const onChange = (e) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(user, password);
      setIsLoggedIn(Boolean(response));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <FormContainer>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Welcome to the WizeStore!
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="User"
            name="user"
            type="String"
            autoFocus
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={onChange}
          />
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </CustomButton>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default Login;
