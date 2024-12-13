## Notes

## SSO solution design

We use `NextAuth.js` for authentication. `CredentialsProvide` to customise authentication logic by using SIWE.

## What is SIWE?

**Concept**

1. The wallet presents the user with a structured plaintext message or equivalent interface for signing with the EIP-191 signature scheme (string prefixed with `\x19Ethereum Signed Message:\n<length of message>`). The message MUST incorporate an Ethereum `address`, `domain` requesting the signing, version of the message, a chain identifier `chain-id`, `uri` for scoping, `nonce` acceptable to the server, and issued-at timestamp.

Message example...

```bash
URI: https://localhost/login
Version: 1
Chain ID: 1
Nonce: oNCEHm5jzQU2WvuBB # generated in the backend
Issued At: 2022-01-28T23:28:16.013Z
```

2. The signature is then presented to the server, which checks the signature's validity and message content.

3. Additional fields, including `expiration-time`, `not-before`, `request-id`, `chain-id`, and resources may be incorporated as part of authentication for the session.

4. The server may further fetch data associated with the Ethereum address, such as from the Ethereum blockchain (e.g., ENS, account balances, ERC-20/ERC-721/ERC-1155 asset ownership), or other data sources that may or may be permissioned.

https://docs.login.xyz/general-information/siwe-overview/eip-4361

**In Practice**

1. Create a `SiweMessage` with all the necessary parameters. Address will be populated when you connect to a wallet. `Nonce` will be provided by the backend. To sign message, use `useSignMessage` with `Wagmi` or `signer.signMessage(message)` with `ether.js`.

```ts
import { BrowserProvider } from 'ethers'
import { SiweMessage } from 'siwe'

function createSiweMessage(address, statement) {
  const message = new SiweMessage({
    domain: window.location.host,
    address,
    statement,
    uri: window.location.origin,
    version: '1',
    chainId: '1',
    nonce: await res.text(),
  })
  return message.prepareMessage()
}
// Once connected to wallet, we can call this.
// provider is from ether.js Provider.
async function signInWithEthereum() {
  const signer = await provider.getSigner()

  message = await createSiweMessage(
    await signer.address,
    'Sign in with Ethereum to the app.'
  )
  console.log(message)
  signature = await signer.signMessage(message)
  console.log(signature)
}
```

## Terminologies

**SIWE (Sign-In with Ethereum)**

https://docs.login.xyz/general-information/siwe-overview/eip-4361

**iron-session**

A Secure, stateless and cookie-based session library. https://github.com/vvo/iron-session

**Nonce**

In blockchain, a nonce is a randomly generated number that is included in the block's header. The purpose of the nonce is to add randomness to the block's hash, making it difficult for miners to find a valid hash value that meets the network's difficulty requirements.

[Nonce in cryptography](https://en.wikipedia.org/wiki/Cryptographic_nonce)

Nonce in cryptography means “number once,” and this arbitrary number is only used one time in a cryptographic communication. A nonce often includes a timestamp, which means it is only valid during a specific amount of time, to help ensure that it is only used once.

## REFERENCE

[Wagmi SIWE example with NextJs](https://1.x.wagmi.sh/examples/sign-in-with-ethereum) -> `withIronSessionApiRoute` is deprecated (https://github.com/vvo/iron-session/issues/679)

### To do

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
