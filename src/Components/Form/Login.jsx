import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../index.css";
import Header from "../Home/Header"
import { getThemeProps } from "@material-ui/styles";

const cardStyle = {
  padding: "50px",
  marginTop: "20px",
};

const textStyle = {
  fontFamily: "'Questrial', sans-serif",
  width: "100%",
  marginTop:"5px",
  marginBottom:"5px"
};
const loginButton = {
  fontFamily: "'Questrial', sans-serif",
  width: "100%",
  fontSize: "18px",
  textTransform: "capitalize",
};

export default function Login(props) {
  return (
    
    <Container maxWidth="sm">
    <Header button={props.button} color={props.color}/>
      <Card sx={{ minWidth: 275 }} style={cardStyle}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{
                fontFamily: "'Questrial', sans-serif",
                textAlign: "center",
                marginBottom:"20px"
              }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={textStyle}
              id="filled-username-input"
              label="Email ID"
              type="email"
              autoComplete="current-password"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={textStyle}
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" style={loginButton}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
