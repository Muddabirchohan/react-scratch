import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import mainLayout from "./Layout/mainLayout";
import Index from "./Layout/Dashboard";
import userDetails from "./components/userDetails";

export default function RouterConfig() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact={true} />
          <Route path="/services" component={mainLayout} />
          <Route path="/user-details" component={userDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
