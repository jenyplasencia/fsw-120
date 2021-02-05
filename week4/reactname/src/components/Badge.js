import React from "react"

function Badge (props) {
  return (
    <div id="badge">
      <h1>Badge</h1>
      <input id="firstName" value={props.firstName}/>
      <input id="lastName" value={props.lastName}/>
      <input id="phone" value={props.phone}/>
      <input id="email" value={props.email}/>
      <input id="favFood" value={props.favFood}/>
      <textarea id="description" value = {props.description}/>
      <input id="pob" value={props.pob}/>
    </div>
  )
}

export default Badge;