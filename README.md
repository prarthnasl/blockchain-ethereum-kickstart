# blockchain-ethereum-kickstart
Blockchain based Application inspired from kickstarter.com using Next.js, Solidity, Ethereum

### Kickstart Application
To learn ,develop and test end to end Dapp.


### Configure and Run :

Install all dependencies as per package.json and install Metamask in the browser.

#### Step1

Configure your Provider by Updating HDWalletProvider.

```
const provider = new HDWalletProvider(
  '<Your 16 Words Secret Phrase>',
  '<Infura API>'
);
```

#### Step2

Deploy smart contract by running deploy.js under ethereum folder.

```
node deploy.js
```

#### Step3

Start Next.js server by running folowing command inside kickstart folder.

```
npm run dev
```
