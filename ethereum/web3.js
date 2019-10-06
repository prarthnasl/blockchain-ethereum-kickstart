import Web3 from 'web3';


let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  // const provider = new Web3.providers.HttpProviders('https://rinkeby.infura.io/v3/d8b81e3fb379469996e2c4d8d53b3237');

  web3 = new Web3('https://rinkeby.infura.io/v3/d8b81e3fb379469996e2c4d8d53b3237');
}

export default web3;
