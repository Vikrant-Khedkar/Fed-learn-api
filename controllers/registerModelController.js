const {Web3} = require("web3");
const contractAddress = "0x73511669fd4de447fed18bb79bafeac93ab7f31f"
const web3 = new Web3("http://127.0.0.1:8545/")
const abi = require("../constants/FederatedLearningContract.json")
const contract = new web3.eth.Contract(abi.abi, contractAddress);
const privatekey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const senderAccount = web3.eth.accounts.privateKeyToAccount( privatekey);
web3.eth.accounts.wallet.add(senderAccount);
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
            console.log("OUT")

}

module.exports = registerModel;