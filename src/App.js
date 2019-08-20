import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import About from "./component/About";
import NotFound from "./component/NotFound";
import "./App.css";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="wrapper">
            <div className="nav">
              <div className="grid-nav">
                <NavLink
                  exact={true}
                  to="/news"
                  activeClassName="active"
                  className="nav-link"
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/news/about"
                  activeClassName="active"
                  className="nav-link"
                >
                  ABOUT
                </NavLink>
              </div>
              <div className="grid-logo">
                <Link to="/news" className="logo">
                  Graceful
                  <br />
                  News Feed
                </Link>
              </div>
              <div className="search-and-movielink grid-search">
                <a
                  href="https://gcho.bcitwebdeveloper.ca/movie"
                  alt="Graceful movie feed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="movie-link"
                >
                  GRACEFUL
                  <br />
                  MOVIE FEED
                </a>
                <Search />
              </div>
            </div>
            {/* Our router goes here */}
            <Switch>
              <Route exact path="/news" component={Home} />

              {/* Does a redirect. */}
              <Route path={"/news/about"} exact component={About} />

              {/* Shows an error page. */}
              <Route path="/news/*" component={NotFound} />
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
