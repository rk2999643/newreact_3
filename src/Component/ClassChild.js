import React, { Component } from "react";

class ClassChild extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
             {/* <h1>{this.props.Name}</h1> */}
             <h1>{this.props.value.Name}</h1>
             <h1>{this.props.value.Rating}</h1>
            </>
        )
    }
}
export default ClassChild