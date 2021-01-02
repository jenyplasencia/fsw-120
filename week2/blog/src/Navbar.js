import React from "react"
//import ReactDOM from "react-dom"
function Navbar(){
    return (
        <div>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#news">ABOUT</a></li>
                <li><a href="#about">SAMPLE POST</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
        )
}
//ReactDOM.render( <Navbar />, document.getElementById("root"))
export default Navbar