import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import UserInfo from "./Component/UserInfo/UserInfo";
import UserCollection from "./Component/UserCollection/UserCollection";
import NoMatch from "./Component/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">People You May Know</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/userInfo">Friend List</Link>
              </li>
              <li>
                <Link to="/userCollection">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/userInfo">
              <UserInfo></UserInfo>
            </Route>
            <Route path="/userCollection/:userId">
              <UserCollection></UserCollection>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
