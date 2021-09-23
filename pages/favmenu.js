import React from "react"
import Menu from "../src/components/HOC/Menu"
import Favorite from "../src/components/HOC/Favorite"

function favmenu() {
    return(
        <div>

            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}

export default favmenu