import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import PotatoContainer from "../containers/PotatoContainer";
import DuckContainer from "../containers/DuckContainer";
import CamelContainer from "../containers/CamelContainer";

function Main() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route path="/PotatoQuiz" render={() => <PotatoContainer />} />
      <Route path="/DuckQuiz" render={() => <DuckContainer />} />
      <Route path="/CamelQuiz" render={() => <CamelContainer />} />
    </Switch>
  );
}

export default Main;
