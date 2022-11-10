// import "./styles.css";

import React, { useState } from 'react';
import './App.css';


function App(){
  const[height,setheight]=useState([]);
  const[weight,setweight]=useState([]);
  const[bm,setbm]=useState([]);
  const[list,setlist]=useState([]);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const[newhe,setnewhe]=useState("");
  const[newwe,setnewwe]=useState("");
  function calculate(){
    let hm=(newhe/100);
    let hs=(hm*hm);
    let v=(newwe/hs);
    let bm=v.toFixed(2)
     setbm((bm)=>{
       const updatedvm=[...bm]
       return updatedvm;
     })
    setlist((list)=>{
      const updatedata=[...list,bm];
      return updatedata;
  
    })

    setheight(()=>{
      const updatedhe=[...height,newhe];
      
      return updatedhe;
      
    })

    setweight(()=>{
      const updatedwe=[...weight,newwe];
      return updatedwe;
    })
    setnewhe("");
    setnewwe("")
  };

  function remove(i){
    const updated=list.filter((elem,id)=>{
      return i!==id
    })
    setlist(updated)
  }
  return(
    <div id='main'>
      <h1 className='head'>BMI-Tracker</h1>
      <input placeholder="height in cm" value={newhe} onChange={(e)=>setnewhe(e.target.value)}></input>
      <input placeholder="weight in kg" value={newwe} onChange={(e)=>setnewwe(e.target.value)}></input><br></br>
      <button onClick={calculate} className='btn'>Calculate BMI</button>

<div className='trbg'>

{
   height!==[]&&weight!==[] && list!==[] && list.map((item,i)=>
  <ul key={i} className='ul' >
    <li><span className='bmi'> BMI:{item}</span><span className='xbtn'><button onClick={()=>remove(i)}>x</button></span><br></br>
        <div className='top'>
        <span className='spf'> Height: {height[i]}</span>  <span className='spm' > Weight: {weight[i]}</span>
        <span className='spl'> date:{date}</span>   </div>                                   </li> 
  </ul>
  
  )
}
</div>
    </div>
  )
}
export default App