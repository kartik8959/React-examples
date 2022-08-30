import React, { Component, createRef } from 'react';


class ContactForm extends Component {
    constructor(props)
    {
        super(props);
        this.unameref=React.createRef();
        this.emailRef=React.createRef()
        this.pwdref=React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(evt)
    {
        evt.preventDefault();
        alert(`Ypu typed ${this.unameref.current.value}\n
                        ${this.emailRef.current.value}\n
                        ${this.pwdref.current.value}`)
                        this.unameref.current.value="";
                        this.emailRef.current.value="";
                        this.pwdref.current.value="";
                        this.unameref.current.focus();


    }
    render() {
        return (
            <div>
                <h2>Contact Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="uname">Name</label><br />
                    <input type="text" id="uname" ref={this/this.unameref} /> <br />
                    <label htmlFor="email">email</label><br />
                    <input type="email"  id="email" ref={this.emailRef} /> <br />
                    <label htmlFor="pwd">Password</label><br />
                    <input type="text"  id="pwd" ref={this.pwdref}/> <br />
                    <button>Submit</button>
                </form>

                
            </div>
        );
    }
}

export default (ContactForm);