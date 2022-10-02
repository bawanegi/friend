import React from "react";
import Card from './card';

const Cardlist =({robots})=>{
    const cardarray =robots.map(
    (user ,i )=>{
        return (<Card  key={i} id={robots[i].id } name={robots[i].name} email={robots[i].email}>
       </Card>)
    }
    )
return(

<div className="tc ">
    {cardarray}
    </div>
) ;
}
export default Cardlist;