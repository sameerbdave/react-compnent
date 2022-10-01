import React from "react";
import OfferData from "./../offerData.json"

const Offers = (props) =>{
    {console.log(props);}
    return(
        <div className="container">
            <h1 className="text-center">Grab the exciting deals and offers with All Bank</h1>
            <div className="list-of-card">
                
                {
                    OfferData.map(offerdata =>{
                        return(
                            <div className="card-box" key={offerdata.id}>
                                <div className={`offers-card ${offerdata.bgstyle}`}>
                                    <h4 className="hd28">{offerdata.title}</h4>
                                    <p>{offerdata.description}</p>
                                    <img src={offerdata.image} alt={offerdata.caption} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Offers;