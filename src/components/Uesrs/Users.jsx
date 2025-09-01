import axios from "axios";
import  "./Users.css"
import Card from  "../Card/Card"
import { useState ,useEffect } from "react";

export default function Users(){
const[IsError, SetError]=useState(false)
const [IsLoading, SetLoading]=useState(true)
const  [Users,SetUsers]=useState([])



useEffect(()=>{
    const UserData=async ()=>{
    try {
        const responce =  await axios.get("https://jsonplaceholder.typicode.com/users")
        const data =await responce.data
        console.log(data)
        SetLoading(false)
        SetUsers(data)
        
        
    } catch (error) {
        console.log(error)
        SetError(true)
        SetLoading(false)

    }
}

UserData();
},[])


if (IsError)return <h1 className="text-center text-danger">Something Went Wrong !</h1>
if (IsLoading) return <h1  className="text-center text-success">Loading ...</h1>




    return (
        <>
     <Card>

           <div className="card-container">
            {Users.map((item ,index)=>{
               return(
                 <div className="card" key={index}>
                    <h1>{item.id}</h1>
                    <h5>{item.name}</h5>
                    <p>{item.email}</p>
                </div>
               )
            })}

        </div>
     </Card>

        </>
    )
}