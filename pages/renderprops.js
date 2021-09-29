import React from "react"
import RenderProps from "../src/components/HOC/RenderProps"

function renderprops() {
  return (
      <div>
          <RenderProps render={
            function(number) {
              return (
              <h1> {number >=0 ? "Positive" : "Negative"} </h1> 
              )
              }
            }/>
      </div>
  )
}


export default renderprops