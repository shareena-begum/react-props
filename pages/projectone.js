import React, {Component} from "react"
import Header from "../src/components/ProjectOne/Header"
import Main from "../src/components/ProjectOne/Main"
import Footer from "../src/components/ProjectOne/Footer"

class projectone extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }


       
    
    render() {
        return (
            <div className="container ">
               <Header />
               <Main />
            </div>
        )
    }
}





export default projectone