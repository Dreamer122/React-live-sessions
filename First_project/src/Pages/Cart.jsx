import React,{useContext, useEffect, useState} from 'react'
import CartContext from '../utils/context/CartContext'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export const Cart = () => {
    const {cart,removeProduct,clearCart,increase,decrease,totalCartPrice}=useContext(CartContext)
    const [total,setTotal]=useState(0)
    console.log(cart)
    useEffect(()=>{
      setTotal(  totalCartPrice())
    },[cart])
   
  return (
    <>
    <div className='flex'>

    
    
        <div className='flex  flex-wrap justify-around'>
    {

    cart.length==0?<h2 className='text-4xl text-center text-blue-500 my-7'>CART EMPTY</h2>:


    cart?.map((product)=>{
        return (
<div className='cardcart border border-gray-300 p-4' key={product.id}>
    <div>
        <img src={product.thumbnail} alt="" />
    </div>
    <div>
        <p>{product.title}</p>
        <p>price {product.price}</p>

    </div>
    <div className='flex justify-between'>
        <div>
            <button className=' bg-gray-500 px-2 py-1 rounded' onClick={()=>increase(product)}><FaPlus /></button>
            <span className='text-xl'>{product.qty}</span>

            
            <button className=' bg-gray-500 px-2 py-1 rounded' onClick={()=>decrease(product)}><FaMinus /></button>
        </div>
    <button className='border bg-red-500 text-white rounded px-3 py-2 cursor-pointer' onClick={()=>removeProduct(product)}>remove</button>
    </div>

</div>
        )
    })




}
 

    </div>
    <div className="rightbar p-4">
        <h2 className='text-2xl'>TOtal items in cart</h2>
        <h4>items:{cart.length}</h4>
        <h3 className='text-2xl'>TOTAL BILL:{total}</h3>
   { cart.length>0 &&    <button onClick={clearCart} className='bg-red-700 text-white rounded px-4 py-3'>clear cart</button>}
    </div>
</div>

    </>
  )
}
