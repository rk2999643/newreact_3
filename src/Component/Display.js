import React, { Component } from "react";
import Result from "./Result";

class Display extends Component{
   constructor(){
    super();
    this.state = {
        Name : ' ',
        EmpData : [],
        Clicked : true

    }
   }
handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
}
handleClick = () =>{
    const empObj = {
        name: this.state.Name,
        dept : this.state.Department,
        rat : this.state.Rating
    }
    this.state.EmpData.push(empObj);
    this.setState({
        EmpData : this.state.EmpData,
        Name : '',
        Department:'',
        Rating:'',
        Clicked : false
    })
}
toggleFunc = ()=>{
    this.setState({Clicked : !this.state.Clicked})
}

   render(){
    return(
        <>
          {this.state.Clicked
          ?

          <form>
                      <h1>Submisson Form</h1>

            <label htmlFor="name" className="Lname">Name</label>
          <input id="name" placeholder="Enter Name" type="text" name="Name" value={this.state.Name} onChange={this.handleChange}/><br/>

          <label htmlFor="dept" className="Ldept">Department</label>
          <input id="dept" placeholder="Enter Department" type="text" name="Department" value={this.state.Department} onChange={this.handleChange}/><br/>

          <label htmlFor="rat" className="Lrat">Rating</label>
          <input id="rat" placeholder="Enter Rating" type="number" name="Rating" value={this.state.Rating} onChange={this.handleChange}/><br/>
          <button type="button" onClick={this.handleClick} className="submit" >Submit</button>
          </form>
          :
          <Result value={this.state.EmpData} toggleFunc = {this.toggleFunc}/> }
    
        </>
    )
   }

}
export default Display