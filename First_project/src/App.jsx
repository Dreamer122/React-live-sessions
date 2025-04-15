import "./App.css"
import React ,{useEffect} from "react"

import Body from "./Components/Body"


function App({addCart}){ // <- functional component 
//   useEffect(()=>{
//     document.title="Ecommerce Site"
// },[])
  
  return(
    <>
   <Body addCart={addCart}/>
   </>
  )
}


export default App
