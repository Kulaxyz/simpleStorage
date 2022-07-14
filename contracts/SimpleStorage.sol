// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract SimpleStorage {
    uint private favoriteNumber;
    Person[] public people;
    mapping(string => uint) public personToFavNum;

    struct Person {
        string name;
        uint favoriteNumber;
    }

    function store(uint _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function addPerson(string memory _name, uint _favoriteNumber) public {
        people.push(Person(_name, _favoriteNumber));
        personToFavNum[_name] = _favoriteNumber;
    }

    function getFavNum() public view returns(uint) {
        return favoriteNumber;
    }

    function getUserByFavoriteNumber(uint _favoriteNumber) public view returns(uint result) {
        for (uint i = 0; i < people.length; i++) {
            if (people[i].favoriteNumber == _favoriteNumber) {
                result++;
            }
        }
        return result;
    }
}