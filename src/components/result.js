import React from 'react'
import"../App.css";
import Question from './question';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';



// 


const Result = () => {

  let navigate=useNavigate()
let rdata=useLocation()
console.log(rdata.state)


  const goto=()=>{
navigate("/")
  }
  return (
    <div className='result-main'>
    <div className='result'>
          <h2 className=' text-bg-warning  border-secondary border'>Result </h2>
          <p> Your Score Is <span className=' text-success fs-4 '>{rdata.state.score}</span> out Of <span className=' text-danger fs-4' >{rdata.state.length}</span></p>
          <button onClick={goto}>Restart</button>
     </div>
     </div>
  )
}

export default Result
