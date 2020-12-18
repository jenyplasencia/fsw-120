import React from "react"
import ReactDOM from "react-dom"
function Header(){
    return (
        <div>
            <h1> My Todo List</h1>
            <p> Girl!!! ... You need work to do!</p>
        </div>
        )
}
ReactDOM.render( <Header />, document.getElementById("root"))
export default Header