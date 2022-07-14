const { ethers } = require("hardhat");
const { assert } = require("chai")

describe('SimpleStorage', function () {
    let simpleStorage, simpleStorageFactory;

    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
        simpleStorage = await simpleStorageFactory.deploy();
        await simpleStorage.deployed();
    });

    it('should start with favNum = 0', async function () {
        const num = await simpleStorage.getFavNum();

        assert.equal(num.toNumber(), 0);
    });

    it('should store a number', async function () {
        const resp = await simpleStorage.store(42);
        await resp.wait(1);

        const num = await simpleStorage.getFavNum();

        assert.equal(num.toNumber(), 42);
    });
});