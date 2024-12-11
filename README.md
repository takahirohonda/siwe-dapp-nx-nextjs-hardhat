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
# Add react lib - need to configure tailwind and next ui because no option to add automatically with this command
nx g @nx/next:library libs/utils-wagmi
nx g @nx/next:library libs/ui-components
```

## (2) Setting up Wagmi

```bash
yarn add wagmi viem@2.x @tanstack/react-query

# https://nextui.org/docs/guide/installation
yarn @nextui-org/react framer-motion
```

## Next UI Reference

NextUI Beta has Text component...
[Text](https://v1.nextui.org/docs/components/text)

## Notes...

Figure out what are injected() and safe() are...

```ts
export const config = createConfig({
  chains: [mainnet, sepolia],
  multiInjectedProviderDiscovery: true,
  connectors: [
    // injected(),
    // leave wallet connect for now
    //  walletConnect({ projectId }),
    // safe(),
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```
