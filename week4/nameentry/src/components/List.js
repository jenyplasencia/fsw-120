import React from "react"

function List (props) {
  return (
    <div>
      <ol>
        <li>{props.name}</li>
      </ol>
    </div>
  )
}

export default List