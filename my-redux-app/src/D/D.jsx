import "./D.css";
import React from "react";

function template() {
  const {n,l,r}=this.props
  return (
    <div className="d">
      <h1>D</h1>
      <h3>Name:{n}</h3>
      <h3>Location:{l}</h3>
      <h3>Runs:{r}</h3>
    </div>
  );
};

export default template;
