import "./App.css"
import React from "react"


// internal css

const styleObj={
  display:"flex",
  justifyContent:"space-evenly",
}

function Header(){
    return (
      <div className="nav">
        <p>My Food App</p>
        <ul>
          <li>Home</li>
          <li>ABout</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

      </div>
    )
}


/*
obj -> data 

*/
const Restaurant_list=[
{
  resturant_name:"Burger King",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtMb3HlA7HWFe70lGOz0yaTdHwEXVDj4Sfg&s",
  cuisine:"Burgers",
  rating:"3.5"
},
{
  resturant_name:"Subway",
  image:"https://content.jdmagicbox.com/comp/def_content_category/subway/screenshot-18--subway-2-1bipz-250.jpg",
  cuisine:"Sandwiches",
  rating:"4"
},
{
  resturant_name:"KFC",
  image:"https://content.jdmagicbox.com/comp/def_content_category/kfc/275889960-5402476773116173-9040472449722487578-n-kfc-1007-08voa.jpg",
  cuisine:"Chicken",
  rating:"3.6"
},
{
  resturant_name:"Bikaner",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRpqZKcJas7x9aBiRwMzddPAM6zi33XWtXw&s",
  cuisine:"indian",
  rating:"4"
},

]

const Card=(props)=>{
  console.log(props)
  const {restaurant}=props
  const {image,resturant_name,cuisine,rating}=restaurant
  return (
    <>
    <div className="card">
      <img src={image} alt="burger king"  style={{height:"200px",width:"250px"}}/>
      <h3 style={{fontSize:"25px"}}>{resturant_name}</h3>
      <h5 style={{fontSize:"22px"}}>{cuisine}</h5>
      <p>Rating {rating} stars</p>
    </div>
    </>
  )
}

const Body=()=>{
return(
   <>
   <h2 style={
    {
      fontSize:"50px",
      color:"red"
    }
   }>Restaurant list</h2>
   {
    // cards
    /* 
    image
    restaurant name
    cuisines
    rating 


    */
   }
   <div style={styleObj}>
   <Card restaurant={Restaurant_list[0]}/>
   <Card  restaurant={Restaurant_list[1]} />
   <Card  restaurant={Restaurant_list[2]}/>
   <Card  restaurant={Restaurant_list[3]}/>
   </div>
   </>
  )
}

function Footer(){
  return (
    <p> Footer</p>
  )
}

function App(){ // <- functional component 
  return(
    <>
   <Header/>
   <Body/>
   <Footer/>
   </>
  )
}

// function fun(a,b){
//   console.log(a,b)
  
// }
// fun(5,7)
export default App
