import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList";
function App(){
  return(
    <>
    <div className="bg-green-300 h-screen w-full p-6">

    <h1 className="text-center">TODO APP</h1>
    <div className="w-6/12 mx-auto bg-white shadow-md rounded p-3">

    <TodoInput/>
    <TodoList/>
    </div>
    </div>
    </>
  )
}
export default App;