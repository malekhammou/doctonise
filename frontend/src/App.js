import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Startup from "./components/startup";
import HomePage from "./components/homePage/homePage";
import Logout from "./components/logout";
import ProtectedRoute from "./commonComponents/protectedRoute";
import NotFound from "./commonComponents/notfound/notfound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/startup" exact component={Startup} />
        <ProtectedRoute path="/logout" exact component={Logout} />
        <ProtectedRoute path="/not-found" component={NotFound} />
        <ProtectedRoute path="/home" component={HomePage} />{" "}
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
