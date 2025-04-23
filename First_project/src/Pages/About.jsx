import { useState,lazy,Suspense } from "react"
// import Ourstory from "../Components/Ourstory";
import { FaHeart, FaShieldAlt, FaTruck } from 'react-icons/fa';


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
    <div className="space-y-8 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-4">About Fashion Blog</h1>
        <p className="text-lg text-gray-600">
          Your premier destination for fashion insights, trends, and style inspiration.
          We curate the latest in men's, women's, and children's fashion to help you
          stay ahead in the world of style.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaHeart className="text-indigo-600 text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
          <p className="text-gray-600">
            We carefully select and review all fashion pieces to ensure the highest quality recommendations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaTruck className="text-indigo-600 text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Trends</h3>
          <p className="text-gray-600">
            Stay updated with the latest fashion trends from around the world, curated just for you.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="text-indigo-600 text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Advice</h3>
          <p className="text-gray-600">
            Get styling tips and recommendations from our team of fashion experts and consultants.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">
              Founded in 2024, Fashion Blog has grown to become one of the most trusted sources
              for fashion inspiration and style guidance. Our mission is to make fashion accessible
              and enjoyable for everyone.
            </p>
            <p className="text-gray-600">
              We believe that style is a form of self-expression, and we're here to help you
              discover and develop your unique fashion identity.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">What Sets Us Apart</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Curated collections from top brands
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Expert styling advice and tips
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Comprehensive size guides
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Sustainable fashion focus
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

<div>

<h4 className="text-xl text-indigo-700">lazy load the component by clicking on it</h4>

<button onClick={()=>setShow(true)} className="border bg-blue-500 text-white roounded px-4 py-3">
    load data
</button>
{show?<Suspense fallback={<h3> loading data....</h3>}><Ourstory/></Suspense>:"click on button"}

</div>
</>
  );
};

