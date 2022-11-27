import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import ClimbsPage from "./ClimbsPage"
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/climbspage">
          <ClimbsPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
