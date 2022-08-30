import React, { useContext } from 'react'
import {ctx} from './context'
export const D = () => {
   const ctxData= useContext(ctx)
  return (
    <div>
        <h1>D</h1>
        <h3>Name:{ctxData.state.name}</h3>
        <h3>Location:{ctxData.state.loc}</h3>
        <h3>Runs:{ctxData.state.runs}</h3>
    </div>
  )
}
