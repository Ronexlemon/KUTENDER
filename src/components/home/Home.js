
import "./home_module.css";
import { useNavigate } from "react-router-dom";


import React from 'react';
import "./home_module.css";

const Home = (props) => {
    const navigate = useNavigate();


    return (
        <>
            <div className="home">
                <div className="logo">
                    <img src="" alt="logo" />
                    <h1>logo</h1>

                </div>
                <div className="sideBar">
                    <div className="Tender">
                        <div className="Navigation">
                            <h5>Find all the listed tenders here.</h5>

                            <button className="btns" onClick={() => navigate('/AvailableTenders')}>Available Tenders</button>

                        </div>

                    </div>
                    <div className="Tender">
                        <div className="Navigation">
                            <h5>Want a tender advertised?</h5>
                            <button className="btns" onClick={() => navigate("/Tenders")}>Post Tenders</button>
                        </div>

                    </div>
                    <div className="Tender">
                        <div className="Navigation">
                            <h5>View who was allocated a tender</h5>
                            <button className="btns">Tender Allocation</button>
                        </div>
                    </div>
                    <div className="Tender">
                        <div className="Navigation">
                            <h5>Track your tender application</h5>

                            <button className="btns">Application Status</button>

                        </div>
                    </div>
                    <div className="Tender">
                        <div className="Navigation">
                            <h5>Approve Tenders </h5>

                            <button className="btns" onClick={() => navigate("/approve")}>Approve</button>




                        </div>
                    </div>
                </div>
                <div className="aboutApp">
                    <div className="appExplanation">
                        <h1>KUTENDER is the easiest way to advertise and apply for tenders </h1>

                    </div>
                    <div className="about">
                        <h2>About Us.</h2>

                        <ul className="aboutList">
                            <li>
                                Kutender
                            </li>
                            <li>
                                Nairobi Kenya
                            </li>
                            <li>
                                +254701707772
                            </li>
                        </ul>
                    </div>

                </div>



            </div>
        </>
    )
}


export default Home;