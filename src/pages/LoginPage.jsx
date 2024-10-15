import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Logo1, Logo2 } from "../components/Logo";
import Divider from "@mui/material/Divider";
import { Grid2 } from "@mui/material";
import { useState } from "react";
import {
  validateLoginForm,
  validatePassword,
  validateUsername,
} from "../utils/validationUtils/Loginvalidation";
import { handleError } from "../utils/errorHandler";
import { useLoginMutation } from "../features/api/authApi";
import { ErrorAllert } from "../components/Allerts";
import { FullWidthButton } from "../components/Buttons";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(3),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const LoginContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: "15vh",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState(null);
  const [validErrors, setValidErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const { isFormValid, validationResults } = validateLoginForm({
      username: { value: data.get("username"), validator: validateUsername },
      password: { value: data.get("password"), validator: validatePassword },
    });

    setValidErrors({
      username: validationResults.username.errorMessage,
      password: validationResults.password.errorMessage,
    });

    if (isFormValid) {
      const body = {
        username: data.get("username"),
        password: data.get("password"),
      };
      try {
        await login(body).unwrap();
      } catch (err) {
        // console.error("Login failed:", err);
        if (err.status === 401) {
          setError("اسم المستخدم وكلمة المرور غير متطابقين!");
        } else {
          setError(handleError(err));
        }
      }
    }
  };

  return (
    <LoginContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        {error && <ErrorAllert message={error} />}
        <Grid2 container spacing={1}>
          <Logo1 w={100} h={50} />
          <Divider orientation="vertical" flexItem />
          <Logo2 w={100} h={50} />
        </Grid2>
        <Typography component="h1" variant="h4">
          تسجيل دخول
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <TextField
              label="اسم المستخدم"
              error={!!validErrors.username}
              helperText={validErrors.username}
              type="text"
              name="username"
              autoFocus
              required
              variant="outlined"
              color={!!validErrors.username ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="كلمة المرور"
              error={!!validErrors.password}
              helperText={validErrors.password}
              name="password"
              type="password"
              required
              color={!!validErrors.password ? "error" : "primary"}
            />
          </FormControl>
          <FullWidthButton
            text={"تسجيل الدخول"}
            isLoading={isLoading}
            variant="contained"
            disable={isLoading}
            type={"submit"}
          />
        </Box>
      </Card>
    </LoginContainer>
  );
}
