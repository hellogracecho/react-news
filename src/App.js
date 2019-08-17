import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import About from "./About";
import NotFound from "./NotFound";
import "./App.css";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="wrapper">
            <div className="nav">
              <div>
                <NavLink
                  exact={true}
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="nav-link"
                >
                  ABOUT
                </NavLink>
              </div>
              <div>
                <Link to="/" className="logo">
                  Graceful
                  <br />
                  News Feed
                </Link>
              </div>
              <Search />
            </div>
            {/* Our router goes here */}
            <Switch>
              <Route exact path="/" component={Home} />

              {/* Does a redirect. */}
              <Route path={"/about"} exact component={About} />

              {/* Shows an error page. */}
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <footer>
            <p>
              <a
                href="http://hellogracecho.com"
                alt="Grace Cho portfolio site"
                target="_blank"
                rel="noopener noreferrer"
              >
                &copy; 2019 Grace Cho
              </a>
              {" | "}
              Reference{" "}
              <a
                href="https://newsapi.org/"
                alt="The News DB API"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEWS API
              </a>
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
