import React from "react"
import './App.css';
import List from "./components/List"

class App extends React.Component {
  constructor(){
    super ()
    this.state = {
      name: "",
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    event.preventDefault();
  }

  handleClick(event){
    this.setState(prevState => ({
        list: [...prevState.list, this.state.name]
      })
    )
    event.preventDefault();
    console.log(this.state.list)
  }
 
  render(){
    const people = this.state.list.map(x => <List name={x}/>)
    return (
      <div>
        <form>
          <br></br>
          <input id="inputField" type="text" name="name" placeholder="Enter Name" onChange={this.handleChange}/>
          <br></br>
          <br></br>
          <button onClick={this.handleClick}>Submit Name</button>
          <h1>{this.state.name}</h1>
          {people}
        </form>
      </div>
    )
  } 
}

export default App;