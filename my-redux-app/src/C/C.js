import React    from "react";
import template from "./C.jsx";
import {store} from '../myStore/store'
class C extends React.Component {
  runs=0
  constructor(){
    super();
    this.fnClick=this.fnClick.bind(this)
  }
  fnChange(eve){
    this.runs=eve.target.value;
  }
  fnClick(){
    store.dispatch({
      type:'UPDATE_RUNS',
      runs:this.runs
    })
  }
  render() {
    return template.call(this);
  }
}

export default C;
