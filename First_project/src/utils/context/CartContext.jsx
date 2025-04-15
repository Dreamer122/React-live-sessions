import { createContext, useState } from "react"
import toast from "react-hot-toast"
const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])

    const addCart=(product)=>{
       
        const exist= cart.find((items)=>{
            return  items.id===product.id
        })
        if(exist){
            toast.error(`${product.title} already added to cart`)
            return 
        }
        setCart([...cart,{...product,qty:1}])
        toast.success(`${product.title} added to cart`)
    }

// remove product from cart
const removeCart=(product)=>{
    setCart([
       ...cart.filter((item)=>item.id!==product.id)
    ])
    toast.success(`${product.title} removed from cart`)

}
// clear cart
const clearCart=()=>{
    setCart([])
}

// increase quantity
const increase=(product)=>{
    setCart((prev)=>{
        return (
            prev.map((item)=>item.id==product.id?{...product,qty:product.qty+1}:item)
        )
    })
}

// decrease quanity
const decrease=(product)=>{
    setCart((prev)=>{
        return (
            prev.map((item)=>item.id==product.id?{...product,qty:product.qty-1}:item)
        )
    })
}

    return (
        <CartContext.Provider value={{cart,addCart,removeCart,clearCart,increase,decrease}}>
        {children}
        </CartContext.Provider>
    )
}


export default CartContext


