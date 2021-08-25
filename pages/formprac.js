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
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value, type, checked} = event.target
        type === "checkbox" ?  this.setState({ [name]: checked }) : this.setState({ [name]: value })
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

               <select 
                    vlaue={this.state.destination} 
                    name="destination" 
                    onChange={this.handleChange} >
                        <option value="">-- Please Choose a destinstion</option>
                        <option value="manali">Manali</option>
                        <option value="shimla">Shimla</option>
                        <option value="dehradun">Dehradun</option>
                        <option value="kerala">Kerala</option>
                        <option value="ooty">Ooty</option>
               </select>

               <br />

               <label>
                   <input 
                   type="checkbox"
                   name="isVegan"
                   onChange={this.handleChange}
                   checked={this.state.isVegan}
                   /> Vegan?
               </label>

               <br />

               <label>
                   <input 
                   type="checkbox"
                   name="isKosher"
                   onChange={this.handleChange}
                   checked={this.state.isKosher}
                   /> Kosher?
               </label>

               <br />

               <label>
                   <input 
                   type="checkbox"
                   name="isLactoseFree"
                   onChange={this.handleChange}
                   checked={this.state.isLactoseFree}
                   /> Lactose Free?
               </label>

               <br />















               <button>SUBMIT</button>
               
           </form>
           <hr />
               <h2>Entered Information:</h2>
               <p>Your name: {this.state.firstName} {this.state.lastName}</p>
               <p>Your age: {this.state.age}</p>
               <p>Your gender: {this.state.gender}</p>
               <p>Your destination: {this.state.destination}</p>
               <p>Your destination:</p>
               <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
               <p>Kosher: {this.state.isKosher  ? "Yes" : "No"}</p>
               <p>Lactose Free: {this.state.isLactoseFree  ? "Yes" : "No"}</p>
       </main>
    )
   }
}



export default formprac