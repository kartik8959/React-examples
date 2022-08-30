import "./B.css";
import React from "react";

function template() {
  return (
    <div className="b">
      <h1>B</h1>
      <p>
        <b>Loc:</b><input ref={this.locRef} />
      </p>
      <p>
        <button onClick={this.fnClick.bind(this)}>Submit</button>
      </p>
    </div>
  );
};

export default template;
