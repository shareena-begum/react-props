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
            <form>
                <label>Name:</label>
                <input 
                 type="text"
                 name="Full Name"
                 placeholder="full name"
                 />
            </form>
        )
    }
}

export default DairyForm