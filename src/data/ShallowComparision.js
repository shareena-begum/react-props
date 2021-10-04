// ===
// Primitive types (strings, numbers, booleans)
// console.log("Hi" === "Hi") ——— true

const { Component, PureComponent } = require("react")

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


// React.PureComponent
// 1. Alternative to React.Component
// 2. Automatically implements shouldcomponentupdate() for shallow props and state comparisons
// 3. Disallows using shouldcomponentupdate() manually
// 4. Skips rendering all children in the tree suromatically, so they mus be 'pure' as well
// 5. Generally preferred over shouldcomponentupdate()

// React.memo ()
// 1. Higher-order Component built by React
// 2.pretty much the same as PureComponent, but for functional components
// 3. it only compare prevprops and nextprops (no state checking)
// you can optionally implement your own checking function to determine if it should use the memorized result
// => the function is kind of like shouldcomponentupdate(), except it should return true if the props are equal and false if they aren't. 
// this effectively the opposite approach of shouldcomponentupdate, which returns true if component should re-render (i.e., props are different)





