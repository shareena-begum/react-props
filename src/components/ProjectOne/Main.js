import React from "react";


function Main(){
    return (
        <div className="main-container">
            <div className="more-famous">
                <div className="card">
                    <h1 className="food-title">Indian food</h1>
                    <img className="food-image"
                    src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixid
                    =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&
                    ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="biryani_image"
                     />
                     <h4 className="subtitle">BIRYANI</h4>
                     <p> Description: Made with rice and indian spieces</p>
                     <p><small>Rating: 4.5/5</small></p>
                </div> 
                <div className="card">   
                    <h1 className="food-title" >Chinese food</h1>
                    <img className="food-image" src="https://images.unsplash.com/photo-1617622141675-d3005b9067c5?ixid=
                    MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&
                    auto=format&fit=crop&w=700&q=80"
                    alt="Chowmein" 
                    />
                    <h4 className="subtitle">Chowmein</h4>
                     <p> Description: Made with sphagati and chinese sauces</p>
                     <p><small>Rating: 4.1/5</small></p>
                </div>
            </div>

            <div className="less-famous">
                <div className="card">
                    <h1 className="food-title">Italian food</h1>
                    <img  className="food-image" src="https://images.unsplash.com/photo-1619895092538-128341789043?
                    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1
                    &auto=format&fit=crop&w=750&q=80" 
                    alt="lasagna"
                    />
                     <h4 className="subtitle">Lasagna</h4>
                     <p> Description: Made with lasagna pasta and tomato sauce</p>
                     <p><small>Rating: 4.3/5</small></p>
                </div>
                <div className="card">
                    <h1 className="food-title">Turkish</h1>
                    <img className="food-image" src="https://images.unsplash.com/photo-1561651823-34feb02250e4?ixid=
                    MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1
                    &auto=format&fit=crop&w=778&q=80" 
                    alt="Shawarma"
                    />
                    <h4 className="subtitle">Shawarma</h4>
                    <p> Description: Made with flat bread and grill kabab</p>
                    <p><small>Rating: 4.4/5</small></p>
                    {/* <a href= "#">Continue reading...</a>  */}
                </div>
            </div>
        </div>
    )
}


export default Main