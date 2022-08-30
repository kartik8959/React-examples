import React    from "react";
import template from "./B.jsx";
import {connect} from 'react-redux'
class B extends React.Component {
  locRef=React.createRef()
  fnClick(){
    let loc=this.locRef.current.value;
     this.props.dispatch({
      type:'UPDATE_LOC',
      loc
    })
  }
  render() {
    return template.call(this);
  }
}

B=connect(
  null,
  function(dispatch){
     return {
        dispatch
     }
  }
)(B)

export default B;
