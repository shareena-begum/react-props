import React, {useState} from "react"

function hooks() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData =>  ({...prevInputData, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContacts => [...prevContacts, inputData])
    }
    
    const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="First Name"
                name="firstName" 
                value= {inputData.firstName}
                onChange={handleChange}
                />

            <input
                placeholder="Last Name"
                name="lastName" 
                value= {inputData.lastName}
                onChange={handleChange}
                />
                <br />

                <button>Add Contact</button>
        </form>
        {contacts}
        </>
    )
}





// function hooks(){
//     const [count, setCount] = useState(0)

//     function increment() {
//         setCount(prevCount => prevCount + 1)
//     }

//     function decrement() {
//         setCount(prevCount => prevCount - 1)
//     }

//     return(
//         <div className="hooks">
//             <h1>{count}</h1>
//             <button onClick= {increment}>INCREMENT!</button> <br />
//             <button onClick= {decrement}>DECREMENT! </button>
//         </div>
//     )
// }


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