import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

// function hooks() {
//     const [inputData, setInputData] = useState({firstName: "", lastName: "", checked: "male", checked: "female" })
//     const [contactsData, setContactsData] = useState([])
    
//     function handleChange(event) {
//         const {name, value, checked} = event.target
//         setInputData(prevInputData =>  ({...prevInputData, [name]: value}))
//     }

//     function handleSubmit(event) {
//         event.preventDefault()
//         setContactsData(prevContacts => [...prevContacts, inputData])
//     }
    
//     const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             <input
//                 placeholder="First Name"
//                 name="firstName" 
//                 value= {inputData.firstName}
//                 onChange={handleChange}
//                 />
//                 <br/>

//             <input
//                 placeholder="Last Name"
//                 name="lastName" 
//                 value= {inputData.lastName}
//                 onChange={handleChange}
//                 />
//                 <br />
//                 <label>
//                 <input
//                     type="radio"
//                     name="gender"
//                     value="male"
//                     checked={inputData.male} 
//                     onChange={handleChange}
//                     /> Male
//             </label>  
//              <br/>
//             <label>
//                 <input
//                     type="radio"
//                     name="gender"
//                     value="female"
//                     checked={inputData.female} 
//                     onChange={handleChange}
//                     /> Female
//             </label> 
//             <br />

//                 <button>Add Contact</button>
//         </form>
//         {contacts}
//         </>
//     )
// }

// componentDidMount
// componentDidUpdate
// componentWillUnmount: useEffect replaces these three lifecycle methods



function hooks() {
const [count, setCount] = useState(0)
const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect ( () => {
        setColor(randomcolor())
    }, [count])

    return(
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>INCREMENT</button> <br/>
            <button onClick={decrement}>DECREMENT</button>
        </div>
    )
}





// function hooks() {
//     const [answer] = useState("Shanna")
//     console.log("answer")
//     return(
//         <div>
//             <h3>Who is the most beautiful girl in the world? {answer}</h3>
//         </div>
//     )
// }



export default hooks