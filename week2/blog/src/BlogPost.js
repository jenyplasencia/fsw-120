import React from "react"


function BlogPost() {
    let blogData = [
        {
          
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2019"

        }, {

           
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subTitle: "",
            author: "Start Bootstrap",
            date: "September 18, 2019"

        }, {
            
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2019"

        }, {
            
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap",
            date: "July 8, 2019"

        }

    ]
    let arr = blogData.map(function (props){
        
       return (
        
            <div className ="blogpost">
                <h3 style ={{fontSize: 20}}> {props.title} </h3>
                <p style ={{fontSize: 14}}>  {props.subTitle} </p>
                <p style ={{fontSize: 10}}> Posted by {props.author} on {props.date} </p>
                <br/>
                <p style = {{color: "lightgrey"}}> ________________________________________________________ </p>

            </div>

            
        )
        
    });
        
    return (
          <div>
               {arr}
        </div>

        )
    }



export default BlogPost
