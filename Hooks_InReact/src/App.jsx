import { Memohook } from "./Memohook"
import { Parent } from "./Parent"
import { Reducerhook } from "./Reducerhook"

function App(){
  return(
    <>
    <div style={{textAlign:"center"}}>
    <h1> Hooks</h1>
   {/* <h2>Use reducer hook</h2>
   <Reducerhook/> */}
   {/* <h2>USE MEMO HOOK</h2>
    <Memohook/> */}
    <h2>memo, usecallback</h2>
    <Parent/>
    </div>
  
    </>
  )
}
export default App