// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const UnLevelNFT = await hre.ethers.getContractFactory("UnLevelNFT");
  const unLevelNFT = await UnLevelNFT.deploy();

  await unLevelNFT.deployed();

  console.log( `UnLevelNFT deployed to ${unLevelNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
