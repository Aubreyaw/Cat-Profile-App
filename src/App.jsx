import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./Routes.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <RoutesComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;