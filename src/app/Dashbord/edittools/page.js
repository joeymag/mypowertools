
import React from 'react'

const Popupmodale = ({
    closeModal,
    openModal
}) => {

    if (!openModal) return false

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm flex justify-center items-center'>

            <div className='w-[600px] h-[600px] justify-center items-center bg-black p-10 rounded-md border-2 border-white '>

                <div className='flex flex-row items-center justify-center '>
                <div className='bg-black px-4 flex flex-row '>
                    <img src='https://i.pravatar.cc/150?u=a04258114e29026702d' className='h-[202px] w-[202px] ' />
                </div>
                <div className=' flex-col  gap-2'>
                    <img src='https://i.pravatar.cc/150?u=a04258114e29026702d' className='h-[100px] w-[100px] ' />
                    <img src='https://i.pravatar.cc/150?u=a04258114e29026702d' className='h-[100px] w-[100px] ' />
                </div>
                </div>

                <div className='flex-col space-between gap-2  py-4  '>
                    <p className='text-white text-[18px] font-bold'>brand: {""}</p>
                    <p className='text-white text-[18px] font-bold'>model: {""}</p>
                    <p className='text-white text-[18px] font-bold'>serial: {""}</p>
                </div>
                
                <div className='justify-center items-center '>
                    <button className='bg-white text-black py-2 px-4 rounded-md  items-center 'onClick={()=> closeModal() } >close</button>
                </div>

            </div>
        </div>
    )
}

export default Popupmodale