import { Card } from "./Card"
import {Restaurant_list} from "../constants"
import { use, useState } from "react"
const Body=()=>{
    const [appname,setAppname]=useState("app name")
    const [restaurant_list,setRestaurant_list]=useState(Restaurant_list)
    const [fontsize,setFontSize]=useState(40)

//[variable,function]
    const styleObj={
        display:"flex",
        justifyContent:"space-evenly",
      }

     // let myappname="food app"

    //   const changename=()=>{
    //     // myappname="Zomato"
    //     // console.log(myappname)
    //    setAppname("my new app name")

    //   }

      //hooks -> its just a function -> useState

    return(
       <>
       <h2 style={
        {
          fontSize:"50px",
          color:"red"
        }
       }>Restaurant list</h2>
      
      {/* 
      // search bar 
      */}

      <input type="search" />
      <button>search</button>
       <div style={styleObj}>
       

       {
        //  unique id  >>>> index 
        restaurant_list.map((item,index)=>{
            return (
                <Card restaurant={item} key={item.id} />
            )

        })
       }
       
       </div>
       <div>

      
       <h1 style={{fontSize:`${fontsize}px`}}>
       {
        appname
       }
       </h1>
       <button onClick={()=>setFontSize(60)}>update font size</button>
       <button onClick={()=>setAppname("my new app name")}>click me</button>
       </div>
       </>
      )
    }
    export default Body