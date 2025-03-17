import { Card } from "./Card";
import { Restaurant_list } from "../constants";
import { useState, useEffect } from "react";


const Body = () => {
  const [appname, setAppname] = useState("app name");
  const [restaurant_list, setRestaurant_list] = useState([]);
  const [filtered_data, setFilteredData] = useState([]);
  const [fontsize, setFontSize] = useState(40);

  // search state
  const [searchText, setSearchText] = useState("");

  const styleObj = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap:"wrap"
  };

  
  //  filter function

  const filter_values = () => {
    const filtered_restaurants = restaurant_list.filter((value, i) => {
      return value.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    setFilteredData(filtered_restaurants);
  };

  const callapi= async ()=>{
   const response= await fetch("https://dummyjson.com/products")
   const data=await response.json()
    console.log(data)
    setRestaurant_list(data.products)
    setFilteredData(data.products)
    
  }

  useEffect(
    ()=>{
      callapi()
    }
  ,[])

console.log("rendered")

  return (
    <>
      <h2
        style={{
          fontSize: "50px",
          color: "red",
        }}
      >
        Restaurant list
      </h2>

      {/* 
      // search bar 
      */}

      <input
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={filter_values}>search</button>
      <div style={styleObj}>
        {
          //  unique id  >>>> index
          filtered_data.length == 0 ? (
            <h1> Data not found Try something else....</h1>
          ) : (
            filtered_data.map((item, index) => {
              return <Card product={item} key={item.id} />;
            })
          )
        }
      </div>
      <div>
        <h1 style={{ fontSize: `${fontsize}px` }}>{appname}</h1>
        <button onClick={() => setFontSize(60)}>update font size</button>
        <button onClick={() => setAppname("my new app name")}>click me</button>
      </div>
    </>
  );
};
export default Body;
