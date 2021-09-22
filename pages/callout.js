import React from "react"
import InfoCallout from "../src/components/ReactChildren/InfoCallout"
import ImageCallout from "../src/components/ReactChildren/ImageCallout"
import EmailCallout from "../src/components/ReactChildren/EmailCallout"

function callout (){
    return(
        <main>
            <h1>Welcome!</h1>
            <InfoCallout 
                header="Don't miss out!"
                body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!" 
            />
            
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            
            <ImageCallout 
                img={"https://picsum.photos/id/102/4320/3240"} 
                caption="Just look at those sparkling raspberries!"
            />
            
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            
            <EmailCallout 
                header="Give us your email. We definitely won't sell it to anyone." 
                btnText="Sign me up!" 
            />
            
        </main>
    )
}


export default callout