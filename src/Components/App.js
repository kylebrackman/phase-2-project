import React from "react";
import NavBar from "./NavBar"
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
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
