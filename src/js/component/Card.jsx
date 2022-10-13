import React, { useState, useEffect } from "react";



function Card(props){
    
 const [counterSeconds1, setCounter1] = useState(0);
 const [counterSeconds2, setCounter2] = useState(0);
 const [counterMinutes1, setCounter3] = useState(0);
 const [counterMinutes2, setCounter4] = useState(0);
 const [counterHours1, setCounter5] = useState(0);
 const [counterHours2, setCounter6] = useState(0);

 useEffect(()=> {
    /*  clearTimeout(miTimeout) */
     const miTimeout = setTimeout(()=>{
        
        
        if(counterHours1 === 9 && counterMinutes2 === 9 && counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){
         
            setCounter1(0)
            setCounter2(0)
            setCounter3(0)
            setCounter4(0)
            setCounter5(0)
            setCounter6(counterHours1 + 1)
            return
           }
        
        
        
        if(counterMinutes2 === 9 && counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){
         
            setCounter1(0)
            setCounter2(0)
            setCounter3(0)
            setCounter4(0)
            setCounter5(counterHours1 + 1)
            return
           }
        
        if(counterMinutes1 === 9 && counterSeconds2 === 5 && counterSeconds1 === 9 ){
         
            setCounter1(0)
            setCounter2(0)
            setCounter3(0)
            setCounter4(counterMinutes2 + 1)
            return
           }

       if(counterSeconds2 === 5 && counterSeconds1 === 9 ){
        setCounter1(0)
        setCounter2(0)
        setCounter3(counterMinutes1 + 1)
        return
       }

        if(counterSeconds1 === 9){
            setCounter1(0)
            setCounter2(counterSeconds2 + 1)
            return
          }





      
       setCounter1(counterSeconds1 + 1);
     },1000)
   },[counterSeconds1])
       


  




    return (
    <div className="container">
        <div className="card-group row pt-5 ps-3 pe-3 ">

        <div className="card text-white bg-dark mb-3 me-1 ">
        <div className="card-body">
          <h5 className="card-title text-center fs-1">{counterHours2.toString()}</h5>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3 me-1 ">
        <div className="card-body">
          <h5 className="card-title text-center fs-1">{counterHours1.toString()}</h5>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3 me-1 ">
        <div className="card-body">
          <h5 className="card-title  text-center fs-1">{counterMinutes2.toString()}</h5>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3 me-1">
        <div className="card-body">
          <h5 className="card-title text-center fs-1">{counterMinutes1.toString()}</h5>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3 me-1">
        <div className="card-body">
          <h5 className="card-title  text-center fs-1">{counterSeconds2.toString()}</h5>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3 me-1">
        <div className="card-body">
          <h5 className="card-title  text-center fs-1">{counterSeconds1.toString()}</h5>
        </div>
        </div>
        </div>
        <a href="#" onClick={() => setCounter1(0)} className="btn btn-primary d-flex justify-content-center">Reset Button</a>
    </div>
    );

    
}




export default Card;