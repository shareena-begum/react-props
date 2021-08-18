// https://scrimba.com/g/greacthooks

import _ from "lodash"
import React from "react"
import randomcolor from "randomcolor"


class count extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0,
            color: "" 
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
        increment() {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1,
                    // color: randomcolor() 
                    // //in some complex conditions this logic gets duplicated so we used componentDidUpdate
                }
            })
        }

        decrement() {
            this.setState(prevState => {
                return {
                    count: prevState.count - 1,
                    // color: randomcolor()
                }
            })
        }

     componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()      
            this.setState({color: newColor})
         }
         
     } 


    render(){
        return (
            <div style={{textAlign: "center"}} >
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment} >Increment!</button>
                <button onClick={this.decrement} >Decrement!</button>
            </div>
        )
    }
}



export default count