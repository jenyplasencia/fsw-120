import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Main from "./Main"

function App(){
return(
    <div>
        <Header />
        <Main />
    </div>
)
}
ReactDOM.render(<App />, document.getElementById("root") )
export default App

