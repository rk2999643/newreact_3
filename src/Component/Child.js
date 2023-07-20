import React from "react";

function Child(props) {
    console.log(props.item);
    return(
        <>
          <h1>Child Component</h1>
          {/* <h2>{props.Name}</h2>
          <h2>{props.Email}</h2>
          <h1>{props.value}</h1> */}
          <h1>{props.obj.map((item,index)=>{
            return (
                <h1>{item.Name}</h1>
            )
                          
          })}</h1>
        </>
    )
}
export default Child