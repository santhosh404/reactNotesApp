import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../index.css";
import Header from "../Home/Header";

const cardStyle = {
  padding: "50px",
  marginTop: "20px",
};

const textStyle = {
  fontFamily: "'Questrial', sans-serif",
  width: "100%",
  marginTop: "5px",
  marginBottom: "5px",
};
const loginButton = {
  fontFamily: "'Questrial', sans-serif",
  width: "100%",
  fontSize: "18px",
  textTransform: "capitalize",
};

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setPasswordCon] = useState("");

  function submitForm(event, email, password, passwordCon) {
    event.preventDefault();
    console.log(email, password, passwordCon);
  }

  function onSubmit(email, password, passwordCon) {
    document
      .querySelector(".registerForm")
      .addEventListener("submit", submitForm(email, password, passwordCon));
  }
  return (
    <Container maxWidth="sm">
      <Header button={props.button} color={props.color} />
      <Card sx={{ minWidth: 275 }} style={cardStyle}>
        <form className="registerForm">
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "'Questrial', sans-serif",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Create an account
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                style={textStyle}
                id="filled-username-input"
                label="Email ID"
                type="email"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                style={textStyle}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                style={textStyle}
                id="filled-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => setPasswordCon(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={onSubmit(email, password, passwordCon)}
                variant="contained"
                color="success"
                style={loginButton}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}
