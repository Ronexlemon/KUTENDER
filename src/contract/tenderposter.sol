// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.1;
import "./tenderconstants.sol";

contract TenderPoster{
    using  SafeMath for uint;
struct TenderDetails{
    address payable  owner;
    string companyName;
    string tenderDescription;
    string deadlineDate;
    string contactEmail;
    uint tenderAmount;
}
mapping(uint => TenderDetails) tenderItems;
uint tenderIndex=0;

function writeTenderDetails(string memory _companyName,string memory _tenderDescription,string memory _deadlineDate,string memory _contactEmail,uint _tenderAmount)public{
    tenderItems[tenderIndex] = TenderDetails(payable(msg.sender),_companyName,_tenderDescription,_deadlineDate,_contactEmail,_tenderAmount);
    tenderIndex = tenderIndex.add(1);

}

function readTenderDetails(uint _tenderIndex)public view returns (
    address,
    string memory,
     string memory,
      string memory,
       string memory,
       uint
){
    return(
        tenderItems[_tenderIndex].owner,
         tenderItems[_tenderIndex].companyName,
          tenderItems[_tenderIndex].tenderDescription,
           tenderItems[_tenderIndex].deadlineDate,
            tenderItems[_tenderIndex].contactEmail,
             tenderItems[_tenderIndex].tenderAmount);

    

}


}

