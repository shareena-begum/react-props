import React from "react"

function FormComponent(props) {
    return(
        <main>
            <form>
                <input 
                     name="firstName" 
                     value={props.data.firstName} 
                     onChange={props.handleChange} 
                     placeholder="First Name" 
                     />
                <br/>
                <input 
                     name="lastName" 
                     value={props.data.lastName} 
                     onChange={props.handleChange} 
                     placeholder="Last name" 
                     />
                <br />
                <input 
                     name="age" 
                     value={props.data.age} 
                     onChange={props.handleChange} 
                     placeholder="Age" 
                     />
                <br />
                <label>
                    <input 
                         type="radio"
                         name="gender"
                         value="male"
                         checked={props.data.gender === "male"}
                         onChange={props.handleChange}
                     /> Male
                </label>
                <br />
 
                <label>
                    <input 
                         type="radio"
                         name="gender"
                         value="female"
                         checked={props.data.gender === "female"}
                         onChange={props.handleChange}
                     /> Female
                </label>
                <br />
 
                <select 
                     vlaue={props.data.destination} 
                     name="destination" 
                     onChange={props.handleChange} >
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
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                    /> Vegan?
                </label>
 
                <br />
 
                <label>
                    <input 
                    type="checkbox"
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                    /> Kosher?
                </label>
 
                <br />
 
                <label>
                    <input 
                    type="checkbox"
                    name="isLactoseFree"
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
 
                <br />
 
                <button>SUBMIT</button>
                
            </form>
            <hr />
                <h2>Entered Information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>Your destination:</p>
                <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {props.data.isKosher  ? "Yes" : "No"}</p>
                <p>Lactose Free: {props.data.isLactoseFree  ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent
