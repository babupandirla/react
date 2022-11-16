import React from 'react';
import Card from './card.js'
function Cardlist({robots}){
    // if(true){
    //     throw new Error("Nooooo");
    // }
    const cardcomponent=robots.map((user,i)=>{
    return (<Card key={i}
    id={robots[i].id} 
    name={robots[i].name} 
    email={robots[i].email}
    />) 
    })
    return(
        <div>
            {cardcomponent}
        </div>

    );
}
export default Cardlist;