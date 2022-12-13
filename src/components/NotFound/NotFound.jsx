import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound">
      <p className="notfoundleft">404</p>
      <div className="notfoundright">
        <h3 className="notfoundtext">
          OOPS! THE PAGE YOU WERE LOOKING FOR COULDN'T BE FOUND.
        </h3>
        <div className="notfoundblock">
          <input
            className="notfoundinput"
            type="text"
            placeholder="search site"
          />
          <button className="notfoundsearch">SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
