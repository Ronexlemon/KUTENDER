import React, { useState } from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiBuilding2Fill} from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import{ MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";



 const DisplayBids =(props) =>{


  const [color,setColor] = useState(true);

  
    return <div className="card-container">

{props.bids.map((tender,index) =>(
     <div className='tenderCard' key= {tender.bidIndex} >
                  <div className='tenderCardHeader' id='tenderCardHeader'>
                     
                         
                             <p><RiBuilding2Fill/><b> {tender.companyNames}</b></p>
                             <p>{tender.contactAddress}</p>
                             <h4>{tender.goodDealsWith}</h4>

                             
                             <h4 style={{color:color?"green":"red"}}>{tender.choice==1?"Approved" :"Waiting" }</h4>
                           
                 </div>
                 <div className='tenderCard-middle' id='tendercard-middle'>
                     <h5><GiRotaryPhone/>&nbsp;{tender.companyOfferTender}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.contactAddress} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.contactAddress}</h5>
                  </div>
                 <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
                  
                     
                     <button className='btn-aprove' onClick={()=>props.approve(index)}>Approve</button>
                     <button className="deletebtn" ><BsTrash/></button>
                  </div>
                 
     
              </div>
               
  ))}

</div>
};
export default DisplayBids;