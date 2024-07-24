import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from './Card';

export default function TopRest() {
    
const [data,setData]=useState([]);

const fetchTopRestaurant=async()=>{
const response=await fetch('http://localhost:5000/restChain');
const apiData=await response.json();
setData(apiData);

}




useEffect(
    ()=>{
        fetchTopRestaurant();
    },[]
)


  return (
    <>
    <div className="max-w-[1200px] mx-auto ">
   <div className='flex my-3 items-center justify-between'>
    <div className='text-[20px] font-bold'>Top restaurant chains in Jodhpur</div>
<div className='flex'>
<div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center' >
    <FaArrowLeft /></div>
<div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center'  >
    <FaArrowRight /></div>
</div>
</div>


<div className="flex gap-9 overflow-hidden">
   {
    data.map(
        (d,i)=>{
            return <Card {...d} key={i}/>
        }
    )
   }
   
    <Card/>
   
</div>
<hr className='my-6 border-[1px]'/>
</div>
    
    </>
  )
}
