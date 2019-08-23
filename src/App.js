import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./App.css";
import { NavLink } from "react-router-dom";

const HomeComponent = new Home();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateDatabase(e) {
    if (e != "") {
      console.log(e);
      this.setState({ search: e });
      HomeComponent.getNews(e);
    }
  }

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
                  HOMEmmm
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
                <Search updateDatabase={e => this.updateDatabase(e)} />
              </div>
            </div>
            {/* Our router goes here */}
            <Switch>
              <Route
                exact
                path="/news"
                render={() => <Home search={this.state.search} />}
              />

              {/* Does a redirect. */}
              <Route path={"/news/about"} exact component={About} />

              {/* Shows an error page. */}
              <Route path="/news/*" component={NotFound} />
            </Switch>
          </div>
          <footer>
            <p>
              <a
                href="https://hellogracecho.com"
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
