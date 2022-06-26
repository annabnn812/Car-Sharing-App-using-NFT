// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "openzeppelin-contracts/contracts/utils/Counters.sol";
import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "openzeppelin-contracts/contracts/utils/Context.sol";


contract CarRentalNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    mapping(uint256 => string) public _tokenURIs;

    event Minted(uint256 newItemId);

    constructor(string memory _name, string memory _symbol) ERC721 ("Car Sharing Service", "CSS") {
    
    }
    // struct Car {
    //   address payable renter;
    //   address payable Owner;
    //   uint256 price;
    //   bool rentedOut;
    // }

    // mapping(uint256 => Car) private idToCar;
    
    function mintNFT(address recipient, string memory tokenURI) public payable returns (uint256) {

        // require(_tokenId!= 0);
        // require(tokenURI[_tokenId].duration != 0);
        // require(recipient != address(0));

        // Car memory car;

        // uint price = tokenURI[tokenId].price;
        // require(msg.value == price, "Please have sufficent funds to pay the asking price in order to complete the rental transaction");

        _tokenId.increment();
        uint256 newItemId = _tokenId.current();

        // idToCar[_tokenId].renter = payable(msg.sender);
        // idToCar[tokenId].owner = payable(address(0));
        // idToCar[tokenId].rentedOut = true;
        // idToCar[_tokenId].price = price;


        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

      // In 7 days after the end of the car rental, the NFT burns down.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
}