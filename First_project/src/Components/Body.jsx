import React from "react";
import { Card } from "./Card";
import { Restaurant_list } from "../constants";
import { useState, useEffect ,useRef} from "react";
import { Link } from "react-router-dom";
import { filter_values } from "../utils/helper";
import useCallApi from "../utils/useCallApi";
import useOnline from "../utils/useOnline";


const Body = ({addCart}) => {
  const [appname, setAppname] = useState("Product Hub");
  const [restaurant_list, setRestaurant_list] = useState([]);
  const [filtered_data, setFilteredData] = useState([]);

  const ref=useRef(10)
  // console.log(ref)

  // const inputRef=useRef("")


  // search state
  const [searchText, setSearchText] = useState("");


  
  const data= useCallApi("https://dummyjson.com/products")

  const isonline=useOnline()

  const handleFocus=()=>{
    ref.current.focus()
    ref.current.style.backgroundColor="lightgrey";
   
  }
  
useEffect(()=>{
  // inputRef.current.value="hello"
  handleFocus()
},[])

  useEffect(() => {
    // callapi();
    setRestaurant_list(data?.products);
    setFilteredData(data?.products);
  }, [data]);

  if(!isonline){
    return <div> <h1 className="text-4xl"> oop! internet connection l🔴st </h1> </div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Product List</h1>
        
        {/* Search Bar */}
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ref={ref}
        />
{/* <input type="text" ref={inputRef} className="border bg-gray-300" /> */}
{/* <button onClick={handleFocus} className="bg-blue-300 px-4 py-3 rounded">focus on search bar</button> */}

          <button 
            onClick={()=>{
              
             setFilteredData(filter_values(restaurant_list,searchText))
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-r-lg transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered_data?.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <h2 className="text-xl text-gray-600">No products found. Try a different search...</h2>
          </div>
        ) : (
          filtered_data?.map((item) => (
            <Card product={item} addCart={addCart}  key={item.id} />
            
          ))
        )}
      </div>

      {/* App Info Section */}
      <footer className="mt-12 text-center">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">{appname}</h2>
        <div className="space-x-4">
          <button 
            onClick={() => setAppname("Product Explorer")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Update App Name
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Body;