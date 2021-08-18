import React from "react"

function Conditional(props) {
    if(props.isLoading === true ){
        return (
            <h1>Shanna...</h1>
        )
    } else {
        return(
            <h1>...is very beautiful and brilliant girl</h1>
        )
    }
}


export default Conditional