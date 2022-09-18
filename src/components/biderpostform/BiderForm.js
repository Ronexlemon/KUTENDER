import "./bider_module.css";
import { BiderAbi } from "../bidercontract_abi";
import Web3Modal, { providers } from "web3modal";
import { useRef,useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';

import { Contract } from "ethers";
const BiderForm =() =>{
    const {state} = useLocation();
const { id } = state; // Read values passed on state
const ContractBiderAddress ="0xB771688306ac017BA038dDebd5769094297E46F0"
const Web3ModalRef = useRef();
const [biderCompanyName, setBiderCompanyName] = useState();
const [biderContact, setBiderContact] = useState();
const [_tenderIndex, settenderIndex] = useState();
const [bidertypeOfGoods, setTypeOfGoods] = useState();
//provide sugner or provider
const getProviderOrSigner= async(needSigner = false)=>{
    const provider =await  Web3ModalRef.current.connect();
    const web3Provider = new providers.we3provider(provider);
   // check if network is goerli
   const {chainId}  = await web3Provider.getNetwork();
   if(chainId !==5){
    window.alert("Change network to Goerli");
    throw new Error("Change network To Goerli");
   }
   if(needSigner){
    const signer =  web3Provider.getSigner();
    return signer;

   }
   return web3Provider;
}



//call the metamask on page reload
useEffect(()=>{
    Web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
        cacheProvider:false
        
      });
      getProviderOrSigner();

})
//btnsubmit to submit the biders tender details
const  btnsubmit=async ()=>{
    const params=[
        _tenderIndex,
        biderCompanyName,
        biderContact,
        bidertypeOfGoods
    ]
   try{
    const signer = await getProviderOrSigner(true);
    const BiderContract = new Contract(
ContractBiderAddress,
BiderAbi,
signer
        
    );
    const results = await BiderContract.writeBiderDetails(...params);
    alert("BidSuccessful ");
   }catch(error){
    alert(error)
   }
}
//btntest
const test =()=>{
    alert(id);
}

    return(
        <div className="mainBiderForm">
            <div className="btnConnect">
                <button id="btnconnectAccount">
                    Connect<br/>
                    Wallet

                </button>
               
            </div>
            <div className="biderForm">

        <div className="BiderFormInput">
            <form>
                <label>
                    Company Name: 
                </label>
                <input type="text" className="inputs" id="biderCompanyName" required onChange={(e)=>setBiderCompanyName(e.target.value)} value={biderCompanyName} /><br/>
                <label>
                    Contact : 
                </label>
                <input type="text" className="inputs" id="biderContact" required onChange={(e)=>setBiderContact(e.target.value)} value={biderContact} /><br/>
                <label>
                    Type of Goods: 
                </label>
                <input type="text" className="inputs" id="biderGoods" required onChange={(e)=>setTypeOfGoods(e.target.value)} value={bidertypeOfGoods}  /><br/>
                
            </form>

        </div>
        <div className="btnpostcancel">
        <button onClick={test} className="btnsclose">Close</button>
                <button className="btnsopen">Post</button>

        </div>
        
            </div>
          

        </div>
    )

}
export default BiderForm;