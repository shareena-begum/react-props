import React from "react"
import RenderProps from "../src/components/HOC/RenderProps"

function renderprops() {
  return (
      <div>
          <RenderProps render={
            function(bool, number) {
              return (
                <div>
                  <h1> {number} </h1>
                  <h1> {bool ? "true" : "false"} </h1>
                </div>
              )
            }
            }/>
      </div>
  )
}


export default renderprops