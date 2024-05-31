import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RouteDefinitions from "./routes/RouteDefinitions";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-contaier">
      <Navbar />
      <div className="body-container">
        <RouteDefinitions />
      </div>
    </div>
  );
}

export default App;
