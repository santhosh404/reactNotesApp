import React from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Form/Login";
import Register from "../Form/Register";

export default function Header(props) {
  const buttonStyle1 = {
    fontSize: "16px",
    fontFamily: "'Questrial', sans-serif",
    textTransform: "capitalize",
    float: "right",
    position: "relative",
    bottom: "28px",
    display: "initial",
  };
  const buttonStyle2 = {
    fontSize: "16px",
    fontFamily: "'Questrial', sans-serif",
    textTransform: "capitalize",
    float: "right",
    position: "relative",
    bottom: "28px",
    display: "none",
  };
  return (
    <div>
      <header className="header">
        <h1>KEEPER</h1>
        <small>We keep your notes safely!</small>

        {props.styleButton === "none" ? (
          <Button style={buttonStyle2} variant="contained" color={props.color}>
          </Button>
        ) : props.button === "Register" ? (
          <Link to="/register">
            <Button style={buttonStyle1} variant="contained" color={props.color}>
              {props.button}
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button style={buttonStyle1} variant="contained" color={props.color}>
              {props.button}
            </Button>
          </Link>
        )}
      </header>

      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
