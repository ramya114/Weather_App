
import './App.css';
import React, { useState} from 'react';
let d=new Date();
let month=(d.getMonth());
let date=(d.getDate());
let year=(d.getFullYear())
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let today=`${months[month]} ${date},${year}` ;
console.log(d.getTime());
function App() {
  const [city,setCity]=useState("Vijayawada");
  const [data,setTemp]=useState(30.3);
  const [text,setText]=useState("");
  const [src,setSrc]=useState("");
  
const change=()=>
{
  let name=document.getElementById("text").value
  if(name.length===0)
  {
    alert("please enter valid city name")
  }
  else{
  setCity(name);
  }
  document.getElementById("text").value=" ";
}
const wetherData=async()=>
{
let p= await fetch(`http://api.weatherapi.com/v1/current.json?key=0880550ab7a7495681563218241509&q=${city}&aqi=no`);
let d=await p.json();
try{
console.log(d);
setTemp(d.current.temp_c);
setText(d.current.condition.text);
setSrc(d.current.condition.icon);
}
catch(err){
  
}
}

wetherData();

  return (
    <div className="container">
      <h3 className="date_conatiner">{today}</h3>
      <h2 className="city_conatiner">{city}</h2>
      <div className="wether">
        <img src={src} width="150px" height="150px" alt="rainy" />
        <div id="celcius">{data}</div>
        <div id="des">{text}</div>
      </div>
      <div className="textbox">
        <input id="text" type="text" placeholder="Enter City Name" />
        <button id="button" onClick={change}>Get</button>
      </div>
    </div>

  )

}

export default App;
