import "./Login.css";
import React from "react";
function template() {
 const {formData}= this.state
  return (
    <div className="login container-fluid">
      <h2 className="text-center mt-3 mb-4">Login</h2>
       {formData}
       <div className="row">
          <div className="offset-sm-5 col-sm-7">
            <button onClick={this.fnLogin} className="btn btn-primary">Login</button>
            <a className="ms-3" href="/register">To register</a>
          </div>
       </div>
    </div>
  );
};

export default template;
