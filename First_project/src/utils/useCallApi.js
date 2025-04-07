import { useState,useEffect } from "react"
function useCallApi(url){

    const [Product,setProduct]=useState(null)

    // call the api with id

    async function getsingledata(){
     let res=  await fetch(url)
     console.log("response=",res)
            let data=await res.json()
            console.log(data)
            setProduct(data)
    }

    useEffect(()=>{
      getsingledata()
    },[url])

    
    return Product

}
export default useCallApi