import React, {useState} from "react"

function hooks() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactData, setContactsData] = useState([])
    console.log("inputData")
    function handleChange(event) {

    }
    return (
        <form>
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