import "./C.css";
import React from "react";

function template() {
  return (
    <div className="c">
      <h1>C</h1>
      <p>
        <b>Runs:</b><input onChange={(eve)=>this.fnChange(eve)} />
      </p>
      <p>
        <button onClick={this.fnClick}>Submit</button>
      </p>
    </div>
  );
};

export default template;
