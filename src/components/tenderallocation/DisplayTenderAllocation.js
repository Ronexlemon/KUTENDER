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


    return <div className="card-container">

{props.bids.map((tender,index) =>(
     <div className='tenderCard' key= {tender.bidIndex} >
 {(tender.choice==1)?
 <div className='tenderCardHeader' id='tenderCardHeader'>
                     
                         
 <p><RiBuilding2Fill/><b> {tender.companyNames}</b></p>
 <p>{tender.contactAddress}</p>
 <h4>{tender.goodDealsWith}</h4>

 
 {/* <h4 style={{color:color?"green":"red"}}>{tender.choice==1?"Approved" :<h4 style={{color:color?"orange":"green"}}>Waiting</h4> }</h4> */}
 <div className='tenderCard-middle' id='tendercard-middle'>
                     <h5><GiRotaryPhone/>&nbsp;{tender.companyOfferTender}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.contactAddress} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.contactAddress}</h5>
                  </div>
                 
</div>
 :``}              
     </div>
               
  ))}
  


  </div>
};
export default DisplayTenderAllocation;