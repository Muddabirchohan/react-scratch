import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import mainLayout from "./Layout/mainLayout";
import Index from "./Layout/Dashboard";

export default function RouterConfig() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact={true} />
          <Route path="/services" component={mainLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
