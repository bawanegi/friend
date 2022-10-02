import React from "react";



const Seachbox =({Searchfield,Searchchange})=>{
    return (
        <div>
            <input  className="pa3 ma3 shadow-2 b5 b--blue   bg-lightest-blue" type='search' placeholder="Enter Name To search"
           onChange={Searchchange} ></input>
        </div>
    )
}
export default Seachbox;