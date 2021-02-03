import React from "react"
import Die from "./Die"

let box = document.getElementById("box")
let counter = 0;
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")

class DiceBox extends React.Component {
  constructor (){
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(){
    counter += 1;
    
    if (counter <= 3){      
          this.setState((prevState) => {   
                  return (                    
                  prevState.num1 = Math.floor(Math.random()*6+1),                
                  prevState.num2 = Math.floor(Math.random()*6+1),                
                  prevState.num3 = Math.floor(Math.random()*6+1),                
                  prevState.num4 = Math.floor(Math.random()*6+1),                
                  prevState.num5 = Math.floor(Math.random()*6+1)
                  ) 
                }
          )
      
    } else if(counter > 3){
      counter = 0;
            this.setState((prevState) => {   
              return (
              prevState.num1 = 0,            
              prevState.num2 = 0,            
              prevState.num3 = 0,            
              prevState.num4 = 0,            
              prevState.num5 = 0
              )  
            }
      )
    }
  }
              
  

  render(){
      return (
        
            <div style={{textAlign:"center", backgroundColor:"lightblue" }}>
            <h1>Press button to Start rolling the dice!</h1>
            <Die id="box1" handleClick={this.handleClick} num={this.state.num1}/>
            <Die id="box2" handleClick={this.handleClick} num={this.state.num2}/>
            <Die id="box3" handleClick={this.handleClick} num={this.state.num3}/>
            <Die id="box4" handleClick={this.handleClick} num={this.state.num4}/>
            <Die id="box5" handleClick={this.handleClick} num={this.state.num5}/>
            <button onClick={this.handleClick}>Click here!</button>
            </div>
        
      )    
  }    
}
export default DiceBox