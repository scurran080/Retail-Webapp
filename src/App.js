import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Drawer from "./components/Drawer";
import LandingPage from "./pages/LandingPage";
import InventoryPage from "./pages/inventoryPage/InventoryPage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const navBarHandler = () => {
    setNavBarOpen(!navBarOpen);
  };
  return (
    <div className="App">
      <Router>
        <NavBar navBarHandler={navBarHandler} />
        <div className="drawer-div-styling">
          <Drawer
            navOpen={navBarOpen}
            navBarHandler={navBarHandler}
          />

          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/inventory">
              <InventoryPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
