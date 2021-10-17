import React from "react";
import Heading from "./components/Heading/Heading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import DetailPage from "./Pages/DetailPage/DetailPage";

const App = () => {
  return (
    <div className="mainWrapper">
      {/* <Heading></Heading> */}

      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/foodDetails/:id" exact component={DetailPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
