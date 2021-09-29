import React, {Component} from "react"

// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }

    static defaultProps = {
        defaultOnValue: false
    } 

    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}))
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.on, this.toggle)}
            </div>
        )

    }
}

export default Toggler