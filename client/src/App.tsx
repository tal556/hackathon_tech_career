import React from "react";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer";
import AdminRouter from "./AdminRouter";


function App() {
  return (<>
    <NavBar />
    <AdminRouter />
    <Footer />
  </>
  );
}

export default App;
