import React from "react";
import HomePage from "./Screens/HomePage";
import PE3 from "./Screens/PE3";
import PE4 from "./Screens/PE4";
import PE5 from "./Screens/PE5";
import PE2 from "./Screens/PE2";
import PE1 from "./Screens/PE1";
import PE6 from "./Screens/PE6";
import PE7 from "./Screens/PE7";
import { Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <Switch>
      <Route path="/PE1" component={PE1} />
      <Route path="/PE2/:country" component={PE2} />
      <Route path="/PE3/" component={PE3} />
      <Route path="/PE4" component={PE4} />
      <Route path="/PE5" component={PE5} />
      <Route path="/PE6" component={PE6} />
      <Route path="/PE7" component={PE7} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
