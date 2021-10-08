import React from "react";
import './upperbody.css'
import background from '../assets/images/background.png'

export default function UpperBody() {
    let upperbodyStyle = {
        margin: '0px',
        position: "absolute",
        width: "100%",
        height: '40vh',
}
    return(
        <div style={upperbodyStyle} >
            <img src={background}></img>
        </div>
    )
}
