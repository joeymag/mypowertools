'use client';

import React from 'react'
import { Select, SelectSection, SelectItem, Input, DateInput, Button, ButtonGroup } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import Brands from './brands'
import ToolType from './ToolType'
//[x] image upload
///[x] brand slection
//[x] model selection
//[x] prices paid
//[x] date of purchase
//[] submit button


const animals = [
    { label: "Select an animal", value: "" },
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Mouse", value: "mouse" },
    { label: "Lion", value: "lion" },
    { label: "Elephant", value: "elephant" },
];

function Page() {

    const handleChage = (e) => {
        const { value } = e.target;
        console.log(value);
        
       

    }
    

    return (
        <div className='flex flex-1 flex-col m-10 justify-center items-center p-4 '>
            <div className='flex-1   p-10 bg-black border-2 rounded '>
                <img src='https://i.pravatar.cc/150?u=a04258114e29026702d' className='h-20 w-20 '></img>
                <div className='py-4 '>
                    <Select label="Select an brand" className="max-w-md text-black ">
                        {Brands.map((brand) => (
                            <SelectItem key={brand.value} value={brand.value}>
                                {brand.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <div className='py-4'>
                        <Select label="Select tool type" className="max-w-xs">
                            {ToolType.map((ToolTypes) => (
                                <SelectItem key={ToolTypes.value} value={ToolTypes.value} onChange={handleChage}>
                                    {ToolTypes.label}
                                
                                </SelectItem>
                            ))}
                        </Select>
                        <div className='py-4'>
                            <input type="prices" 
                            label="paid prices" 
                            placeholder="how did you pay for the tool" 
                            onChange={""}
                            />


                            <div className='py-4'>
                                <DateInput label={"date of purchase"} placeholderValue={new CalendarDate(2000, 12, 6)} className="lg:w-45" />
                                <div className='py-4 '>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full h-full'
                                        title='submit'
                                        onClick={""}>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page