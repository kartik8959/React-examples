import ContactForm from './ContactForm';
import './App.css';
import { Component } from 'react';
import { Fragment } from 'react/cjs/react.development';

class App extends Component
{
  render()
  {
    return(
      <Fragment>
        <h1>My new app</h1>
        <ContactForm/>
      </Fragment>
    )
  }
}



export default App;
