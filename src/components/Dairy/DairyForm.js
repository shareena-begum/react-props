import React, {Component} from "react"

class DairyForm extends Component {
    constructor(){
        super()
        this.state = {
            name: ""
            
        }
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
                <form>
                <label>Name:</label>
                <input 
                value={this.state.name}
                 type="text"
                 name="Full Name"
                 placeholder="full name"

                 />
                 <br />
                 <label>Email:</label>
                <input 
                 type="text"
                 name="Email id"
                 placeholder="email"
                 />
            </form>
            </div>
            
        )
    }
}

export default DairyForm