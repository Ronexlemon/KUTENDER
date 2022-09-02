// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.1;
import "./tenderposter.sol";
import "./bider.sol";

contract TenderApprove is TenderPoster,Bider,Ownable{

    event Approve(address _approve,uint _index);
    using SafeMath for uint;
   function _approve(uint _tenderIndex)internal {
       require(msg.sender ==  tenderItems[_tenderIndex].owner,"only owner");

       emit Approve(tenderItems[_tenderIndex].owner,_tenderIndex);
       
   }

function approve(uint _tenderIndex)public{
    _approve(_tenderIndex);
    approveBiderDetails(_tenderIndex);
}
function approveBiderDetails(uint _tenderIndex)public  view onlyOwner() returns(
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