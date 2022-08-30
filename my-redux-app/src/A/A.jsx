import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <h1>A</h1>
      <p>
        <b>Name:</b><input ref="name" />
      </p>
      <p>
        <button onClick={this.fnClick}>Submit</button>
      </p>
    </div>
  );
};

export default template;
