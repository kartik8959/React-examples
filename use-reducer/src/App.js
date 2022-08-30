import logo from './logo.svg';
import './App.css';
import {A} from './A';
import {B} from './B';
import {C} from './C';
import {D} from './D'
import { useReducer } from 'react';
import reducer from './reducer';
import {init} from './init'
import {ctx} from './context'
function App() {

  const [state,dispatch]=useReducer(reducer,init);

  return (
    <div className="App">
      <ctx.Provider value={{state,dispatch}}>
        <A />
        <B />
        <C />
        <D />
      </ctx.Provider>
     
    </div>
  );
}

export default App;
