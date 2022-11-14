import React from "react";
 const Scroll =(props)=>{
    return(
        <div style={{overflow:'scroll', border:'solid 1px black', height:'500px',padding:'5px',margin:'2px'}}>
            {props.children}
        </div>
        
    )

 };
 export default Scroll