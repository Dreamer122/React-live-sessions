import React from "react"
import ReactDOM from "react-dom/client";

        // let heading= document.createElement("h1");
        // heading.innerHTML="Hello Everyone"
        // console.log(heading)
        // let container=document.getElementById("root")
        // container.appendChild(heading)


    // async and defer --- assignment 
    let heading=React.createElement("h1",
    {
        id:"title",
        className:"box",
        hello:"world"
    },"Hello Everyone")

    console.log(heading)

let heading2=React.createElement("h2",{},"react + vite");


/*
div
-> p
-> ul -> li*4


*/
let nav=React.createElement("div",{},[
    React.createElement("p",{},"logo"),
    React.createElement("ul",{},[

        React.createElement("li",{},"home"),
        React.createElement("li",{},"home"),
        React.createElement("li",{},"home"),
        React.createElement("li",{},"home")
    ])
])
console.log(nav)

// jsx -> javascript xml 



let container=React.createElement("div",{},[heading,heading2,nav])
// -> react -> object -> html(dom)
// <p> hello</p> -> react.createelement->object -> html

// jsx -> html like syntax

let title= (<div>
    <h2>Title of project</h2>
     <p> We are using jsx</p>
     </div> ) 

let a="xyz"
let Footer=()=>{
    return (
        <p> this is footer</p>
    )
}
// nested component -> component composition
function Header(){ //<- functional component
    return (
        <div>
            {
              title
            }
            
           syntax -
            this is Header component
            <Footer/>
        </div>
    )
}
// Header()





    let root=ReactDOM.createRoot(document.getElementById("root"));
    // render showing -> present
    root.render(<Header/>)
    // root.render(title)


