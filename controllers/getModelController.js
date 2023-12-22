const { Web3 } = require("web3");
const contractAddress = "0x73511669fd4de447fed18bb79bafeac93ab7f31f"
const web3 = new Web3("http://127.0.0.1:8545/")
const abi = require("../constants/FederatedLearningContract.json");
const { parse } = require("dotenv");
const contract = new web3.eth.Contract(abi.abi, contractAddress);
const privatekey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const senderAccount = web3.eth.accounts.privateKeyToAccount(privatekey);
web3.eth.accounts.wallet.add(senderAccount);
const getModel = async (req, res) => {
    console.log("IN")
    console.log(req.body)
    const modelId = req.body.modelId;
    data = [modelId]
    console.log(data)
    const JSONbig = require('json-bigint')({ "storeAsString": true });

    contract.methods.getModel(...data).call({ from: senderAccount.address })
        .then((result) => {
            console.log(result);

            const jsonString = JSONbig.stringify(result);
            const parsedResult = JSONbig.parse(jsonString);
            console.log((parsedResult))

            const modelId = parsedResult[0];
            const modelHash = parsedResult[1];
            const endpoint = parsedResult[2];
            const name = parsedResult[3];
            const abstract = parsedResult[4];
            const catagory = parsedResult[5];

            const responseData = [modelId, modelHash, endpoint, name, abstract, catagory];
            console.log('Model ID:', modelId);
            console.log('Model Hash:', modelHash);
            console.log('Endpoint:', endpoint);

            res.send(responseData);
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });


}

module.exports = getModel;