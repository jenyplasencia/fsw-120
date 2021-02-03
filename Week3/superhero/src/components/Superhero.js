import React from "react"

function SuperHero(props) {
        return (
          <div style={{backgroundColor: "light blue", textAlign: "center", padding: "20px", margin: "7px"}}>
            <img onClick={() => props.handleClick(props.catchPhrase)}src={props.imageName} style={{width: "200px", height: "200px"}}/>
            <h2 onClick={() => props.handleClick(props.catchPhrase)}>{props.name}</h2>
            <h4>List if the shows: {props.show}</h4>
          </div>
        )  
}

export default SuperHero;