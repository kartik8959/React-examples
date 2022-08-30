import React, { useContext } from 'react'
import {ctx} from './context'

export const B = () => {
    const locRef=React.useRef()
    const ctxData=useContext(ctx);
    const fnClick=()=>{
          let loc=locRef.current.value;
          ctxData.dispatch({
              type:'UPDATE_LOC',
              data:loc
          })
    }
  return (
    <div>
        <h1>B</h1>
        <p>
            Location:<input ref={locRef} />
        </p>
        <button onClick={fnClick}>submit</button>
    </div>
  )
}
