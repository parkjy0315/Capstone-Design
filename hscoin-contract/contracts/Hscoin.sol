pragma solidity ^0.8.5;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Hscoin is ERC20 {
    string public constant name_ = "HSCoin";
    string public constant symbol_ = "HSC";
    uint256 constant decimals_ = 18;
    uint256 constant INITIAL_SUPPLY = 100000000 * (10**decimals_);

    constructor() ERC20(name_, symbol_) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
