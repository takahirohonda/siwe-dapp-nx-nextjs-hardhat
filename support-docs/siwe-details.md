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
