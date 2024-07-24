import React, {  useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { LuBadgeHelp } from "react-icons/lu";
import { PiSignInLight } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";


export default function Header() {
const[toggle,setToggle]=useState(false);
const showSlideMenu=()=>{
  setToggle(true);
}

const hideSideMenu=()=>{
  setToggle(false);
}

const links=[
{
  icon:<CiSearch />,
  path:"Search",
},

{
  icon:<BiSolidOffer />,
  path:'Offers',
  sup:'New',
},
{
  icon:<LuBadgeHelp />,
  path:'Help',
},
{
  icon:<PiSignInLight />,
  path:'SignIn',

},
{
  icon:<FaCartPlus />,
  path:'Cart',
  sup:0,
}
];
  return (
    <>
    
<div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
  opacity:toggle ?1:0,
  visibility:toggle?'visible':'hidden'
}}>
<div onClick={(e)=>{
  e.stopPropagation();
}} className="w-[500px] bg-white h-full absolute duration-[600ms]" style={{
  left: toggle?'0%':'-100%'
}}>
</div>

</div>
<header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
<div className='max-w-[1200px] mx-auto  flex items-center'>
    <div className='w-[100px] '>
        <img src="logo.png" alt="" className='w-full'/>
    </div>
<div className="">
    <span className='font-bold  border-b-[3px] border-[#fc8019] text-[#fc8019]'>Ratanada </span>Jodhpur,Rajasthan ,India 
    <RxCaretDown fonrSize={25} onClick={showSlideMenu} className='font-bold inline text-[0.9rem] text-[#fc8019] cursor-pointer' />
</div>
<nav className='flex list-none gap-10 ml-auto font-bold text-[18px]'>

{
  links.map(
(link,index)=>{
return <li key={index} className='cursor-pointer flex items-center gap-2'>
  {link.icon}
  {link.path}
 <sup>{link.sup}</sup> 
  
  </li>
}


  )
}
</nav>
</div>
</header> 
    
    </>
  )
}
