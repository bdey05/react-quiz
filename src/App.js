import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Question1 from "./Question1";




function App() {
  return (

    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/question1">
        <Question1 />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
