import { BrowserRouter,Route,Routes } from "react-router"
import { Layout } from "./Components/Common/Layout"
import { Home } from "./Pages/Home"
import { Signup } from "./Components/Auth/Signup"
import { Login } from "./Components/Auth/Login"
import {Toaster} from "react-hot-toast"
import { Dashboard } from "./Pages/Dashboard"
import { ProtectedRoute } from "./Components/ProtectedRoute"
import { CreateBlogpage } from "./Components/Dashboard/Crud/CreateBlogpage"
import { EditBlog } from "./Components/Dashboard/Crud/EditBlog"
import { BlogDetails } from "./Pages/BlogDetails"
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>} />
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard/:userid" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>

<Route path="/createBlog/:userid" element={<ProtectedRoute><CreateBlogpage/></ProtectedRoute>}></Route>
<Route path="/editblog/:postid" element={<ProtectedRoute><EditBlog/></ProtectedRoute>}></Route>
<Route path="/blogdetail/:userid/:postid" element={<ProtectedRoute><BlogDetails/></ProtectedRoute>}></Route>
</Route>

    </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  )
}
export default App