import React from "react";
import DisplayTenders from "./DisplayAvailableTenders";
import { useState, useEffect, useRef, useCallback } from "react";
import Web3Modal from "web3modal"
import { providers, Contract } from "ethers";
//import {ABI} from "../tenderpost_abi";
import { BiderAbi } from "../bidercontract_abi";
const AvailableTenders = () => {
    const [Tenders, setTenders] = useState([]);
    const TenderOwnerAddress = "0xA05239144E9039232f4C6b875EA1d26f91111656";
    const [tenderslength, setLength] = useState(0);
    const web3ModalRef = useRef();
    const Approve = () => {
        alert("yooj");
    }
    //getAllTenders
    const getAllTenders = useCallback(async () => {
        let _tenders = [];
        const provider = await getProviderOrSigner();
        const TenderContracts = new Contract(
            TenderOwnerAddress,
            BiderAbi,
            provider,
        );

        const tenderLength = await TenderContracts.tenderTotals();


        for (let i = 0; i < tenderLength; i++) {
            let _tender = new Promise(async (resolve, reject) => {
                let t = await TenderContracts.readTenderDetails(i);
                resolve({
                    owners: t[0],
                    companyNames: t[1],
                    tenderDescriptions: t[2],
                    deadlineDates: t[3],
                    contactEmails: t[4],
                    tenderAmounts: t[5],
                    tenderindexs: t[6],

                });
                reject(new Error('Will this be ignored?')); // ignored


            })
            _tenders.push(_tender);


        }
        const tenderss = await Promise.all(_tenders);
        setTenders(tenderss);
        //renderProducts();

        //add function to render tenders
    }, [])
    const getProviderOrSigner = async (needSigner = false) => {
        //connect metamask
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        //check if user is connected to goerli network
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 5) {
            window.alert("Change network to Goerli");
            throw new Error("Change network To Goerli");


        }
        // alert("network is goerli")
        //if need signer for transactions
        if (needSigner) {
            const signer = web3Provider.getSigner();
            const accounts = await signer.getAddress();
            // setaddress(accounts);
            return signer;
        }
        return web3Provider;
    }
    useEffect(() => {

        web3ModalRef.current = new Web3Modal({
            network: "goerli",
            providerOptions: {},
            disableInjectedProvider: false,
            cacheProvider: false

        });
        //getTotalTendersLength();
        getAllTenders();
        //renderProducts();
    }, [tenderslength]);

    return (
        <div>
            <main  className='available-tenders-page'>
                
                <DisplayTenders tenders={Tenders} approve={Approve} />
                {/* tenders={Tenders} */}
                {/* {/* deleteTender={deleteTender} */}
            </main>

        </div>
    )
}
export default AvailableTenders;