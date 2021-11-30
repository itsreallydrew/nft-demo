# NFT-NAMZ Smart Contract

This is the smart contract that the NFT-NAMZ website interacts with. The code is written in solidity. I am grateful to the team at buildspace for providing a path for devs to learn solidity in an effective manner.

### Links

- Live Site URL: [Contract on Etherscan](https://rinkeby.etherscan.io/address/0x9beeb2817c7c94d1f11eea7710691e653915c54a#code)

### What I learned

I learned how to encode NFTs and store the data on-chain. This was very interesting and exposed me to some new techniques that I was nor previously aware of. I am excited to be able to expand upon this knowledge and apply it to situations in the real world.

The code below is something I am the most proud of. It demonstrates how I was able to break up the SVG file to for random generation of the background color and text color. I used this as an opportunity to challenge myself.

```javascript
    string svgPartOne =
        "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: ";

    string svgPartTwo =
        "; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='";

    string svgPartThree =
        "' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";


            string memory finalSvg = string(
            abi.encodePacked(
                svgPartOne,
                randomTextColor,
                svgPartTwo,
                randomBackgroundColor,
                svgPartThree,
                combinedWord,
                "</text></svg>"
            )
        );
```

### Continued development

I wrote a public function that allows the frontend access the total number of NFTs minted. Unfortunately I didn't quite figure out how to make that number readable as I forgot that the number is returned in hexadecimal format. I also want to learn where and when to use a smaller uints instead of the typical uint (uint256) as this can optimize my code and reduce gas fees. This was a great experience I will continue to build upon it.
