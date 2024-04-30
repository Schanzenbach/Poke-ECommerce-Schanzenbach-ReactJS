import { Grid, Box, Button, Typography } from "@mui/material";

import "./Login.css";
import { SessionHistoryContainer } from "../sessionhistory/SessionHistoryContainer";

export const Login = ({
  loginOrSignin,
  toggleLoginType,
  captureUserInfo,
  submit,
  logout,
  isLogged,
}) => {
  return (
    <>
      {isLogged ? (
        <Grid
          container
          className="login-body-cont"
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            alignItems: { xs: "center" },
            justifyContent: { xs: "center" },
          }}
        >
          <SessionHistoryContainer />
          <Button
            className="logout-btn"
            onClick={logout}
            sx={{
              position: { sm: "sticky" },
              bottom: { sm: "5%" },
              right: { sm: "2%" },
              alignSelf: {sm: "end"}
            }}
          >
            LOGOUT
          </Button>
        </Grid>
      ) : (
        <Grid
          container
          className="login-body-cont"
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
          }}
        >
          <Grid item>
            <Box
              className="form-box"
              component="form"
              onSubmit={submit}
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column" },
                alignItems: { xs: "center", md: "start" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={captureUserInfo}
              />
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={captureUserInfo}
              />
              <Button
                className="end-buy-btn"
                type="submit"
                sx={{
                  alignSelf: { xs: "center", md: "end" },
                  width: { xs: "40%", md: "25%" },
                }}
              >
                {loginOrSignin ? "Registrarse" : "Iniciar Sesión"}
              </Button>
              <Typography variant="h6" margin={"10px"}>
                O QUIZÁ PREFIERAS{" "}
                <Button
                  className="toggle-login"
                  id="botondecambio"
                  onClick={toggleLoginType}
                >
                  {loginOrSignin ? "Iniciar Sesión" : "Registrarse"}
                </Button>
                ?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};
