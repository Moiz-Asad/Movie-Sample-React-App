import React,{useState} from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import './index.css';

function App() {
  const [pager,setPager] = useState(true);
  const [credential,setCredential] = useState({});
  const updatePage=()=>{
    setPager(!pager);
  }
  const updateCred=(obj)=>{
    console.log(obj);
    setCredential(obj);
  }
  return (
    <div className="App">
      {
        pager?
        <Login updateCred={updateCred} navigate={updatePage}/>:
        <Dashboard obj={credential} navigate={updatePage}/>
      }
    </div>
  );
}

export default App;
