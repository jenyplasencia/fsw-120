import React from "react"

function Vacation(props) {
    const condition = props.timeToGo === "Spring"
    return (
        <div style={{ backgroundColor: condition ? "lightBlue": "white"}}>
        
            <h3 style={{color: "blue"}}> Place: {props.place} </h3>
            <p> Price: {props.price} </p>
            <p> Time to go: {props.timeToGo} </p>
            <hr/>
        </div>
    )
}

export default Vacation