import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
  <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/about" render={About} />
        <Route path="/contact" render={Contact} />
      </Switch>
    </main>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

  const About = () => (
    <Fragment>
      <h1>About</h1>
    </Fragment>
    );
  
  const Contact = () => (
    <Fragment>
      <h1>Contact</h1>
    </Fragment>
    );