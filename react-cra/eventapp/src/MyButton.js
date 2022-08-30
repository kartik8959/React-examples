import React, { Component } from 'react'
class MyButton extends Component{
    constructor(props)
    {
        super(props);
        this.state={counter:1};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
this.setState({counter:this.state.counter+1})
    }
        render()
        {
            return(
                <div>
                    <h1>Counter is :{this.state.counter}</h1>
                    <button onClick={this.handleClick.bind(this)}>increment the counter</button>

                </div>
            )
        }
    
}
export default MyButton;