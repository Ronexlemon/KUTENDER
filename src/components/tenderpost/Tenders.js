import React from 'react';
import { useState, useEffect,useRef,useCallback } from "react";
import "./tenders_module.css";
import DisplayTenders from './DisplayAvailableTenders';
import Web3Modal from "web3modal"
import {providers,Contract} from "ethers";
//import {ABI} from "../tenderpost_abi";
import { BiderAbi } from "../bidercontract_abi";
//import Web3 from 'web3';
import { BigNumber } from 'ethers';
//from display






//Getting the values of local storage
// const getDatafromLS=()=>{
//     const data = localStorage.getItem('tenders');
//     if(data){
//         return JSON.parse(data);
//     }
//     else{
//         return[]
//     }
// }



 const Tenders = () =>{
    let ref = useRef(null);
    let getformdiv = useRef(null);
    let btnapprove = useRef(null);
    //let Tenders =[];
    const [Tenders, setTenders] = useState([]);
    const TenderOwnerAddress ="0xA05239144E9039232f4C6b875EA1d26f91111656"
    const [tenderslength,setLength] = useState(0);
    const web3ModalRef = useRef();
    const [walletconnect,setWalletConnect] = useState(false);
const [address,setaddress] = useState(null);
             const [userAccount, setUserAccount] = useState(null);
             //const [accountBalance,setAccountBalance] = useState(null);
             //postTender to the contract
             
            //  document.querySelector(".btnPost")
            //  .addEventListener("click", async (e) => 
            const btnPosts =async () =>{
               const params = [
                companyName,
                description,
                deadline,
                email,
                amount               
               ]
              
               try {
               
                const signer = await getProviderOrSigner(true);
                const tenderContract = new Contract(
                    TenderOwnerAddress,
                    BiderAbi,                   
                    signer,
                );
                const results = await tenderContract.writeTenderDetails(...params
                       )
                // .send({from: address})
               alert("add results successful")
               
              } catch (error) {
               alert("the error is",error)
              }
              alert(`🎉 You successfully added "${params[0]}".`)
            // getAllTenders()
            }
            //getAllTenders
//             const getAllTenders =  useCallback(async ()=>{
//                 let _tenders =[];
//                 const provider = await getProviderOrSigner();
//                 const TenderContracts = new Contract(
//                     TenderOwnerAddress,
//                     BiderAbi,
//                     provider,
//                 ) ;
                
//                 const tenderLength = await TenderContracts.tenderTotals();


// for(let i =0;i < tenderLength;i++){
//     let _tender = new Promise(async(resolve,reject)=>{
//         let t = await  TenderContracts.readTenderDetails(i);        
//         resolve({
//              owners:t[0],
//             companyNames:t[1],
//           tenderDescriptions:t[2],  
//              deadlineDates:t[3],
//              contactEmails:t[4],
//              tenderAmounts:t[5],
//              tenderindexs:t[6],
            
//         });
//         reject(new Error('Will this be ignored?')); // ignored
 
        
//     })
//     _tenders.push(_tender);

   
// }
// const tenderss = await Promise.all(_tenders);
// setTenders(tenderss);
// //renderProducts();

// //add function to render tenders
//             },[])


// function renderProducts() {
//     ref.current.innerHTML = ""
    

//     Tenders.forEach((_product) => {
//         const newDiv = document.createElement("div")
//         newDiv.className = "tenderTemplates"
//         newDiv.innerHTML = DisplayTenders(_product)
//         ref.current.appendChild(newDiv);
//     })
//   }
             
             //getTotalTendersLength from the cntract
// const getTotalTendersLength = async ()=>{
//    // try{
//         const provider = await getProviderOrSigner();
       
//         const TenderPosterContract = new Contract(
//             TenderOwnerAddress,
//             ABI,            
//             provider,
//         );
//         const tenderLength = await TenderPosterContract.tenderTotals();
//         setLength(tenderLength);
//     // }
//     // catch(error){
//     //     console.error(error);
//     // }

// }
             const getUserAddress = async ()=>{
                const signer = await getProviderOrSigner(true);
                const accounts = await signer.getAddress();
                setaddress(accounts);
             }
             
             const getProviderOrSigner = async (needSigner = false)=>{
                //connect metamask
                const provider = await web3ModalRef.current.connect();
                const web3Provider = new providers.Web3Provider(provider);
                //check if user is connected to goerli network
                const {chainId} = await web3Provider.getNetwork();
                if (chainId !==5) {
                    window.alert("Change network to Goerli");
                    throw new Error("Change network To Goerli");


                }
               // alert("network is goerli")
                //if need signer for transactions
                if(needSigner){
                    const signer = web3Provider.getSigner();
                    const accounts = await signer.getAddress();
                    setaddress(accounts);
                    return signer;
                }
                return web3Provider;
             }
             const DectectWindow = async ()=>
            {
                try{
                    await   getProviderOrSigner();
                   await getUserAddress();
                    alert("set account")
                    setWalletConnect(true);
                   

                     
                }catch(error){
                    console.error(error);
                    alert(error);
                }
              
             };


//main array of tender details objects state
//const[tenders, setTenders] = useState(getDatafromLS());

//input field states
const [companyName, setCompanyName] = useState('');
const [description, setDescription] = useState('');
const [deadline, setDeadline] = useState('');
const [contact, setContact] = useState('');
const [email, setEmail] = useState('');
const [amount, setAmount] = useState('');

// //Form submit event
const handleAddTender=(e)=>
{
    //prevent page refresh
    e.preventDefault();

    // //creating an object
    // let tender={
    //     companyName,
    //     description,
    //     deadline,
    //     contact,
    //     email,
    //     amount
    // }
    // setTenders([...tenders, tender]);
    setCompanyName('');
    setDescription('');
    setDeadline('');
    setContact('');
    setEmail('');
    setAmount('');
}
//btnapprove.current

//display
//  const DisplayTenders =(tenders) =>{
//     console.log(tenders.companyNames);
//    // const items = JSON.stringify(tenders);
    
//     return `   
//         <div className='tenderCard' key= ${tenders.contactEmails}>
//             <div className='tenderCardHeader' id='tenderCardHeader'>
                
                    
//                         <p><RiBuilding2Fill/><b>Company : ${tenders.companyNames}</b></p>
//                         <p><b>TenderDescription:</b> ${tenders.tenderDescriptions}</p>
//                         <h4>Amount: ${tenders.tenderAmounts}</h4>
                
//             </div>
//             <div className='tenderCard-middle' id='tendercard-middle'>
//                 <h5><GiRotaryPhone/>contact:${tenders.contactEmails}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;deadline:${tenders.deadlineDates} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;${tenders.contactEmails}</h5>
//             </div>
//             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
//                 <button className='btn-bid' id='btn-bid'>BID</button>
//                 <button  onClick="{Approve()}" className='btn-aprove' id='btn-aprove'>Approve</button>
//                 <button className="deletebtn" ><BsTrash/></button>
                
//             </div>

//         </div>
          
//      )
//      `
     
//   }
  //button.addEventListener("click", approve);
  
  

  const openForm =()=>{
    getformdiv.current.style.display="block"
    
  }
  const closeForm =()=>{
    getformdiv.current.style.display="none"
    
  }

//delete tender from local storage
// const deleteTender=(contact)=>{
//     const filteredTenders=tenders.filter((element, index)=>{
//         return element.contact !== contact
//     })
//     setTenders(filteredTenders);
// }
//saving data to local storage

// useEffect(()=>{
//     localStorage.setItem('tenders', JSON.stringify(tenders));
// }, [tenders])
//load content on reload
useEffect(()=>{
     
    web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
        cacheProvider:false
        
      });
      //getTotalTendersLength();
     // getAllTenders();
     getProviderOrSigner();
      //renderProducts();
},[walletconnect,tenderslength]);



