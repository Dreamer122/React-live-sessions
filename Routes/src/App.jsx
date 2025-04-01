
import {createBrowserRouter,RouterProvider} from "react-router"
import { Contact } from "./Pages/Contact"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Errorcomp } from "./Pages/Errorcomp"
import { Layout } from "./Pages/Layout"

function App(){

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<Errorcomp/>,
      children:[

        {
          path:"",
          element:<Home/>,
          errorElement:<Errorcomp/>
    
        }
        ,
        {
          path:"/about",
          element:<About/>
    
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]

    }
    ,
    
  ])

  return(
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}
export default App