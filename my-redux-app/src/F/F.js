import React    from "react";
import { store } from "../myStore/store.js";
import template from "./F.jsx";

class F extends React.Component {
  state={
    name:'',
    loc:'',
    runs:''
  }
  componentDidMount(){
    store.subscribe(()=>{
        this.fnGetStoreData()
    })
    this.fnGetStoreData()
  }

  fnGetStoreData=()=>{
    let state=store.getState()
      const {name,loc,runs}=state.reducer
      this.setState({
         name,loc,runs
      })
  }

  render() {
    return template.call(this);
  }


}

export default F;
