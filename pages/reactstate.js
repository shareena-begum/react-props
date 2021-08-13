import React from "react"

// // Given a stateless functional component, add state to it
// // state should have a property called `isLoggedIn` which is a boolean
// // (true if logged in, false if not)
// // Then, give your best shot at rendering the word "in" if the user is logged in
// // or "out" if the user is logged out.

// class Reactstate extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn: true
//         }
//     }
//     render(){
//         let wordDisplay
//         if(this.state.isLoggedIn === true){
//           wordDisplay = "in"  
//         } else{
//           wordDisplay = "out"
//         }
//         return(
//             <div>
//                 <h1>You are currently logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }

// function handleClick(){
//     console.log("I was clicked!")
// }

// function Reactstate(){
//     return(
//         <div>
//             <img onMouseOver={() => console.log("Hovered!")}
//              src="https://www.fillmurray.com/300/200" />
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }

class Reactstate extends React.Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
       this.setState(prevState => {
           return {
               count: prevState.count + 1
           }
       }) 
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
   
}














export default Reactstate