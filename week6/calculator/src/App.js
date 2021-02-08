import React from "react"
import './App.css';
import Calculator from "./components/Calculator"

class App extends React.Component {
  constructor () {
    super()
    this.state = ({
      num1: "",
      num2: "",
      operator : ""
    })
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleClick(e){
    this.setState ({
      operator : e.target.id
    })
  }
  

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: Number(value)
    })
  }

  calc = () => {
    return (<Calculator id="calc" num1={this.state.num1} num2={this.state.num2} operator={this.state.operator}/>)    
  }
  
  render (){

    return (
      <div id="container">      
        <h1 id="head">Simple React Calculator</h1>

        <div id="forNumb1">
          <label>First Number</label>
          <input 
            required={true} 
            placeholder="First Number"
            onChange = {this.handleChange}
            name = "num1"
            value = {this.state.num1}
            type="number"
            >
          </input>
          <br>
          </br>
        </div>
        
        <div id="forNumb2">
          <label>Second Number</label>
          <input 
            required={true} 
            placeholder="Second Number"
            onChange = {this.handleChange}
            name = "num2" 
            value = {this.state.num2}    
            type="number"      
            >
          </input>
        </div>
        
        <div id="opera">
          <button onClick = {this.handleClick} id="add">Add</button>
          <button onClick = {this.handleClick} id="sub">Subtract</button>
          <button onClick = {this.handleClick} id="mul">Multiply</button>
          <button onClick = {this.handleClick} id="div">Divide</button>
        </div>
        
        
        
        {this.state.operator === "add" || this.state.operator === "sub" || this.state.operator === "mul" || this.state.operator === "div" ? 
        (this.calc()) : ""}
      </div>
    )      
  }
}

export default App;