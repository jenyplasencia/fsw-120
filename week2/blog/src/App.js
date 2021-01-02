import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"

function App(){
return(
    <div>
        <Header />
        <BlogList />
        
        <Footer />
    </div>
)
}
ReactDOM.render(<App />, document.getElementById("root") )
export default App
