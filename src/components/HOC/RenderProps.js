import React from "react"

function RenderProps(props) {
    return (
        <div>
           {props.render(true, 36)}
        </div> 
    ) 
}

export default RenderProps