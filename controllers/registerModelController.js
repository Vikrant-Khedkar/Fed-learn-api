require('dotenv').config();
const {Web3} = require("web3");
const contractAddress = "0x6bD0f414ebF27184637E66e073B9bb4c5ECd3083"
const web3 = new Web3("https://rpc.sepolia.org/")
const abi = require("../constants/FederatedLearningContract.json")
const contract = new web3.eth.Contract(abi.abi, contractAddress);
const senderAccount = process.env.MY_ADDRESS;
console.log(senderAccount)
// web3.eth.accounts.wallet.add(senderAccount);
const registerModel = (req,res) =>{
    console.log("IN")
    console.log(req.body)
    const modelHash = req.body.modelHash;
    const endpoint = req.body.endpoint;
    const name = req.body.modelName;
    const abstract = req.body.modelAbstract;
    const catagory = req.body.catagory;
    data = [modelHash,endpoint,name,abstract,catagory]
    console.log(data)
    contract.methods.registerModel(...data)
    .send({ from: senderAccount , gas: 3000000 })
            .on("transactionHash", (hash) => {
                console.log("Transaction Hash:", hash);
            })
            .on("receipt", (receipt) => {
                console.log("Transaction Receipt:", receipt);
            })
            .on("error", (error) => {
                console.error("Error:", error);
            });
            console.log("OUT")

}

module.exports = registerModel;