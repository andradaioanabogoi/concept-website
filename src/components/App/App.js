import React from "react";

import AdaptiveHeader from "../Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Portofolio from "../Portofolio";
import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: "100px",
  },
  container: {
    backgroundColor: "white",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <AdaptiveHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
