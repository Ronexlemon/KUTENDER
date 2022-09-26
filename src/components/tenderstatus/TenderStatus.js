import React from 'react';
import './TenderStatus.css';
import { BiderAbi } from "../bidercontract_abi";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import { providers, Contract } from "ethers";
import DisplayTenderStatus from "./DisplayTenderStatus"

function TenderStatus() {
  const [walletconnect, setWalletConnect] = useState(false);
  const [BidTenders, setBidTenders] = useState([]);
  const [index, setIndex] = useState();
  const ContractBiderAddress = "0xA05239144E9039232f4C6b875EA1d26f91111656";
  const Web3ModalRef = useRef();
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

  //getallbids tenders
  const getAllBids = async () => {
    let _bidTenders = [];
    const provider = await getProviderOrSigner();
    const BidersContract = new Contract(
      ContractBiderAddress,
      BiderAbi,
      provider,
    )
    const totalItemsLength = await BidersContract.getTotalBindsLength();
    //alert(totalItemsLength);
    for (let i = 0; i < (totalItemsLength); i++) {
      let _tenderBids = new Promise(async (resolve, reject) => {
        let bids = await BidersContract.readBiderDetails(i);
        resolve({
          owner: bids[0],
          companyNames: bids[1],
          contactAddress: bids[2],
          goodDealsWith: bids[3],
          companyOfferTender: bids[4],
          bidIndex: bids[5],
          choice: bids[6]


        }

        );
        reject("Please Try Again after some Minutes");

      })
      _bidTenders.push(_tenderBids);

    }
    const allbids = await Promise.all(_bidTenders);
    setBidTenders(allbids);

  }
  //Approve function
  const approveTender = async (ids) => {

    const signer = await getProviderOrSigner(true);

    const BiderContract = new Contract(
      ContractBiderAddress,
      BiderAbi,
      signer,
    )
    const approves = await BiderContract.approveTender(ids);
    // alert(approves);

  }

  //call the metamask on page reload
  // useEffect(()=>{
  //   getAllBids();
  // },[])
  useEffect(() => {
    Web3ModalRef.current = new Web3Modal({
      network: "goerli",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider: false

    });
    getAllBids();

  }, [walletconnect]);

  return (
    <div>

      <main className='tender-status-main-page'>
        <DisplayTenderStatus bids={BidTenders} approve={approveTender} />
      </main>
    </div>
  )
}

export default TenderStatus;