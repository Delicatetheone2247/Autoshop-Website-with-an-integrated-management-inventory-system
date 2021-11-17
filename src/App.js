
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./MainPage";
import Home from "./Home";
import Dashboard from "./Dashboard";

import Profile from "./Profile";
import Table from "./Table";


import kontakt from "./Kontakt";
import ViTilbyder from "./ViTilbyder";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Mainpage" component={MainPage} />  
        <Route path="/Kontakt" component={kontakt} />
        <Route path="/ViTilbyder" component={ViTilbyder} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Table" component={Table} />

      </Switch>
    </Router>
  );
}




//<Footer />//

