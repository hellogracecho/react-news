import React from "react";
import HeadLines from "./HeadLines";
import CookieService from "./CookieService";
import styles from "./Home.module.css";
import ShowMore from "react-show-more";

const API_KEY = "41c3a691c6064f018a7a27d285276ce6";
const BASE_URL =
  "https://newsapi.org/v2/everything?sortBy=publishedAt&language=en&apiKey=" +
  API_KEY +
  "&q=";
const MAIN_CATEGORY = "mainNewsCategory";
const cookie = new CookieService();

const DATE_FORMAT = {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
};

class Home extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      apiKey: API_KEY,
      articles: [],
      headlines: [],
      defaultCategory: "passionfruit",
      category: ""
    };

    this.getNews = this.getNews.bind(this);
  }

  // Called when constructor is finished building component.
  componentDidMount() {
    this._isMounted = true;
    // Set main category from cookie if it does not exist.
    let mainCategory = cookie.getCookie(MAIN_CATEGORY);
    if (mainCategory === null || mainCategory === "") {
      cookie.setCookie(MAIN_CATEGORY, this.state.defaultCategory);
      mainCategory = this.state.defaultCategory;
      console.log("cookie is not set");
    }
    this.getNews(mainCategory);

    console.log("cookie is SET: " + mainCategory);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getNews(category) {
    const URL = BASE_URL + category;
    console.log(URL);

    // Request and wait for data from remote server.
    fetch(URL)
      .then(response => response.json())
      // Data retrieved so parse it.
      .then(data => {
        if (this._isMounted) {
          // console.log(JSON.stringify(data));
          // console.log(JSON.stringify(data.articles));
          this.setState({ articles: data.articles });
        }
      })
      // Data is not retieved.
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <HeadLines />
        <div className={styles["grid-container"]}>
          {this.state.articles.map((article, index) => (
            <div key={index} className={styles["one-grid"]}>
              <div className={styles["image"]}>
                <a
                  href={article.url}
                  alt={article.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    onError={e => {
                      console.log("img cannot be found");
                      e.target.onError = null;
                      e.target.src = "error.png";
                    }}
                  />
                </a>
              </div>
              <div className={styles["content"]}>
                <h2 className={styles["title"]}>{article.title}</h2>
                <div className={styles["publish-date"]}>
                  {new Intl.DateTimeFormat("default", DATE_FORMAT).format(
                    new Date(article.publishedAt)
                  )}
                </div>
                <div className={styles["description"]}>
                  <ShowMore
                    lines={5}
                    more="show more"
                    less="show less"
                    anchorClass={styles["show-text"]}
                  >
                    {article.description === null
                      ? "Description is not available in this article."
                      : article.description}
                  </ShowMore>
                </div>
                <div className={styles["author"]}>
                  by{" "}
                  {article.author === null
                    ? "The author information is not available."
                    : article.author}
                </div>
                <div className={styles["link"]}>
                  <a
                    href={article.url}
                    alt={article.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
