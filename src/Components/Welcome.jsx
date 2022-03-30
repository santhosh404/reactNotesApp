import React from "react";
import Header from "./Home/Header";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Form/Login";
import Register from "./Form/Register";
import { margin, width } from "@mui/system";


const wholeDiv = {
    margin:"20px",
    width:"auto"
}

const heading = {
    fontSize:"5rem",
    textAlign:"center",
    marginTop:"80px"
}
const para = {
    fontSize:"20px",
    textAlign:"center",
    margin:"20px"
}



export default function (props) {
  return (
    <div>
      <Header styleButton={props.styleButton} />
      <div  style={wholeDiv}>
      <h1 style={heading}>Welcome, Buddy!</h1>
      <p style={para}>
        You can <Link to="/login" style={{textDecoration:"none"}}>Login here</Link> if account already created,
        else <Link to="/register" style={{textDecoration:"none"}}>Register here</Link>
      </p>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
