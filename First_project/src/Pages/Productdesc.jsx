import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Productdesc = () => {
    const {title,id}=useParams()
    const [singleProduct,setSingleProduct]=useState({})

    // call the api with id

    async function getsingledata(){
     let res=  await fetch(`https://dummyjson.com/products/${id}`)
     console.log("response=",res)
            let data=await res.json()
            console.log(data)
            setSingleProduct(data)
    }
    useEffect(()=>{
      getsingledata()
    },[])

    console.log("image",singleProduct.images)
    
  return (
    <div className='' style={{display:"flex"}}>
      {/* right left */}
      <div className="left-side">
        <div className="images">
    {
        singleProduct?.images?.map((image,i)=>{
           return(

               <img src={image} alt="productimage" key={i} style={{height:"200px",display:"block"}} />
           )
        })
    }
        </div>
        <div className="main-image">
<img src={singleProduct.thumbnail} alt="images" style={{height:"300px"}} />    
        </div>

      </div>
      <div className="right-side">
    <h2>{singleProduct.title}</h2>
    <p>{singleProduct.description}</p>

    <p>{singleProduct.price}</p>
    <p>ratings {singleProduct.rating}</p>
      </div>

    </div>
  )
}
