import React    from "react";
import template from "./D.jsx";
import {connect} from 'react-redux'

class D extends React.Component {
  render() {
    return template.call(this);
  }
}

D=connect(
  function(state){
   const {name,loc,runs}= state.reducer
    return {
        n:name,
        l:loc,
        r:runs
    }
  },
  function(dispatch){

  }
)(D)

export default D;
