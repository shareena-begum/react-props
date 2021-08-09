import React from "react"

class Reactstate extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "shanna"
        }
    }
    render(){
        return(
            <div>
                <h1>What's your name?{this.state.name}</h1>
            </div>
        )
    }
}

export default Reactstate