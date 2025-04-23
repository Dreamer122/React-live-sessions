import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Accordion } from '../Components/Accordion'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { FiTruck } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

import useCallApi from '../utils/useCallApi'
export const Productdesc = () => {
    const {title,id}=useParams()

    const singleProduct=useCallApi(`https://dummyjson.com/products/${id}`)

    useEffect(()=>{
      // add page title
      document.title=`${title} | Product Page`
    },[title])
    
    
  return (
    <>
    

<div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={singleProduct?.images[0]}
                alt={singleProduct?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {singleProduct?.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${singleProduct?.title} ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{singleProduct?.title}</h1>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaRegStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(singleProduct?.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {singleProduct?.rating} ({singleProduct?.reviews.length} reviews)
                </span>
              </div>
            </div>

            <div className="text-2xl font-bold text-gray-900">${singleProduct?.price}</div>

            <p className="text-gray-600">{singleProduct?.description}</p>

            
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white rounded py-2 px-8">
                <MdOutlineShoppingCart className="text-2xl inline" />
                Add to Cart
              </button>
              <button className='border border-gray-300 rounded py-4 px-8 '>
                <FaRegHeart className="w-5 h-5" />
              </button>
              <button className=' border border-gray-300 rounded py-4 px-8 '>
                <FiShare2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 text-center border border-gray-300 rounded">
                <LuShield className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Secure Payment</div>
              </div>
              <div className="p-4 text-center border border-gray-300 rounded">
                <FiTruck className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Free Shipping</div>
              </div>
              <div className="p-4 text-center border border-gray-300 rounded">
                <LuRefreshCcw className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Easy Returns</div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>





    {/* accordion */}
    <h3 className='text-5xl text-center my-5'>FAQ</h3>
    <div className='my-5'>

    <Accordion></Accordion>
    </div>
    </>
  )
}
