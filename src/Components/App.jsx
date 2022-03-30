import React from "react";
import Header from "./Home/Header";
import Welcome from "./Welcome";
import NoteComponent from "./Home/Notes";
import Footer from "./Home/Footer";
import "../index.css";
import Login from "./Form/Login";
import Register from "./Form/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact path="/"
          element={<Welcome styleButton="none"/>}
        />
        <Route
          path="/login"
          element={<Login button="Register" color="success" styleButton="initial"/>}
        />
        <Route
          path="/register"
          element={<Register button="Login" color="success" styleButton="initial" />}
        />

        <Route
          path="/home"
          element={
            <div>
              <Header button="logout" color="error" />
              <NoteComponent />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
