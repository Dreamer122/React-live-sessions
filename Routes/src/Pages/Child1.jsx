import React from "react";
class Child extends React.Component{
    constructor(props){
        super(props)
        console.log("child1-constructor",this.props.name)
    }

   async componentDidMount(){
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json()
        console.log(data)
        console.log("componentDidMount",this.props.name)
    }

    render(){
        console.log("render-child1",this.props.name)
        return (<div>
            Child component
        </div>
        )
    }

}
export default Child