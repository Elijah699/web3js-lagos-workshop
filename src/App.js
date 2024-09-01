import logo from "./logo.svg";
import "./App.css";
import { Web3 } from "web3";
import { useState } from "react";
import ABI from "./abi.mjs";
// a. import plugin and web3 module
import {
  ChainlinkPlugin,
  MainnetPriceFeeds,
} from "@chainsafe/web3-plugin-chainlink";

function App() {
  const [variable, setVariable] = useState("0X");

  // 1. Intro to Web3 js
  // Initialize the web3 instance

  // const web3 = new Web3(window.ethereum);
  // const web3 = new Web3("wss://ethereum-rpc.publicnode.com");
  // READ data from the blockchain

  // async function doSomething() {
  // Get block number
  // const result = await web3.eth.getBlockNumber();

  // const result = web3.utils.toWei("1", "ether")

  // 1. Connect to Metamask
  // const accounts = await web3.eth.requestAccounts()
  // WRITE data in the blockchain

  // // create the transaction object
  // const tx = {
  //   from: accounts[0],
  //   to: '',
  //   value: web3.utils.toWei("1", "ether")
  // }

  // // 2. send the transaction
  // const receipt = await web3.eth.sendTransaction(tx)

  // // render in the frontend
  // setVariable(receipt.transactionHash)

  // initialize the contract (ABI, address)
  // const ADDRESS = ""
  // const MSG_CONTRACT = new web3.eth.Contract(ABI, ADDRESS);

  // call the reading functions
  // const name = await USDC.methods.decimals().call()
  // const totalSupply = await USDC.methods.totalSupply().call();

  // READING
  // const result = await MSG_CONTRACT.methods.getMsg().call()

  // WrITING FUNCTION
  // const result = MSG_CONTRACT.methods.setMsg("Hello Lagos").send({ from: accounts[0] })
  // setVariable()

  // Initialize contract
  // const USDC = web3.eth.Contract(ABI, "address");

  // subscribe to events
  // const subscription = USDC.events.Transfer();

  // There is also approval method
  // const subscription = USDC.events.Approval();

  // print in console
  // subscription.on("data", console.log);
  // }



  // 2. Builiding with ChainLink Plugin

  // b.
  const web3 = new Web3(window.ethereum);

  // c. Register the plugin
  web3.registerPlugin(new ChainlinkPlugin());

  async function getPrice() {
    // d. use plugin
    // Chainlink data feeds returns the prices of different assets
    const result = await web3.chainlink.getPrice(MainnetPriceFeeds.BtcUsd);

    console.log(result.answer); // returns the price of the asset
    setVariable(result.answer.toString().substring(0, 5))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getPrice}>Do Something</button>

        <p> Result: {variable} </p>
      </header>
    </div>
  );
}

export default App;
