import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import ClimbsPage from "./ClimbsPage"
import LoginPage from "./LoginPage"
import Tips from "./Tips"
import { Route, Switch } from "react-router-dom";


function App() {
  const [climbList, setClimbList] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/climbs")
      .then((res) => res.json())
      .then((data) => {
        setClimbList(data)
      })
  }, [])

  function handleAddClimb(newClimb) {
    setClimbList([...climbList, newClimb]);
  }


  if (loggedIn) {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/climbspage">
            <ClimbsPage
              climbList={climbList}
              handleAddClimb={handleAddClimb}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tips">
            <Tips />
          </Route>
          <Route exact path="/">
            <Home userName={userName} />
          </Route>
        </Switch>
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
