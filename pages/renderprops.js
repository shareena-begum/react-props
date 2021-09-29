import React from "react"
import RenderProps from "../src/components/HOC/RenderProps"

function renderprops() {
  return (
      <div>
          <RenderProps render={
            function(isDaytime) {
              return (
              <h1> {isDaytime ? "Good Day" : "Good Night"} </h1> 
              )
              }
            }/>
      </div>
  )
}


export default renderprops