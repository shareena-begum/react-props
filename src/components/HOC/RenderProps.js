import React from "react"

function RenderProps(props) {
    return (
        <div>
           {props.render(+36)}
        </div> 
    ) 
}

export default RenderProps