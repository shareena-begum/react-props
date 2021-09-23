import React, {Component} from "react"

class DairyForm extends Component {
    constructor(){
        super()
        this.state = {
            fullname: "",
            emailId: "",
            experienced: false,
            gender: "",
            experience: "Above 5 years"
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    }
    render() {
        return(
            <div>
                <h4>Registration Form:</h4>
                <p>Wants to share your knowledge of diary farming, then your just a 
                    step back to get yourself into the world of S.M. Dairy Farm. 
                    Before you register read the following requirements</p>
                <ul>
                    <li>Can communicate with cows, buffaloes, sheeps</li>
                    <li>Can wash and clean them</li>
                    <li>Can squeeze the milk</li>
                    <li>Can make food for animals</li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input
                 type="text"
                 value={this.state.fullname}
                 onChange={this.handleChange}
                 placeholder="Full Name"

                 />
                 <br />
                 <label>Email:</label>
                <input 
                 type="text"
                 value={this.state.emailId}
                 placeholder="Email Id"
                 onChange={this.handleChange}
                 />

                 <br />
                   <label>
                 <input 
                 type= "checkbox"
                 name="experienced"
                 checked={this.state.experienced}
                 onChange={this.handleChange}
                 /> Experienced in a nimal husbandry
                    </label> 
                 <br />

                 <label>For How Many Years:</label>
                 <select
                 value={this.state.experience}
                 onChange={this.handleChange}
                 name="experience"
                 >
                     <option value="below 1 year">Below 1 Year</option>
                     <option value="1-5 years">1-5 Years</option>
                     <option value="above 5 years">Above 5 Years</option>
                 </select>

                 <br />

                 <label> 
                 <input 
                 type= "radio"
                 name="gender"
                 value="male"
                 checked={this.state.gender === "male"}
                 onChange={this.handleChange}
                 />Male
                 </label> 

                 <label> 
                 <input 
                 type= "radio"
                 name="gender"
                 value="female"
                 checked={this.state.gender === "female"}
                 onChange={this.handleChange}
                 />Female
                </label> 

                <br />

                <button>Submit</button>

            </form>
            </div>
            
        )
    }
}

export default DairyForm