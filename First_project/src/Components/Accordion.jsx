import React, { useState } from 'react'
import { AccordionSection } from './AccordionSection'

export const Accordion = () => {
    const [sectionIndex,setSectionIndex]=useState(null)

    const setIsOpen=(index)=>{
        setSectionIndex((prev)=>prev===index?null:index)
    }

    const FAQ=[
        {question:"what is React",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus!"}
   ,
        {question:"what is useState",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus!"}
   ,
        {question:"what is what",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus!"}
   ,
   

    ]


  return (
  <>
  <div className='w-1/2 border m-auto'>
 {
    FAQ.map((items,index)=>{
        return(
            <AccordionSection key={index} Question={items.question} answer={items.answer}
             isOpen={sectionIndex===index}
             setIsOpen={()=>setIsOpen(index)}
             />
        )

    })
 }
   
  </div>

  </>
  )
}
