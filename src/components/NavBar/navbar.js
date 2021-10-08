import React from "react";

export default function NavBar() {
    let footerStyle = {
        position: "relative",
        // top: '15rem',
        display: 'flex',
        background:"red",
        margin: '0',
        top:"0",
        width: "100%"
}
    return(
        <div style={footerStyle}>
            <h1>GS:GrihSangini</h1>
        </div>
    )
}
