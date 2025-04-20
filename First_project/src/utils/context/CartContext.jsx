import { createContext ,useState} from "react"
import toast from "react-hot-toast";
const CartContext=createContext()


export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const addCart=(product)=>{
        console.log("data added")
        const exists=cart.find((item)=>{
            return item.id===product.id
        })
        if(exists){
            toast.error(product.title+"already added to cart")
            return

        }
        setCart([...cart,{...product,qty:1}])
        toast.success(`${product.title} Successfully added to cart`)
    }
//  cleart cart function
    const clearCart=()=>{
        setCart([])
    }

    //  remove item from cart
    const removeProduct=(product)=>{
        const newCart=cart.filter((item)=>product.id!=item.id) 
        setCart([...newCart])

    }
    //  increase quantity

    const increase=(product)=>{
        const newCart=cart.map((item)=>{
            if(item.id==product.id){
                return {
                    ...product,qty:product.qty+1
                }
            }
            else{
                return item
            }

        })
        setCart([...newCart])

    }


    //  deccrease quantity
    const decrease=(product)=>{
        const newCart=cart.map((item)=>{
            if(item.id==product.id && product.qty>1){
                return {
                    ...product,qty:product.qty-1
                }
            }
            else{
                return item
            }

        })
        setCart([...newCart])

    }

    // total cart price
    const totalCartPrice=()=>{
        const price=cart.reduce((acc,item)=>acc+item.price*item.qty,0)
        return price
    }


    return(
        <CartContext.Provider value={{cart,addCart,removeProduct,clearCart,increase,decrease,totalCartPrice}}>
        {children}
        </CartContext.Provider>
    )
}


export default CartContext

// 
/*
1. create context <- contains object
     -> accessed it in header component
*/