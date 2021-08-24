import React from 'react'

class form extends React.Component{
    constructor(){
        super()
        this.state = {
           firstName: "",
           lastName: ""
        }
        this.handlChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.value]: event.target.value
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
                type="text" vlaue={this.state.lastName} 
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