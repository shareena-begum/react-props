import React, {Component} from "react"

class formprac extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: []

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
}
    render(){
    return(
       <main>
           <form>
               <input 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                    placeholder="First Name" 
                    />
               <br />
               <input 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                    placeholder="Last name" 
                    />
               <br />
               <input 
                    name="age" 
                    value={this.state.age} 
                    onChange={this.handleChange} 
                    placeholder="Age" 
                    />
               <br />
               <label>
                   <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
               </label>
               <br />

               <label>
                   <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
               </label>
               <br />















               <button>SUBMIT</button>
               
           </form>
           <hr />
               <h2>Entered Information:</h2>
               <p>Your name: {this.state.firstName} {this.state.lastName}</p>
               <p>Your age: {this.state.age}</p>
               <p>Your gender: {}</p>
               <p>Your destination: {}</p>
               <p>Your destination: {}</p>
       </main>
    )
   }
}



export default formprac