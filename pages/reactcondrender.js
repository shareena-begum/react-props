import React from "react"
import Conditional from "../src/components/Conditional"

class reactcondrender extends React.Component {
    constructor(){
        super()
        this.state = {
          isLoading: true
        }   
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render(){
        return(
            <div>
                {this.state.isLoading ?  
                <h1>Shanna...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default reactcondrender