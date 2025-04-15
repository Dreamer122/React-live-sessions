import "./App.css"
import React ,{useEffect} from "react"

import Body from "./Components/Body"


function App(){ // <- functional component 
//   useEffect(()=>{
//     document.title="Ecommerce Site"
// },[])
  
  return(
    <>
   <Body />
   </>
  )
}


export default App
