import React, { useContext } from 'react'
import {ctx} from './context'

export const A = () => {
  const nameRef=React.createRef()
  const ctxData=useContext(ctx)

  const fnClick=()=>{
        let name=nameRef.current.value;
        ctxData.dispatch({
            type:'UPDATE_NAME',
            data:name
        })
  }
  return (
    <div>
        <h1>A</h1>
        <p>
            Name:<input ref={nameRef} />
        </p>
        <button onClick={fnClick}>submit</button>
    </div>
  )
}
