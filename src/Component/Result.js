import React, { Component } from "react";

class Result extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
              <div className="container">
              <h1 style={{backgroundColor:"aqua"}}>Form Data</h1><br/>

              {this.props.value.map((item,index) =>{
                return(
                    <div className="box">
                        <span key={index}>Name:{item.name}</span>
                    <span key={index}>Department:{item.dept}</span>
                    <span key={index}>Rating:{item.rat}</span>
                    </div>
                )
              })}
              </div>
              <button onClick={this.props.toggleFunc} className="back">Go Back</button>
            </div>
        )
    }
}
export default Result