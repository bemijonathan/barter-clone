import React from "react";
import { Router, Redirect } from "@reach/router";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DashboardHome from "./Pages/DashboardHome";
import Dashboard from "./Pages/Dashboard";
import Cards from "./Pages/Cards";
import Withdraw from "./Pages/Withdraw";
import { AirtimeContext } from "./context/airtimeContext";
import "react-notifications/lib/notifications.css";
import { authentication } from "./utils/auth";

const App = () => {
  const [show, setShow] = React.useState(false);
  const AirtimeComponent = {
    show,
    hide: (value) => {
      setShow(value);
    },
  };

  const [authenticated] = React.useState(authentication());

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return authenticated ? (
      <Component {...rest} />
    ) : (
      <Redirect from="" to="/" noThrow />
    );
  };

  return (
    <AirtimeContext.Provider value={{ ...AirtimeComponent }}>
      <div>
        <Router>
          <ProtectedRoute path="dashboard" component={Dashboard}>
            <DashboardHome path="/" />
            <Cards path="/cards" />
            <Withdraw path="/withdraw" />
          </ProtectedRoute>
          <Login path="/" />
          <Signup path="/signup" />
        </Router>
      </div>
    </AirtimeContext.Provider>
  );
};

export default App;
