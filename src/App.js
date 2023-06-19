import logo from './logo.svg';
import './App.css';
import {useState} from "react"

import InpForm from './components/InpForm';
import Result from './components/Result';

function App() {

const [leng,setLength]=useState({cnt:null});

const getLength = (s)=>{

  const s_arr = s.trim().split(/\s+/);
  if(s_arr=='')
  {
    
   
setLength({cnt:null});

  }
  else{
  

  const l=s_arr.length;

  setLength({cnt:l});
  

  }



}


  return (
    <div className="App">
      <h1>Word counter</h1>
      <InpForm getLength={getLength}/>
      {leng.cnt && <Result leng={leng}/>}

    </div>
  );
}

export default App;
