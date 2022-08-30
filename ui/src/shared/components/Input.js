import React from 'react'

export const Input = ({id,obj,fnChange}) => {

  const {lbl,type,name,errorMsg,isShowError,value,options,isMandatory} =obj

  const prepareInputControl=()=>{
     switch(type){
       case 'text':
       case 'password':
        return <input id={id} onChange={fnChange} value={value} className='form-control' type={type} name={name} />
        break;
       case 'radio':
            return options.map((v,i)=>{

               return <><input onChange={fnChange} className='ms-3' checked={value==v[0]} id={id} value={v[0]}  type={type} name={name} /> {v}</>
             })
           
         break;
       case 'select':
             return <select onChange={fnChange} id={id} name={name} className='form-control'>
                 {
                   options.map((v,i)=>{
                     return <option selected={v==value} >{v}</option>
                   })
                 }
             </select>
         break;
     }
  }
  return <div className='row mb-3'>
       <div className='col-sm-5 text-end'>
          <b>{lbl}:{isMandatory && <b className='text-danger'>*</b>}</b>
       </div>
        <div className='col-sm-3'>
           {prepareInputControl()}
         </div>
         <div className='col-sm-4'>
             {isShowError && <b className='text-danger'>{errorMsg}</b>}
         </div>
  </div>
}
