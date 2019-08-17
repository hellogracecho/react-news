import React from "react";
import "./App.css";

class Search extends React.Component {
  render() {
    const searchIconStyle = {
      width: "28px",
      height: "28px"
    };
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Find an article"
          ref={myInputControl => (this.inputSearch = myInputControl)}
        />
        <button className="search-btn">
          <svg style={searchIconStyle} viewBox="0 0 24 24">
            <path
              fill="#ff4856"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
        {/* <input type="text" 
          ref={(myInputControl) => this.inputFruit = myInputControl} />
          <button onClick={(e) => this.showFruitSummary()}>
          Submit Favourite Fruit</button>
          {this.state.fruitSummary} */}
      </div>
    );
  }
}

export default Search;
