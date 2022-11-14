import React from 'react';

function Card ({id,name,email}){
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 tc">
            <img alt='Robo img' src={`https://robohash.org/${id}`} width="100"/>
            <div>
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
        </div>
    );
}
export default Card;