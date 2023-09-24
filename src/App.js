import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import Question from "./components/question";
import Result from "./components/result";



function App() {
 
  const[maindata,setMaindata]=useState("")



 

  useEffect(()=>{
   async  function data(){
    const data=await fetch("https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple")
     const jsondata=await data.json()
       return  setMaindata(jsondata),console.log(maindata)
    // console.log((maindata[0].result[0]).​category)

    // console.log(Data)
    // console.log(Data[0].mm[0].question)
     }
     data();
 },[])

  return (
    <div className="App bg-black text-light">
          <h2>Quiz App</h2>
{   maindata!="" ?(
      <Question show={maindata} ></Question>
):null}
    </div>
  );
}

export default App;
