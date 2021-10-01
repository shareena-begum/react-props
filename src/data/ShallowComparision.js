// ===
// Primitive types (strings, numbers, booleans)
// console.log("Hi" === "Hi") ——— true

// Complex types (array, object)
// console.log({name: "Joe"} === {name: "Joe"}) ——— false

// const arr1 = [1, 2, 3, [4]]
// const arr2 = [1, 2, 3, [4]] multiple array console.log false. If single array as

// const arr1 = [1, 2, 3]
// const arr2 = [1, 2, 3] console.log is true 


const state = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

const state2 = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

// console.log(state.favNumber === state2.favNumber) true
// console.log(state.name === state2.name)  true
// console.log(state.address === state2.address) false ---- variable in turn is holding another variable.

// const person = {
//     name: "Sarah"
// }

// const anotherPerson = {
//     name: "Sarah"
// }

// console.log(anotherPerson === person) it's false that it carries another string. But if condition if one carries string
// and naed with another names as

// const anotherPerson === person; then the value wil be true


// shouldComponentUpdate ()
// 1. Lifecycle methods on class components
// 2. Allow you to determine should component update or not.
// 3. recieves the upcoming props and state so you can compare them against current props and state.
// 4. return true for yes, and false for no
// Don't do deep equality checks in here
