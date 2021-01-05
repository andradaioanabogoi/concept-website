import React from "react";

import AdaptiveHeader from "../Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer/Footer";
import Photography from "../Portofolio/Photography";
import Video from "../Portofolio/Video";
import Collage from "../Portofolio/Collage";

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
          <Route exact path="/portofolio/photography" component={Photography} />
          <Route exact path="/portofolio/video" component={Video} />
          <Route exact path="/portofolio/collage" component={Collage} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