return(
    <div className="mainTenders">
        <button onClick={DectectWindow} className="connectWallet">
            <h2 id="connect">Connect Wallet</h2>
        </button>
        
       {/* <button className='btnPost' onClick={openForm}>Add</button> */}
        
        <div ref={getformdiv}  className="postForm">
            <form onSubmit={ handleAddTender}>
                <br/>
                <label>Company Name</label><br/>
                <input type="text" id="company" name="company" required onChange = {(e) => setCompanyName(e.target.value)} value ={companyName}/><br/>
                <label>Tender Description</label><br/>
                <input type="text" id="description" name="description" required onChange = {(e) => setDescription(e.target.value)} value ={description}/><br/>
                <label>DeadLine</label><br/>
                <input type="date" id="deadline" name="deadline" required onChange = {(e) => setDeadline(e.target.value)} value ={deadline}/><br/>
                <label>Contact</label><br/>
                <input type="text" id="contact" name="contact" required onChange = {(e) => setContact(e.target.value)} value ={contact}/><br/>
                <label>Email</label><br/>
                <input type="email" id="email" name="email" required onChange = {(e) => setEmail(e.target.value)} value ={email}/><br/>
                <label>Amount</label><br/>
                <input type="text" id="amount" name="amount" required onChange = {(e) => setAmount(e.target.value)} value ={amount}/><br/>
            
        <br/>
           { <button className="btnClose">Close</button> }
            <button className="btnPost"onClick={() => { btnPosts(); closeForm();}}   type="submit" value="Submit">Post</button>
           
            </form>              
        </div> 

               
            <main ref={ref} >
                {/* <DisplayTenders tenders={Tenders} approve={Approve}  />  */}
                {/* tenders={Tenders} */}
                {/* {/* deleteTender={deleteTender} */}
            </main>
                 
            

    </div>

   
)

}
export default Tenders;