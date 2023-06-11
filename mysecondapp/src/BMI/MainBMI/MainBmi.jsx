import React from 'react'
import Input from '../../Shared/Input';
import { useState, } from 'react';
import Button from '../../Shared/Button';
export const MainBmi = () => {
  const[height,setHight]=useState("");
  const[weight,setweight]=useState("");
  const[bmiShow,setBmiShow]=useState([]);
  const[message,setMessage]=useState("");
  const[checkMessage,setCheckMessage]=useState(false);
  const[bmiColor,setBmiColor]=useState("");
  const[backColor,setBackColor]=useState("");

  const onHight=(event)=>{
      setHight(event.target.value);
    }

   const onWeight=(event)=>{
      setweight(event.target.value);
    }
    
    const onSubmitHandler = () =>{
    if(height && weight){
    setCheckMessage(false);    
    let h=Number(height);
    let w=Number(weight);
    let hi=(h/100);
    let bmi=((w)/(hi*hi));
    let b=bmi;
    let str="";
      if(b>=18 && b<25){
        str="You are fit";
        setBmiColor("text-green");
        setBackColor("bg-green")
    }
    else if(b<18){
        str="You are under weight";
        setBmiColor("text-blue");
        setBackColor("bg-blue")
    }
    else if(b>=25 && b<30){
      str="you are over wight";
      setBmiColor("text-yellow");
      setBackColor("bg-yellow")
    }
    else{
        str="You are within obese range";
        setBmiColor("text-orange");
        setBackColor("bg-orange")
    }
    const s={b,str};
    setBmiShow((prevState)=>[...prevState,s]);
    }
    else{
        setCheckMessage(true);
        setMessage("Please enter height and weight");
      }
}

const onExpenseFormClearHabdler=()=>{
    
    setHight("");
    setweight("");
    setBmiShow([]);
    setMessage("");
   
  };
  
  return (
   <>


   <div className="flex justify-center items-center mt-5 mb-5">
      <Input type="text" placeholder="Enter height in cm" className="" label="Height:" onChange={onHight} value={height}/>
      <Input type="text" placeholder="Enter weight in kg" className="" label="Weight:" onChange={onWeight} value={weight}/>
    </div>

    <div className="flex justify-center items-center">
        <Button buttonname="Calculate" onClick={onSubmitHandler}/>
        <Button buttonname="Reset" onClick={onExpenseFormClearHabdler}/>
    </div>
     
     <div>
    
            <div className={"flex justify-center items-center mt-5 mb-5 ml-17 mr-17 bg "+backColor}>
             <p className="font-bold font-cherrybomb text-4xl  mt-2 mb-2 text-gray-dark">result</p>
             </div>
     </div>

     <div className="flex justify-center items-center">
     {checkMessage && (
          <p className="text-center text-2xl font-semibold">{message}</p>
        )}
     </div>
     <div>
      {bmiShow.map((ele,i,arr)=>(
                  <div className="">
                        <div key={i}>
                          <p className={"text-2xl font-bold text-center "+ bmiColor}>BMI:{ele.b} kg/m^2</p>
                          <p className={"text-2xl font-bold text-center "+bmiColor}>{ele.str}</p>
                        </div>
                      </div>
                      ))}
                </div>
    

   </>
  );
};
export default MainBmi;
