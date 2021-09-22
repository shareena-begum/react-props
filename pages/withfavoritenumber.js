import React from "react"
import { WithFavoriteNumber } from "../src/components/HOC/WithFavoriteNumber"

function withfavoritenumber(props) {
    return(
        <div>{props.favoriteNumber}</div>
    )
}


export default WithFavoriteNumber(withfavoritenumber)