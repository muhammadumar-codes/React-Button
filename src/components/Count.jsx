import { useState } from "react";
import Button  from "./Button/Button"
import  "./Count.css"


export default function Count() {
  const [Count, SetCount] = useState(0);

  const Increase = () => {
    SetCount(Count + 1);
  };

  const Decrease = () => {
    if (Count>0){
SetCount(Count - 1);
    }
    
  };

function Reset(){
if (window.confirm("Would like to Reset"))
{
  SetCount(0)
  return
  
}



}

  return (
    <div className="container">
      <h1 className="count">{Count}</h1>
      <Button className='btn-increase' onClick={Increase}>Increase</Button>
      <Button className='btn-increase' onClick={Decrease}>Decrease</Button>
      <Button className='btn-Reset' onClick={Reset}>Reset</Button>




      {/* Child ko pass kar rahe hain */}
    </div>
  );
}
