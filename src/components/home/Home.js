import "./home_module.css";
import { useNavigate } from "react-router-dom";
import React from 'react';
import "./home_module.css";
import { Logo } from './Logo.js';
import { TiTick } from 'react-icons/ti';
import { FaClipboardList } from 'react-icons/fa';

const Home = (props) => {
    const navigate = useNavigate();
    
    return (
        <div className="home">
            <div className="navBar" >
                <div className="logo">
                    <Logo />

                </div>

            </div>


            <div className="firstPage">
                <div id="appExplanation" className="PoppinsFont">
                    <div className="explanationContent">

                        <div id="kutenderDescription" >
                            <h1>KUTENDER is the easiest way to advertise and apply for tenders </h1>
                        </div>
                    </div>
                    <div id="border-line"></div>
                    <div className="explanationBottom" >
                        <div id="explanationBottomContent">
                            <p>Kutender is a blockchain based application that makes it easy to advertise and
                                apply for tenders with the highest level of transparency.</p>
                        </div>
                    </div>


                </div>
            </div>
            <div id="secondPage" className="PoppinsFont">
                <div className="sideBar">
                    <div className="available-tenders-post-tender">
                        <div className="Tender">
                            <div className="Navigation">
                                <h5 id="TenderHeaderContent">Find all the listed tenders here.</h5>
                                <div id="TenderMiddleLine"></div>
                                <button className="btns" onClick={() => navigate('/AvailableTenders')}>Available Tenders</button>
                            </div>

                        </div>
                        <div className="Tender">
                            <div className="Navigation">
                                <h5>Want a tender advertised?</h5>
                                <div id="TenderMiddleLine"></div>
                                <button onClick={() => navigate("/Tenders")} className="btns">Post Tenders</button>
                            </div>

                        </div>
                    </div>
                    <div className="tender-allocation-application-status">
                        <div className="Tender">
                            <div className="Navigation">
                                <h5>View who was allocated a tender</h5>
                                <div id="TenderMiddleLine"></div>
                                <button onClick={() => navigate("/TenderAllocation")} className="btns">Tender Allocation</button>
                            </div>
                        </div>
                        <div className="Tender">
                            <div className="Navigation">
                                <h5>Track your tender application</h5>
                                <div id="TenderMiddleLine"></div>
                                <button onClick={() => navigate("/TenderStatus")} className="btns">Application Status</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Approve-tender" className="PoppinsFont">
                        <div className="Approve-Navigation">
                            <h1 className="ApproveNavigationContent">Tender Approval </h1>
                        </div>
                        
                        <div className="Approve-tender-bottom">
                            <div className="Approve-tender-bottom-content">
                                <p><FaClipboardList/> View all the bids made on a tender you advertised.<br/>&ensp;<TiTick/>Select the winning bid </p>
                            </div>
            
                            <div className="Approve-tender-bottom-button">
                                <button className="btns" id="Approve-tender-bottom-button-button" onClick={() => navigate("/approve")}>Approve</button>
                            </div>
                        </div>
                </div>

                <div className="about">
                    <div className="logo">
                        <Logo />
                    </div>
                    <ul id="aboutList">
                        <p>About us</p>
                        <p>Help</p>
                        <p>Contact us</p>
                    </ul>
                </div>



            </div>


        </div>
    )

}


export default Home;