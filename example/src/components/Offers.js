import React from "react";
import offerImg1 from "./../images/offers/offer-1.png"
import offerImg2 from "./../images/offers/offer-2.png"
import offerImg3 from "./../images/offers/offer-3.png"
import offerImg4 from "./../images/offers/offer-4.png"
import offerImg5 from "./../images/offers/offer-5.png"
import offerImg6 from "./../images/offers/offer-6.png"
import offerImg7 from "./../images/offers/offer-7.png"
import offerImg8 from "./../images/offers/offer-8.png"
import offerImg9 from "./../images/offers/offer-9.png"

import OfferData from "./offerData.json";

const Offers = () =>{
    return(
        <div className="container">
            <h1 className="text-center">Grab the exciting deals and offers with All Bank</h1>
            <div className="list-of-card">
                {
                    OfferData.map(offerdata =>{
                        return(
                            <div className="card-box" key={offerdata.id}>
                                <div className="offers-card op1">
                                    <h4 className="hd28">{offerdata.title}</h4>
                                    <p>{offerdata.description}</p>
                                    <img src={offerdata.image} alt={offerdata.caption} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="list-of-card">
                
                <div className="card-box">
                    <div className="offers-card op1">
                        <h4 className="hd28">Shopping</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg1} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op2">
                        <h4 className="hd28">Travel</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg2} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op3">
                        <h4 className="hd28">Shopping</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg3} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op4">
                        <h4 className="hd28">Dining</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg4} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op5">
                        <h4 className="hd28">Entertainment</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg5} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op6">
                        <h4 className="hd28">Education</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg6} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op7">
                        <h4 className="hd28">Amazon</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg7} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op8">
                        <h4 className="hd28">FlipKart</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg8} />
                    </div>
                </div>
                <div className="card-box">
                    <div className="offers-card op9">
                        <h4 className="hd28">FlipKart</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        <img src={offerImg9} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;