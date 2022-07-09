import React,{useState} from 'react';
import { credentials } from '../credentials';
import Logo from '../components/Assets/Logo.png';
import './Style.css';

function Login(props) {
  const [state,setState] = useState("");
  const [psword,setPasswrd] = useState("");
  const RemoveDProperty = (event)=>{

    event.preventDefault();
    if (credentials.email === state && credentials.password === psword){
      props.updateCred(credentials);
      props.navigate();
    }    
    else{
      alert ("Invalid");
    }
    setState("");
    setPasswrd("");
  }
  const handlePswrd = (event)=>{
    setPasswrd(event.target.value);
  }
  const HandleChangeState = (event)=>{
    setState(event.target.value);
  }

  return (
    <div className='Container'>
      <div className='Container2'>
      <img src={Logo} alt="Logo" height={170} width={170}/>
        <form onSubmit={RemoveDProperty}>

          <input type="email" value={state} onChange={HandleChangeState} className="fname" placeholder="Email" />

          <input type="password" className="lname" value={psword} onChange={handlePswrd} placeholder="Password" />
          
          <input type="submit" value="Login"/>
        </form>
      </div>
    </div>
  )
}

export default Login