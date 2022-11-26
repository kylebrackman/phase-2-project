import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import ClimbsPage from "./ClimbsPage"
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/climbs">
          <ClimbsPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Route path="/about">
        <div>About Page</div>
      </Route>
    </div>
  );
}

export default App;
