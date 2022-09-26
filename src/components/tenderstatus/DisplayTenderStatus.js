import React, { useState } from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiBuilding2Fill } from 'react-icons/ri';
import { MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import { MdOutlineDescription } from 'react-icons/md'



const DisplayTenderStatus = (props) => {


  const [color, setColor] = useState(true);


  return <div className="tender-status-card-container">
    <h1 className='tender-status-h1'>Tender Status</h1>
    <hr id='horizontal-line' />
    {props.bids.map((tender, index) => (
      <div className='tender-status-card' key={tender.bidIndex} >
        <div className='tender-status-card-body'>


          <p id='company-name-status'><RiBuilding2Fill /><b> {tender.companyNames}</b></p>
          <p id='goods-dealt-status'><MdOutlineDescription/> {tender.goodDealsWith}</p>
          <p id='company-offer-tender-status'><b id='tenderer-tag'>Tenderer: </b>{tender.companyOfferTender}</p>

         <div className='tender-status-div'> 
          <p id='status' style={{ color: color ? "black" : "black" }}>Status: {tender.choice == 1 ? <p id='approved' style={{ color: color ? "green" : "orange" }}>Approved</p> : <p id='waiting' style={{ color: color ? "orange" : "green" }}>Waiting</p>}</p>
        </div>
        </div>
          
   
      </div>

    ))}

  </div>
};
export default DisplayTenderStatus;