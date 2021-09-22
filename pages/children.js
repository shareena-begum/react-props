import React from "react"
import CTA from "../src/components/ReactChildren/CTA"

function children(){
    return(
    <div>
        <CTA> 
            <h1>This is an important CTA</h1>
            <button>Click me now or you'll miss out!</button>
        </CTA>

        <CTA>
            <input type="email" placeholder="Enter email address here"/>
            <br />
            <button>Submit</button>
        </CTA>
    </div>
    )
}


export default children