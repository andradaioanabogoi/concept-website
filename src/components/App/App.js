import React from "react";

import Header from "../Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Portofolio from "../Portofolio";
import Blog from "../Blog";
import Contact from "../Contact";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portofolio">
            <Portofolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
