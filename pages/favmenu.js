import React from "react"
import Menu from "../src/components/HOC/Menu"

import Favorite from "../src/components/HOC/Favorite"
import Toggler from "../src/components/HOC/Toggler"

function favmenu() {
    return(
        <div>
            {/* we can in built component in toggler itself */}
            <Toggler defaultOnValue={true}  render = {({on, toggle}) => {
                return(
                 <Menu on={on} toggle={toggle} />
                )
            }
        }
            
            />

           
            <hr />
            <Favorite />
        </div>
    )
}

export default favmenu