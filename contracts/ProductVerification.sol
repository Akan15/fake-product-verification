// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductVerification {
    address public owner;

    struct Product {
        string productId;
        bool isAuthentic;
    }

    mapping(string => Product) public products;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function addProduct(string memory _productId, bool _isAuthentic) public onlyOwner {
        products[_productId] = Product(_productId, _isAuthentic);
    }

    function verifyProduct(string memory _productId) public view returns (bool) {
        return products[_productId].isAuthentic;
    }
}
