import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Navigation from "../components/Navigation";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Router = () => {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  useEffect(() => {
    console.log(location);
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div
      style={{
        ...props,
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
      key={key}
    >
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </animated.div>
  ));
};

export default Router;
