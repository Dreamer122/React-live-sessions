import { useEffect, useState,lazy,Suspense } from "react"
// import Ourstory from "../Components/Ourstory";

const Ourstory=lazy(()=>import("../Components/Ourstory"))

export const About=()=>{

    const [show,setShow]=useState(false);
    /*
    on demand loading
    code splitting
    lazy loading 
    chunking 

    */
    

    return (
        <>
   {/* <Header/> */}

        <h2>About page </h2>
        <p> ecommerce site</p>

        <button onClick={()=>setShow(true)} className="border bg-blue-500 text-white roounded px-4 py-3">
            load data
        </button>
        {show?<Suspense fallback={<h3> loading data....</h3>}><Ourstory/></Suspense>:"click on button"}
        {/* <Footer/> */}
        </>
    )
}