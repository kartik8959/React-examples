import React, { useContext, useState } from 'react'
import {ctx} from './context'

export const C = () => {
  const [runs,setRuns]=useState('')
  const ctxData=useContext(ctx);
  const fnClick=()=>{
      ctxData.dispatch({
          type:'UPDATE_RUNS',
          data:runs
      })
  }
  return (
    <div>
        <h1>C</h1>
        <p>
            Runs:<input onChange={(eve)=>setRuns(eve.target.value)} />
        </p>
        <button onClick={fnClick}>submit</button>
    </div>
  )
}
