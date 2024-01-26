import React from "react";

function Image(props) {
    return ( 
       <img src={props.imageUrl} alt={props.alt} /> 
    )
}

export default Image;