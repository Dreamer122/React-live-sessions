import React, { Component } from "react";
import Child from "./Child1";
class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            count:1,
            count1:0
        }

       this.interval= setInterval(()=>{
            console.log("interval called")
        },1000)

       console.log("constructor called")


    }

  async componentDidMount(){
        // call api
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json()
        console.log("parent data",data)
        console.log("component did mount called-parent")
    }

    componentDidUpdate(prevprops,prestates){
        // if(this.prestates.count!=this.state.count){
        //     // task

        // }
        // if(this.prestates.count1!=this.state.count1){
        //     // task
        // }
        console.log("component updated")
    }

    componentWillUnmount(){
        clearInterval(this.interval)
        console.log("component will unmount")
    }

    render(){
        console.log("render function called")
        return (
            <>
            <h1>this is class based component</h1>
            <p> this is count  {this.props.name}
                {this.props.userid}
            </p>
            <h2>
                state: {this.state.count}
            </h2>
            <h2>
                state: {this.state.count1}
            </h2>
            <button onClick={()=>this.setState({
                // count:this.state.count+1,
                count1:this.state.count1+2
            })}>update state</button>

            {/*  child component */}
            <Child name="child1"/>
            {/* <Child name="child2"/> */}
            </>
        )
    }

}
export default Header