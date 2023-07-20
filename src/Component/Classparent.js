import React, { Component } from "react";
import ClassChild from "./ClassChild";

class Classparent extends Component{
    constructor(){
        super();
        this.state ={
            Name : "Raja",
            Rating : "A+"
        }
    }

    render(){
        return(
            <>
              {/* <ClassChild Name="EA23"/> */}
              <ClassChild value = {this.state}/>
            </>
        )
    }
}
export default Classparent