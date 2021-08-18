import React from "react"

function Conditional(props) {
     // condition ? statement if true : statement if false
     return(
         <div>
             {props.isLoading ? <h1>Shanna...</h1> : <h1>...is very beautiful and brilliant girl</h1>}
         </div>
        
     )    
}


export default Conditional