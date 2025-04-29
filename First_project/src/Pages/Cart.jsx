import React,{useContext, useEffect, useState} from 'react'
import CartContext from '../utils/context/CartContext'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FiMinus, FiPlus, FiShoppingBag, FiCreditCard, FiArrowRight, FiTrash2 } from 'react-icons/fi';

export const Cart = () => {
    const {cart,removeProduct,clearCart,increase,decrease,totalCartPrice}=useContext(CartContext)
    const [total,setTotal]=useState(0)
    console.log(cart)
    useEffect(()=>{
      setTotal(  totalCartPrice())
    },[cart])
   
  return (
    <>
   


<div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FiShoppingBag className="w-6 h-6 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="ml-2 text-gray-500">({cart?.length} items)</span>
          </div>
          {cart?.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
            >
              <FiTrash2 className="w-4 h-4 mr-2" />
              Clear Cart
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm">
              {cart?.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {cart?.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-center">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="ml-6 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">
                                {item.title}
                              </h3>
                             
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-medium text-gray-900">
                                ${(item.price * item.qty).toFixed(2)}
                              </div>
                              <div className="mt-1 text-sm text-gray-500">
                                ${item.price.toFixed(2)} each
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => decrease(item)}
                                className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                              >
                                <FiMinus className="w-4 h-4" />
                              </button>
                              <span className="w-12 text-center">{item.qty}</span>
                              <button
                                onClick={() => increase(item)}
                                className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                              >
                                <FiPlus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeProduct(item)}
                              className="flex items-center px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                            >
                              <FiTrash2 className="w-4 h-4 mr-2" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">$10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">$5</span>
                </div>
                <hr className="border-t border-gray-200" />
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button 
                className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cart?.length === 0}
              >
                <FiCreditCard className="w-5 h-5 mr-2" />
                Proceed to Checkout
                <FiArrowRight className="w-5 h-5 ml-2" />
              </button>
              <p className="mt-4 text-sm text-gray-500 text-center">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
