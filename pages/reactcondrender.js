import React from "react"
import Conditional from "../src/components/Conditional"

class reactcondrender extends React.Component {
    constructor(){
        super()
        this.state = {
        //   isLoading: true
        loading: false,
        character: {}
        }   
    }

    // componentDidMount(){
    //     setTimeout( () => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 1500)
    // }

    // render(){
    //     return(
    //         <div>
    //             {this.state.isLoading ?  
    //             <h1>Shanna...</h1> :
    //             <Conditional />}
    //         </div>
    //     )
    // }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data
            })
        })
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default reactcondrender