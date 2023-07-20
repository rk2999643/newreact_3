import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    const [data, setData] = useState([1,2,3,4,5])
    const [obj, setObj] =useState([
        {
            Name:"EA23"
        }

    ])
    return(
        <>
          <Child Name="Ratan" Email="Ratan@gmail.com"/>
          <Child value = {[data,setData]}/>
          <Child item = {{obj,setObj}}/>
          
        </>
    )
}
export default Parent