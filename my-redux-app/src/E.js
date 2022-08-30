import React from 'react'
import {connect} from 'react-redux'
function E(props){
  const {n,l,r}=props;
  return (
    <div>
        <h1>E</h1>
        <h3>Name:{n}</h3>
        <h3>Location:{l}</h3>
        <h3>Runs:{r}</h3>
    </div>
  )
}

E=connect(
    function(state){
        const {name,loc,runs}= state.reducer
        return {
            n:name,
            l:loc,
            r:runs
        }
    }
)(E)

export default E;
