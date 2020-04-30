import React from "react";
import HomePage from "./Pages/HomePage";
import { Route } from "react-router-dom";
import Description from "./Pages/Description";
import AboutUs from "./Pages/AboutUs";
import NavSearch from "./Components/NavSearch";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavSearch} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/description/:id" component={Description} />
      <Route exact path="/aboutus" component={AboutUs} />
    </div>
  );
}

export default App;
