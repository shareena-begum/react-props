import React from "react"
import RenderProps from "../src/components/HOC/RenderProps"

function renderprops() {
  return (
      <div>
          <RenderProps name={function() {return <h1>Hey there</h1> }}  />
      </div>
  )
}


export default renderprops