# nx-dapp-setup-for-hardhat-nextjs

Nx monorepo set up for hardhat and nextjs app

## Current to do + reference

https://docs.login.xyz/sign-in-with-ethereum/quickstart-guide/creating-siwe-messages

## (1) Setting up this repo.

```bash
yarn add hardhat -D
# initialise hardhat in the current directory
npx hardhat init
# move the code and config (including tsconfig) into a temp folder, temp-hardhat

# Add nx lib
yarn add nx@latest -D
yarn nx init
# Node - create project and move code from temp-hardhat
yarn nx add @nx/node
yarn nx g @nx/node:application apps/hardhat

# Next js
yarn nx add @nx/next
yarn nx g @nx/next:app apps/next-auth
# Add lib for next
yarn nx add @nx/next:lib
yarn nx g @nx/next:lib libs/my-next-lib
```

## (2) Setting up Wagmi

```bash

```
