import React from "react"

function Box(props) {
    return (
        <div style = {{backgroundColor: props.backgroundColor}}>
            
            <h3> Title: {props.title}       </h3>
            <h4> Subtitle: {props.subtitle}     </h4>
            <p> Information: {props.information}  </p>
            <hr/>
        </div>
    )
}

export default Box


