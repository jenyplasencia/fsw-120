import React from "react"
import ReactDOM from "react-dom"
import BlogPost from "./BlogPost"
import Button from "./Button"


function BlogList(){
return(
    <div>
        <BlogPost /> 
        <Button />
        <hr style={{color: "lightgrey"}} />
        
    </div>
)
}
ReactDOM.render(<BlogList />, document.getElementById("root") )
export default BlogList
