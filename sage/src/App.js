import React, { useState } from "react";
import Main from "./components/Main";
import SageCells from "./components/SageCells";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/SageCells">
          <SageCells />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
