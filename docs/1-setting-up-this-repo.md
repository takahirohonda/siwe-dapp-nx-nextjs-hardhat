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
