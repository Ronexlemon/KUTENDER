import React from 'react';
import "./bider_module.css";
import { BiderAbi } from "../bidercontract_abi";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { SiBitcoincash } from 'react-icons/si'

import { providers, Contract } from "ethers";
const BiderForm = () => {
    const { state } = useLocation();
    const { id } = state; // Read values passed on state
    const ContractBiderAddress = "0xA05239144E9039232f4C6b875EA1d26f91111656"//"0xb6D6d2e56f6C5E519c871BC682048027171Ba0E1"
    const Web3ModalRef = useRef();
    const [biderCompanyName, setBiderCompanyName] = useState();
    const [biderContact, setBiderContact] = useState();
    const [_tenderIndex, settenderIndex] = useState();
    const [bidertypeOfGoods, setTypeOfGoods] = useState();

    //provide sugner or provider
    const getProviderOrSigner = async (needSigner = false) => {
        const provider = await Web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        // check if network is goerli
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 5) {
            window.alert("Change network to Goerli");
            throw new Error("Change network To Goerli");
        }
        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;

        }
        return web3Provider;
    }



    //call the metamask on page reload
    useEffect(() => {
        Web3ModalRef.current = new Web3Modal({
            network: "goerli",
            providerOptions: {},
            disableInjectedProvider: false,
            cacheProvider: false

        });
        getProviderOrSigner();
        settenderIndex(id);

    }, [])
    //btnsubmit to submit the biders tender details
    const btnsubmit = async () => {
        const params = [
            _tenderIndex,
            biderCompanyName,
            biderContact,
            bidertypeOfGoods
        ]
        try {
            const signer = await getProviderOrSigner(true);
            const BiderContract = new Contract(
                ContractBiderAddress,
                BiderAbi,
                signer

            );
            const results = await BiderContract.writeBiderDetails(...params);
            alert("BidSuccessful ");
        } catch (error) {
            alert(error)
        }
    }
    //btntest
    const test = () => {
        alert(id);
    }

    return (
        <div className="mainBiderForm">
            <div className='connect-wallet-button'>

                <button className="connectWallet">
                    <h2 id='connect'> Connect<br />
                        Wallet </h2>

                </button>

            </div>

        
                <div className="bidForm-container">

                    <div className="bidForm-description">
                        <h1>Bid For Tender</h1><br />
                    </div>
                    <div className="tenderForm-description-p-container">
                        <div className="tenderForm-description-p-container-blank">
                        </div>
                        <div className="tenderForm-description-p">
                            <p><SiBitcoincash /> Connect to wallet<br /> Fill in the form below to bid for the tender</p>
                        </div>
                    </div>
                    <div className="bidForm-content-container">
                        <div className="BiderFormInput">
                            <form>
                                <label className="label">Company Name:</label><br/>
                                <input type="text" className="form-input" id="biderCompanyName" placeHolder="Company Name..." required onChange={(e) => setBiderCompanyName(e.target.value)} value={biderCompanyName} /><br />
                                <label className="label">Company Registration Number</label><br/>
                                <input type="text" className="form-input" id="biderCompanyRegistrationNumber" placeHolder="SL002900"  /><br />
                                <label className="label">Contact :</label><br/>
                                <input type="text" className="form-input" id="biderContact" placeHolder="0792271915" required onChange={(e) => setBiderContact(e.target.value)} value={biderContact} /><br />
                                <label className="label">Link To Company Documents</label><br/>
                                <input type="text" className="form-input" id="biderGoods" placeHolder="https://documents.tender.io" required onChange={(e) => setTypeOfGoods(e.target.value)} value={bidertypeOfGoods} /><br />
                                <div className="btnpostcancel">
                                    <button onClick={test} className="btnClose">Close</button>
                                    <button onClick={btnsubmit} className="btnPost">Post</button>
                                </div>
                            </form>

                        </div>
                    </div>




                </div>
            
        </div>
    )

}
export default BiderForm;