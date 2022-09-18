// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./TenderOwner.sol";
contract  Bider is TenderPoster {
    using  SafeMath for uint;
struct biderDetails{
    address payable bidowner;
    string companyName;
    string contact;
    string goodsDealsWith;
    string tenderOwnerName;
    uint bidsTenderIndex;
}
mapping (uint => biderDetails) bidItems;
uint bidstenderlength =0;

 
function writeBiderDetails(uint _tenderIndex,string memory _companyName,string memory _contact,string memory _goodsDealsWith)public{
    uint _bidsindex = bidstenderlength;
    bidItems[_tenderIndex] = biderDetails(payable(msg.sender),_companyName,_contact,_goodsDealsWith,tenderItems[_tenderIndex].companyName,_bidsindex);
    bidstenderlength = bidstenderlength.add(1);
}
function readBiderDetails(uint _tenderbidsIndex)public  view  returns(
    address,
    string memory,
    string memory,
    string memory,
    string memory,
    uint 
){
    return(bidItems[_tenderbidsIndex].bidowner,
    bidItems[_tenderbidsIndex].companyName,
    bidItems[_tenderbidsIndex].contact,
    bidItems[_tenderbidsIndex].goodsDealsWith,
    bidItems[_tenderbidsIndex].tenderOwnerName,
    bidItems[_tenderbidsIndex].bidsTenderIndex
    );
} 
function getTotalBindsLength()public view returns(uint){
    return bidstenderlength;
}
}