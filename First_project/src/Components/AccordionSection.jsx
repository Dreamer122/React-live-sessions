import React, { useState } from 'react'

export const AccordionSection = ({Question,answer,isOpen,setIsOpen}) => {
    // const [isOpen,setIsOpen]=useState(false)
  return (
    <>
    
    <div className='border text-xl'>
        <div className='question flex justify-between'>
           
            <p> {Question}</p> <button className='bg-black text-white px-4 py-4 cursor-pointer'
            onClick={setIsOpen}
            >hide/show</button>
        </div>
       {
        isOpen &&  <p className='answer '>
       {answer}
    
            </p>
       }
    </div>
    </>
  
  )
}

/*

question -> 
answer -> 


*/
