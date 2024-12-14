### To figure out...

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
