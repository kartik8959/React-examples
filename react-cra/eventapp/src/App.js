import React, { Component } from 'react'
import './App.css';
import MyButton from './MyButton';

class App extends Component
{

  render()
  {
    return(
      <div style={{textAlign:"center",color:"cyan"}}>
        <MyButton/>
      </div>
    )
  }
}


export default App;
