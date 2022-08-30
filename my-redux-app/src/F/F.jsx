import "./F.css";
import React from "react";

function template() {
  const {name,loc,runs}=this.state
  return (
    <div className="f">
      <h1>F</h1>
       <h3>Name:{name}</h3>
       <h3>Location:{loc}</h3>
       <h3>Runs:{runs}</h3>

    </div>
  );
};

export default template;
