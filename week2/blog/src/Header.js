import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import "./style.css"
function Header(){
    return (
        <div className = "head">
            <Navbar />
            <h1 className ="clean-blog"> Clean Blog</h1>
            <p className = "blog-theme"> A Blog Theme by Start Botstrap</p>
        </div>
        )
}
ReactDOM.render( <Header />, document.getElementById("root"))
export default Header
