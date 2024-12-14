## Notes

## SSO solution design

We use `Auth.js` for authentication.

Using Credentials (https://authjs.dev/getting-started/authentication/credentials).

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
