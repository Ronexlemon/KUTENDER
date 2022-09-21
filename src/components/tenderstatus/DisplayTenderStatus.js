import React, { useState } from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiBuilding2Fill} from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import{ MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";



 const DisplayTenderStatus =(props) =>{


  const [color,setColor] = useState(true);

  
    return <div className="card-container">

{props.bids.map((tender,index) =>(
     <div className='tenderCard' key= {tender.bidIndex} >
                  <div className='tenderCardHeader' id='tenderCardHeader'>
                     
                         
                             <p><RiBuilding2Fill/><b> {tender.companyNames}</b></p>
                             <p>{tender.contactAddress}</p>
                             <h4>{tender.goodDealsWith}</h4>

                             
                             <h4 style={{color:color?"blue":"purple"}}>Status: {tender.choice==1?<h4 style={{color:color?"green":"orange"}}>Approved</h4> :<h4 style={{color:color?"orange":"green"}}>Waiting</h4> }</h4>
                           
                 </div>
                 <div className='tenderCard-middle' id='tendercard-middle'>
                     <h5><GiRotaryPhone/>&nbsp;{tender.companyOfferTender}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.contactAddress} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.contactAddress}</h5>
                  </div>
                 
                 
     
              </div>
               
  ))}

</div>
};
export default DisplayTenderStatus;