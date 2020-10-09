import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
