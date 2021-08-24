import React, {Component} from 'react'

class form extends Component{
    constructor() {
        super()
        this.state = {
           firstName: "",
           lastName: ""
        }
        this.handlChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    render() { 
     return(
        <form>
            <input 
                type="text" 
                vlaue={this.state.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={this.handleChange} 
                /> 
                <br/>
            <input 
                type="text" 
                vlaue={this.state.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.handleChange} 
                />
            <h1>{this.state.firstName} {this.state.lastName}</h1>
        </form>
    )
  }
}


export default form