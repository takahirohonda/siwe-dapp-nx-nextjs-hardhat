# Managing ethereum data and solidity algorism

In a lot of languages, we usually think an entity as an object. In a blockchain, entities are represented as uint.

Instead of thinking an entity like this...

```js
{
  type: 'Magician',
  properties: [12, 23, 12, 11],
  level: 3
}
```

The block in the binary represents information regarding the entity.

```text
x0..... 00 010101 011101 111011 001101 11
```

In solidity, we need to do a lot of binary operations to be efficient without overflowing the block and loosing data. This leads to less on-chain storage and computation cost.

![example](./img/solidity-code-example.png)

## Logic to get properties...

For example, getting strength...

`uint strength = (gameCharacter >> 2) & 0x1F;`

01100 01100 01100 01110 01 we right shift. This drops the first 2 digits.

00 01100 01100 01100 01110

0x1F is 11111

Then we do bitwise comparison

00 01100 01100 01100 01110
00 00000 00000 00000 11111

This results in 00 00000 000000 00000 01110 `parseInt('00000000000000000001110', 2) = 14`
