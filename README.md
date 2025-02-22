# MaybePay

_Blockchain micropayments with no minimum size_

[![Demo video](./assets/video-icon.png)](https://www.youtube.com/watch?v=flhXOMp9hWI)

## Run the Frontend

MaybePay is on the polygon testnet for now and uses hardcoded values
to make testing the frontend smoother for hackathon purposes.

1. Follow the instructions at [/frontend/README.md](./frontend/README.md)

## Deploying the Contracts

1. Compile the smart contracts: `yarn hardhat compile`
2. Deploy the smart contracts to Polygon: `yarn hardhat run scripts/deploy.ts --network mumbai`

## How it Works

```
Client:
  request /resource

Server:
  will provide /resource for $0.0010, hash(server-secret)=0xced8e9

Client:
  request /resource
  + payment (offchain signed message):
    if (preimage(0xced8e9) + 0x2f4ac2 < 0x000d1b) {
      pay server $5.00
    }

Server:
  respond /resource

Server:
  1/5000 chance:
    Submit tx onchain, redeeming offchain signed message for $5.00 compensation
  4999/5000 chance:
    No actual compensation, but satisfied by the chance of being
    paid, and honours the request to maintain reputation and
    expected compensation from continued interaction
```
