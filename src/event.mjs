import { Web3 } from "web3";
import ABI from "./abi.mjs";

// events can be filtered

// Intialize the web socket instance
const web3 = new Web3("wss://ethereum-rpc.publicnode.com");

async function doSomething() {
  const USDC = web3.eth.Contract(ABI, "address");
  subscription.on("data", console.log);
}

doSomething();
