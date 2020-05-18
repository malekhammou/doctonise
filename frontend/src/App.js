import Startup from "./components/startup";
import HomePage from "./components/homePage/homePage";
import ProtectedRoute from "./commonComponents/protectedRoute";
import "./App.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/appContext";
import { Switch, Route, Redirect } from "react-router-dom";
import { getcurrentUser } from "./services/userService";
import Logout from "./components/logout";
function App() {
  const { setUser } = useContext(AppContext);
  useEffect(() => {
    const user = getcurrentUser();
    setUser(user);
  }, [setUser]);
  return (
    <div className="App">
      <Switch>
        <Route path="/startup" component={Startup} />
        <ProtectedRoute path="/homepage" component={HomePage} />
        <ProtectedRoute path="/logout" component={Logout} />
        <Redirect from="/" exact to="/startup" />
      </Switch>
    </div>
  );
}

export default App;
