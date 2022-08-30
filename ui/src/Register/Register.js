import React    from "react";
import template from "./Register.jsx";
import {Input} from '../shared/components/Input'
import ServerCall from '../shared/services/ServerCall'
const inputControls=[
  {
    lbl:'User ID',
    type:'text',
    name:'uid',
    errorMsg:'Please Enter Uid',
    isShowError:false,
    value:''
  },
  {
    lbl:'Password',
    type:'password',
    name:'pwd',
    errorMsg:'Please Enter Password',
    isShowError:false,
    value:''
  },
  {
    lbl:'Gender',
    type:'radio',
    name:'gender',
    errorMsg:'Please Select Gender',
    isShowError:false,
    options:['Male','Female'],
    value:'F'
  },
  {
    lbl:'Country',
    type:'select',
    name:'country',
    errorMsg:'Please Select Country',
    isShowError:false,
    options:['India','US','China'],
    value:'US'
  }
]

class Register extends React.Component {
  state={
    formData:'',
    data:{
      uid:'',
      pwd:'',
      gender:'F',
      country:'US'
    }
  }
  constructor(){
    super();
    this.defaultValues=['','','F','US']
  }
  componentDidMount(){
    this.fnPrepareTemplate()
  }
  fnChange=(eve)=>{
    eve.stopPropagation()
    const {name,value}=eve.target
    let inputControlObj=inputControls.find((obj)=>{
      return obj.name==name
    });
    inputControlObj.value=value;
    this.fnPrepareTemplate()
    this.setState({
       data:{
         ...this.state.data,
         [name]:value
       } 
    })
  }
  fnRegister=()=>{
     ServerCall.fnSendPostReq('std/reg-std',this.state.data)
     .then((res)=>{
        let response=res.data;
        if(res.status && response.acknowledged && response.insertedId){
          alert('inserted')
          inputControls.forEach((obj,i)=>{
            obj.value=this.defaultValues[i]
          })
          this.fnPrepareTemplate()
        }else{
          alert('not inserted')
        }
     })
     .catch((res)=>{
        alert('something went wrong')
     })
  }
  fnPrepareTemplate=()=>{
     const arrInputs=inputControls.map((obj,index)=>{
       return  <Input key={index} id={index} obj={obj} fnChange={this.fnChange}  />
     })
     this.setState({
      formData:arrInputs
     })
  }
  render() {
    return template.call(this);
  }
}

export default Register;
