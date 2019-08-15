import React from "react";
const API_KEY = "41c3a691c6064f018a7a27d285276ce6";
const BASE_URL =
  "https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=" +
  API_KEY +
  "&q=";
const MAIN_CATEGORY = "mainNewsCategory";
// TODO-EXTRA Country US/CA/KR headlines

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      apiKey: API_KEY,
      articles: [],
      defaultCategory: "passionfruit"
    };

    // Register functions of the class.
    this.getNews = this.getNews.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

  // Called when constructor is finished building component.
  componentDidMount() {
    // Set main category from cookie if it does not exist.
    let mainCategory = this.getCookie(MAIN_CATEGORY);
    if (mainCategory === null) {
      this.setCookie(MAIN_CATEGORY, this.state.defaultCategory);
      mainCategory = this.state.defaultCategory;
      console.log("cookie is not set");
    }
    this.getNews(mainCategory);
    console.log("cookie is SET!");
  }

  // ** This function does not need to be changed. **
  // Set cookie that expires 1000 days from now.
  // This can store the user's preferred news category.
  setCookie(cookieType, cookieValue) {
    var numDays = 1000;
    var d = new Date();
    d.setTime(d.getTime() + numDays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieType + "=" + cookieValue + ";" + expires + ";path=/";
  }

  // ** This function does not need to be changed. **
  // Get category from cookie if one exists.
  getCookie(cookieType) {
    var name = cookieType + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        // Cookie found.
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  getNews(category) {
    const URL = BASE_URL + category;

    console.log(URL);
    // Request and wait for data from remote server.
    fetch(URL)
      .then(response => response.json())
      // Data retrieved so parse it.
      .then(data => {
        // console.log(JSON.stringify(data));
        // console.log(JSON.stringify(data));
        this.setState({ articles: data.articles });
      })
      // Data is not retieved.
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.articles.map((article, index) => (
            <div key={index}>
              <img src={article.urlToImage} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.publishedAt}</p>
              <p>{article.description}</p>
              <p>
                <a
                  href={article.url}
                  alt={article.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
