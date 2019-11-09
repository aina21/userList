import React from "react";
import "./App.css";
import Users from "./components/Users";
import ProfileUsers from "./components/ProfileUsers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/user">
            <Users />
          </Route>
          <Route
            path="/user/:id"
            render={ ({match}) => <ProfileUsers id={match.params.id}></ProfileUsers> }
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
