// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "./tenderconstants.sol";
import "./tenderposter.sol";
contract  Bider is TenderPoster {
    using  SafeMath for uint;
struct biderDetails{
    address payable bidowner;
    string companyName;
    string contact;
    string goodsDealsWith;
}
mapping (address => biderDetails) bidItems;

 
function writeBiderDetails(uint _tenderIndex,string memory _companyName,string memory _contact,string memory _goodsDealsWith)public{
    bidItems[tenderItems[_tenderIndex].owner] = biderDetails(payable(msg.sender),_companyName,_contact,_goodsDealsWith);
}
function readBiderDetails(uint _tenderIndex)public  view  returns(
    address,
    string memory,
    string memory,
    string memory
){
    return(bidItems[tenderItems[_tenderIndex].owner].bidowner,
    bidItems[tenderItems[_tenderIndex].owner].companyName,
    bidItems[tenderItems[_tenderIndex].owner].contact,
    bidItems[tenderItems[_tenderIndex].owner].goodsDealsWith
    );
} 

}