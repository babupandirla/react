import React,{useState, useEffect} from 'react';
function Hooks(){
    const [Count, SetCount] = useState(0);
    const onClikckevent=()=>{
        SetCount(Count +1);
    }
    useEffect(()=>{
        console.log("Use Effect called");
    })
    return( 
        <React.Fragment>
            <h1>
                Hook testing
            </h1>
            <h2>
                {Count}
            </h2>
            <button type='button' onClick={onClikckevent}>increment</button>
        </React.Fragment>   
    )
    
}
export default Hooks;
