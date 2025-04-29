import {BrowserRouter,Routes,Route} from "react-router"
import { Layout } from "./Pages/Layout"
import { Dashboard } from "./Pages/Dashboard"
import { AllEmployees } from "./Pages/AllEmployees"
import { AddEmployee } from "./Pages/AddEmployee"
function App(){
  return(<>
  
  <BrowserRouter>
  <Routes>
<Route path={"/"} element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="/Allemployee" element={<AllEmployees/>}/>
    <Route path="/AddEmployee" element={<AddEmployee/>}/>

</Route>
  </Routes>
  </BrowserRouter>


  </>)
}
export default App