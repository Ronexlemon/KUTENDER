import React, { useState, useEffect } from 'react';
import './approve.css';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiBuilding2Fill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";




const DisplayBids = (props) => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, []);


  const [color, setColor] = useState(true);


  return <div className="approve-tender-main-page">
    <div className='approve-card-container'>
    {props.bids.map((tender, index) => (
      <div>
        {(tender.choice === 0)?
      <div className='approve-container' key={tender.bidIndex} >
        
        <div className='approve-container-tenderee' id='approve-container-tenderee'>
        <div className="approveCardHeader-blank"></div>
        <div className='approve-container-tenderee-content'>
          <p id='company-name'><RiBuilding2Fill /> <b> {tender.companyNames}</b></p>
          <p id='documents-link'><b id='documents-tag'>Documents: </b><a href={tender.goodDealsWith} target="_blank">link</a></p>
          <p id='tenderee-contact'><GiRotaryPhone />  {tender.contactAddress}</p>
          
          <p className='approval-status' style={{ color: color ? "green" : "red" }}> {tender.choice == 1 ? "Approved" : <p  style={{ color: color ? "orange" : "green" }}> Waiting</p>}</p>
        </div>
        </div>
        <div className='tenderer-div' id='tenderer-div'>
          <p id='tenderer-name'><b id='tenderer-tag'>Tenderer: </b>{tender.companyOfferTender}</p>
        </div>

        <div className='approve-btn-div' id='approve-btn-div'>

          <button className='approve-btn' onClick={() => props.approve(index)}>Approve</button>
          {/* <button className="deletebtn" ><BsTrash /></button> */}

        </div>


      </div>
      :``}
      </div>
  
    ))}
  </div>
  </div>
};
export default DisplayBids;