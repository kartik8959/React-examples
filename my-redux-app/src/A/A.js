import React    from "react";
import template from "./A.jsx";
import {store} from '../myStore/store'
class A extends React.Component {
  fnClick=()=>{
     let name=this.refs.name.value ;
     store.dispatch({
       name,
       type:'UPDATE_NAME'
     })
     sessionStorage.name=name;
  }
  render() {
    return template.call(this);
  }
}

export default A;
