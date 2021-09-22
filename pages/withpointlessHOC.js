import React from "react"
import { withPointlessHOC } from "../src/components/HOC/withPointlessHOC"

function withpointlessHOC(props){
    return (
        <div>Hello Shanna!!!</div>
    )
}

const PointlessHOC = withPointlessHOC(withpointlessHOC)
export default PointlessHOC