import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import ClimbsPage from "./ClimbsPage"
import LoginPage from "./LoginPage"
import { Route, Switch } from "react-router-dom";


function App() {
  const [climbs, setClimbs] = useState("Climb Name")
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [climbName, setClimbName] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/climbs")
      .then((res) => res.json())
      .then((data) => {
        setClimbs(data)
      })
  }, [])



  if (loggedIn) {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/climbspage">
            <ClimbsPage
            climbs={climbs}
            setClimbs={setClimbs}
            climbName={climbName}
            setClimbName={setClimbName}/>
          </Route>
          <Route exact path="/">
            <Home userName={userName} />
          </Route>
        </Switch>
        <Route path="/about">
          <About />
        </Route>
      </div>
    );
  }
  else {
    return <LoginPage
      handleLogIn={() => setLoggedIn(true)}
      userName={userName}
      setUserName={setUserName}
    />
  }
}

export default App;
