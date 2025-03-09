import React from "react"
import ReactDOM from "react-dom/client";
// import { Header } from "./component";
import {header} from "./component";
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



let container=React.createElement("div",{},[heading,heading2,nav,header])
// -> react -> object -> html(dom)
// <p> hello</p> -> react.createelement->object -> html

// jsx -> html like syntax





    let root=ReactDOM.createRoot(document.getElementById("root"));
    // render showing -> present
    root.render(container)


