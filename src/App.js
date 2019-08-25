import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";
import NotFound from "./components/NotFound";
import CookieService from "./components/CookieService";
import "./App.css";
import { NavLink } from "react-router-dom";
import searchStyle from "./components/SearchBox.module.css";

const cookie = new CookieService();
const MAIN_CATEGORY = "mainNewsCategory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      defaultCategory: "passionfruit"
    };
    this.Search = React.createRef();
  }

  updateSearchResult() {
    // this.setState({ search: this.inputSearch.value });
    // this.Search.current.getNews(this.inputSearch.value);

    // Romove any whitespace in searching words
    let stringArray = this.inputSearch.value
      .trim()
      .replace(/ +/g, " ")
      .split(" ");
    if (stringArray.length !== 1) {
      // if the search word is more than 2 concat with +
      let input = stringArray.join("+");
      this.setState({ search: input });
      cookie.setCookie(MAIN_CATEGORY, input);
      // this.Search.current.getNews(input);
    } else {
      let input = this.inputSearch.value;
      this.setState({ search: input });
      cookie.setCookie(MAIN_CATEGORY, input);
      // this.Search.current.getNews(input);
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
                <div className={searchStyle["search-container"]}>
                  <input
                    type="text"
                    placeholder="Find an article"
                    ref={myInputControl => (this.inputSearch = myInputControl)}
                  />
                  <Link to="/news/search">
                    <button
                      onClick={e => this.updateSearchResult(e)}
                      className={searchStyle["search-btn"]}
                    >
                      <svg
                        style={{
                          width: "28px",
                          height: "28px"
                        }}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ff4856"
                          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Our router goes here */}
            <hr />
            <Switch>
              <Route
                exact
                path="/news"
                render={() => <Home search={this.state.search} />}
              />

              {/* Does a redirect. */}
              <Route path={"/news/about"} exact render={() => <About />} />
              <Route
                path={"/news/search"}
                exact
                render={() => (
                  <Search ref={this.Search} search={this.state.search} />
                )}
              />

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
