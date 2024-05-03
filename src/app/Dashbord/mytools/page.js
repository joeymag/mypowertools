"use client";

import StolonCard from '@/components/StolonCard/page';
import Tabless from '@/components/Tabless/page';
import DetailCard from '@/components/deailtsCards/page';
import React, { useState } from 'react';
import { RiEdit2Fill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import Popupmodale from '../edittools/page';



//async function fetchTools() { 
  //try {
//const res = await fetch('http://localhost:3000/api/Tools');
  //  if (res.ok) {
  //    return res.json();
 //   }
    
  
 // } catch (error) {
 //   console.error(error);
//  }

//}





const page =  () => {
  const [openModal, setOpenModal] = useState(false)
 // const tools = await fetchTools();
 // console.log(tools) 
  return (
   
        
          <><div className='grid gap-4 md:grid-cols-2 lg:grid-cols-2 py-4 p-2'>
      <DetailCard key={"tools.id"} tools={"tools"} />
      <StolonCard key={"tools.id"} tools={"tools"} />
    </div><div className="p-4 px-4">
        <button
          title='add tool'
          onClick={() => {
            // navigate to CreateTools page
            window.location.href = '/Dashbord/CreatTools';
          } }
        >
          Add Tool
        </button>
        <div className='flex flex-row bg-slate-500 border-2  border-black border-solid rounded-md overflow-hidden'>
        <img src='https://i.pravatar.cc/150?u=a04258114e29026702d' className='h-20 w-20 '>

        </img>
        <div className='flex flex-row space-between gap-5 items-center px-4'>
        <p className='text-white'>brand</p>
        <p className='text-white'>model</p>
        <p className='text-white'>serial</p>
        <RiEdit2Fill
        size={25}
        color='green'
        onClick={() => {
          // navigate to CreateTools page
          window.location.href = '/Dashbord/CreatTools';
        }}
        />

        <FaEyeSlash 
        size={25}
        color='red' 
        />
        <Popupmodale isvisible={Popupmodale} />
        
        </div>
        </div>
      </div>
      </>
        
      );
    };

    
    

export default page;