import "./Register.css";
import React from "react";

function template() {
  const {formData} =this.state;
  return (
    <div className="register container-fluid">
       <h2 className="text-center mt-3 mb-4">Register</h2>
       {formData}
       <div className="row">
          <div className="offset-sm-5 col-sm-7">
            <button onClick={this.fnRegister} className="btn btn-primary">Register</button>
            <a className="ms-3" href="/login">To Go to Login</a>
          </div>
       </div>
    </div>
  );
};

export default template;
