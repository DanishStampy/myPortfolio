import React from "react";
import "./body.css";
import Nav from "./nav/Nav";
import Content from "./content/Content";

const Body = () => {
  return (
    <>
      <div className="body__container">
        <div className="body__content">
          <Nav />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Body;
