import React from "react"

export function WithFavoriteNumber(Component) {
    return function(props) {
        return (
            <Component favoriteNumber={36} {...props} />
        )
    }
}