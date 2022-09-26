import './tender_allocation.css';
import React, { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { RiBuilding2Fill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineDescription } from 'react-icons/md'
import { useNavigate } from "react-router-dom";



const DisplayTenderAllocation = (props) => {


  const [color, setColor] = useState(true);


  return <div className="tender-allocation-container">
    <h1 id='tenders-allocaation-page-h1'>Tender Allocation</h1>
    <hr id='horizontal-line' />
    {props.bids.map((tender, index) => (
      <div className='tender-allocation-card' key={tender.bidIndex} >

        {(tender.choice == 1) ?
          <div className='tender-allocation-card-header' id='tender-allocation-card-header'>

            <p className='tender-allocation-card-header-content'><RiBuilding2Fill /><b id='tenderee-name-allocation'> {tender.companyNames}</b></p>
  
            <p className='tender-allocation-card-header-content' id='tender-description'><MdOutlineDescription/> {tender.goodDealsWith}</p>
            <p className='tender-allocation-card-header-content' id='tenderee-contact-allocation'><AiOutlinePhone/> {tender.contactAddress}</p>

              <p className='tender-allocation-card-header-content' id='tenderer-name'><b> &ensp;&ensp; {tender.companyOfferTender}</b></p>
            
          </div>
          : ``}
      </div>

    ))}


  </div>
};
export default DisplayTenderAllocation;