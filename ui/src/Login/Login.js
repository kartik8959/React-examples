import React    from "react";
import template from "./Login.jsx";
import {Input} from '../shared/components/Input'



const inputControls=[
  {
    lbl:'User ID',
    type:'text',
    name:'uid',
    errorMsg:'Please Enter Uid',
    isShowError:false,
    isMandatory:true,
    value:''
  },
  {
    lbl:'Password',
    type:'password',
    name:'pwd',
    errorMsg:'Please Enter Password',
    isShowError:false,
    isMandatory:true,
    value:''
  }
]
class Login extends React.Component {
  state={
    formData:'',
    data:{uid:'',pwd:''}
  }
  componentDidMount(){
    this.fnPrepareTemplate()
  }
  fnChange=(eve)=>{
      eve.stopPropagation()
      const {value,name}=eve.target 
      let inputControlObj=inputControls.find((obj)=>{
        return obj.name==name
      });
      inputControlObj.value=value;
      
      this.fnCheckFormValidation()
      this.setState({
        data:{
          ...this.state.data,
          [name]:value
        }
      })
  }
  fnCheckFormValidation=()=>{
    let isValid=true
    inputControls.forEach((obj)=>{
        if(obj.value==''){
           obj.isShowError=true
           isValid=false
        }else{
          obj.isShowError=false
        }
    })
    this.fnPrepareTemplate()
    return isValid
  }
  fnLogin=()=>{
    let isValid=this.fnCheckFormValidation()
    if(!isValid)return;

    console.log(this.state.data)
  }
  fnPrepareTemplate=()=>{
     const arrInputs=inputControls.map((obj,index)=>{
       return  <Input key={index} id={index} obj={obj} fnChange={this.fnChange} />
     })
     this.setState({
      formData:arrInputs
     })
  }
  render() {
    return template.call(this);
  }
}

export default Login;
