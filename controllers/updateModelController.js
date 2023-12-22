require('dotenv').config();
const { Web3 } = require("web3");
const contractAddress = "0x6bD0f414ebF27184637E66e073B9bb4c5ECd3083"
const web3 = new Web3("https://rpc.sepolia.org/")
const abi = require("../constants/FederatedLearningContract.json");
const { parse } = require("dotenv");
const contract = new web3.eth.Contract(abi.abi, contractAddress);
const privatekey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const senderAccount = web3.eth.accounts.privateKeyToAccount(privatekey);
web3.eth.accounts.wallet.add(senderAccount);
const updateModel = async (req, res) => {
    res.send("HIIII")
    const modelId = req.body.modelId;
    const update = req.body.update;
    const jsonString = JSON.stringify(update);
    const byteData = web3.utils.asciiToHex(jsonString);
    data = [modelId, byteData];
    contract.methods.updateModel(...data)
        .send({ from: senderAccount.address, gas: 3000000 })
        .on("transactionHash", (hash) => {
            console.log("Transaction Hash:", hash);
        })
        .on("receipt", (receipt) => {
            console.log("Transaction Receipt:", receipt);
        })
        .on("error", (error) => {
            console.error("Error:", error);
        });

}

module.exports = { updateModel }