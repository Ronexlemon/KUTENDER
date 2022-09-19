// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.1;
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract TenderPoster is Ownable{
    using  SafeMath for uint;
    //enums for state
    
struct TenderDetails{
    address payable  owner;
    string companyName;
    string tenderDescription;
    string deadlineDate;
    string contactEmail;
    uint tenderAmount;
    uint tendersindex;
}
mapping(uint => TenderDetails) tenderItems;
uint tenderIndex=0;

function writeTenderDetails(string memory _companyName,string memory _tenderDescription,string memory _deadlineDate,string memory _contactEmail,uint _tenderAmount)public{
    uint _tendersindex = tenderIndex;
    tenderItems[tenderIndex] = TenderDetails(payable(msg.sender),_companyName,_tenderDescription,_deadlineDate,_contactEmail,_tenderAmount,_tendersindex);
    tenderIndex = tenderIndex.add(1);
    

}

function readTenderDetails(uint _tenderIndex)public view returns (
    address,
    string memory,
     string memory,
      string memory,
       string memory,
       uint,
       uint
){
    return(
        tenderItems[_tenderIndex].owner,
         tenderItems[_tenderIndex].companyName,
          tenderItems[_tenderIndex].tenderDescription,
           tenderItems[_tenderIndex].deadlineDate,
            tenderItems[_tenderIndex].contactEmail,
             tenderItems[_tenderIndex].tenderAmount,
             tenderItems[_tenderIndex].tendersindex);

    

}
//function to return the number of tender items
function tenderTotals()public view returns(uint){
    return tenderIndex;
}
//delete Tender
function deleteTender(uint _index)public onlyOwner{
    require(msg.sender != address(this),"Only The Owner can delete");
    delete tenderItems[_index];


}


}

