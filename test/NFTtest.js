const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFT-demo', () => {
	let contractFactory;
	let contract;
	let user;

	beforeEach(async function () {
		contractFactory = await ethers.getContractFactory('MyNFT');
		[user] = await ethers.getSigners();
		contract = await contractFactory.deploy();
		await contract.deployed();
	});

	describe('User actions', () => {
		it('Token id should increment on mint', async function () {
			await contract.connect(user).makeAnNFT();
			const total = await contract.getTotalMinted();
			expect(total).to.equal(1);
		});
	});
});
