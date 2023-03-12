import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar/>
    <Switch>
    <Route path="/Movies">
        <Movies />
      </Route>
      <Route path="/Actors">
        <Actors />
      </Route>
      <Route path="/Directors">
        <Directors />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>;
}

export default App;
