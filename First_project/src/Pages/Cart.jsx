import React from 'react'
import { useContext } from 'react'
import CartContext from '../utils/context/CartContext'
import { FaOpencart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export const Cart = () => {
    const {cart,removeCart,increase,decrease,clearCart} =useContext(CartContext)
    // console.log(cart)

   
  return (
    <>
    <h2 className='text-5xl text-center flex justify-center'>Your Cart  <FaOpencart  className=''/></h2>
       <button onClick={clearCart}>clear cart</button>

        <div className='flex  flex-wrap justify-around'>


          
 {

        cart.length==0?<h2 className='text-4xl text-center text-blue-500 my-7'>CART EMPTY</h2>:


    cart?.map((product)=>{
        return (
<div className='cardcart shadow-2xl p-3' key={product.id}>
    <div>
        <img src={product.thumbnail} alt="" />
    </div>
    <div>
        <p>{product.title}</p>
        <p>price {product.price}</p>
    </div>
    <div className='flex justify-center my-3'>
        <button onClick={()=>increase(product)} className='bg-gray-400 py-3 px-5 rounded'> <FaPlus />
        </button>
        <p className='text-xl mx-4'>{product.qty}</p>
        <button onClick={()=>decrease(product)} className='bg-gray-400 py-3 px-5 rounded'> 
        <FaMinus /></button>
    </div>
    <div className='text-center my-3'>
        <button onClick={()=>removeCart(product)} className='bg-red-500 text-white rounded px-5 py-3'>remove</button>
    </div>

</div>
        )
    })
 }

 
 

    </div>
    </>
  )
}
