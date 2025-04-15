import React from 'react'

export const Cart = ({cart}) => {
    console.log(cart)
   
  return (
    <>
        <div className='flex  flex-wrap justify-around'>
    {

        cart.length==0?<h2 className='text-4xl text-center text-blue-500 my-7'>CART EMPTY</h2>:


    cart?.map((product)=>{
        return (
<div className='cardcart' key={product.id}>
    <div>
        <img src={product.thumbnail} alt="" />
    </div>
    <div>
        <p>{product.title}</p>
        <p>price {product.price}</p>
    </div>

</div>
        )
    })




}
 

    </div>
    </>
  )
}
