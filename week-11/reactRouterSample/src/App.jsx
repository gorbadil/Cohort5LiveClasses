import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Switch, Route, Link, NavLink } from "react-router-dom";

import "./App.css";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                className={
                  (isActive) => "links " + (!isActive ? "" : "selected")
                  // linksselected
                  // links selected
                }
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={
                  (isActive) => "links " + (!isActive ? "" : "selected")
                  // linksselected
                  // links selected
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  (isActive) => "links " + (!isActive ? "" : "selected")
                  // linksselected
                  // links selected
                }
                to="/aboutme"
              >
                AboutMe
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  (isActive) => "links " + (!isActive ? "" : "selected")
                  // linksselected
                  // links selected
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  (isActive) => "links " + (!isActive ? "" : "selected")
                  // linksselected
                  // links selected
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
      </Switch>
    </>
  );
}

export default App;
