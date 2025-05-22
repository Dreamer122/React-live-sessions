import React,{memo} from 'react'

export const Child = memo(({dummyvalue,handleclick}) => {
    console.log("child rendered")
  return (
    <div>Child
        <h3>{dummyvalue}</h3>
        <button onClick={handleclick}>click me</button>
    </div>
  )
}
)
