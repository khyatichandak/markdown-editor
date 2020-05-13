import React from "react";

const Header = (props) => {
  //   console.log(this);
  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <a className="navbar-brand" href="">
          ReactJS Markdown Editor
        </a>
        <div className=" my-2 my-sm-0">
          <button
            className="btn btn-dark"
            onClick={(e) => props.enableTheme("dark")}
          >
            Dark Theme
          </button>
          <button
            className="btn btn-light"
            onClick={(e) => props.enableTheme("light")}
          >
            Light Theme
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
