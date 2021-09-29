import React from "react"
import RenderProps from "../src/components/HOC/RenderProps"

function renderprops() {
  return (
    <div>
      <RenderProps url="https://swapi.dev/api/people/1">
        {({data, loading}) => {
          return (
            loading?
            <h1>Loading...</h1> :
            <p>{JSON.stringify(data)}</p>
          )
        }}
      </RenderProps>
    </div>
  )
}



// function renderprops() {
//   return (
//       <div>
//           <RenderProps render={
//             function(bool, number) {
//               return (
//                 <div>
//                   <h1> {number} </h1>
//                   <h1> {bool ? "true" : "false"} </h1>
//                 </div>
//               )
//             }
//             }/>
//       </div>
//   )
// }


export default renderprops

{/**
                 * Part 2: Call the function the DataFetcher is expecting.
                 * If should receive the data and the loading state, and return the JSX
                 * that makes use of that info. If the data is still loading, display
                 * "Loading..." in an h1 element, and once the data has loaded, just display 
                 * the data with `<p>{JSON.stringify(data)}</p>`
                 * 
                 * Remember: With the render props pattern, you can use a custom prop
                 * (typically called `render`), OR you can use `props.children`. Based
                 * on what's already written here for you, you should be able to figure
                 * out which of these we're using. (You may have to make changes to the
                 * DataFetcher component based on what you see here.)
                 */}