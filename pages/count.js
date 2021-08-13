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
    }
        increment() {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }

        componentDidUpdate() {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment} >Increment!</button>
            </div>
        )
    }
}



export default count