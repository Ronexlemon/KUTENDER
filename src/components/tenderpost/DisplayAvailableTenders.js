import React, { useState } from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiBuilding2Fill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";



const DisplayTenders = (props) => {
  const navigate = useNavigate();

  return <div className="card-container">
    <h1 id='available-tenders-page-h1'>Available Tenders</h1>
    <hr id='horizontal-line' />
    {props.tenders.map((tender, index) => (
      <div className='tenderCard' key={tender.tenderindexs} >
        <div className='tenderCardHeader' id='tenderCardHeader'>
          <div className="tenderCardHeader-blank"></div>
          <div className="tenderCardHeader-content">

            <h4 id='company-name'><RiBuilding2Fill /> &nbsp;{tender.companyNames}</h4>
            <p id='tender-description' className='tender-amount-description-p'>{tender.tenderDescriptions}</p>
            <p id='tender-amount' className='tender-amount-description-p'>Tender worth: {tender.tenderAmounts / 1}</p>
          </div>
        </div>
        <div className='tenderCard-middle' id='tendercard-middle'>
          <h5><HiOutlineMail />&nbsp;{tender.contactEmails}&emsp;&emsp;&emsp;&emsp;<MdDateRange />&nbsp;{tender.deadlineDates} </h5>
        </div>
        <div className='bid-btn' id='bid-btn-approve-btn'>

          <button className='btn-bid' onClick={() => navigate('/BiderForm', { state: { id: index } })} id='btn-bid' >BID</button>

        </div>


      </div>

    ))}

  </div>

};


//     const navigate = useNavigate();

//     return tenders.map(tender => (

//         <div className='tenderCard' key ={tender.contact}>
//             <div className='tenderCardHeader' id='tenderCardHeader'>


//                         <p><RiBuilding2Fill/><b> {tender.companyName}</b></p>
//                         <p>{tender.description}</p>
//                         <h4>{tender.amount}</h4>

//             </div>
//             <div className='tenderCard-middle' id='tendercard-middle'>
//                 <h5><GiRotaryPhone/>&nbsp;{tender.contact}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.deadline} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.email}</h5>
//             </div>
//             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
//                 <button className='btn-bid' id='btn-bid' onClick={ () =>navigate("/BiderForm")}>BID</button>
//                 <button className='btn-aprove'>Approve</button>
//                 <button className="deletebtn" onClick={()=> deleteTender(tender.contact)}><BsTrash/></button>
//             </div>


//         </div>

//      ))

//   }
export default DisplayTenders;