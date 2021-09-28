import React from "react"

function RenderProps(props) {
    return (
        <div>
           {props.render(true)}
        </div> 
    ) 
}

export default RenderProps