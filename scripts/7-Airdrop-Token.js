import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule(
    "0xEE20e7BACcEaD8b853DED5f20cEAeE21b0733439",
);

const tokenModule = sdk.getTokenModule(
    "0xf2C02F19aFB15c43a7ED29b65ABf250D7b9f2350",
);

(async () => {
    try {
        const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

        if (walletAddresses.length === 0) {
            console.log(
                "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
            );
            process.exit(0);
        }

        const airdropTargets = walletAddresses.map((address) => {
            const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

            const airdropTarget = {
                address,
                amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
            };

            return airdropTarget;
        });

        console.log("🌈 Starting airdrop...")
        await tokenModule.transferBatch(airdropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    } catch (err) {
        console.error("Failed to airdrop tokens", err);
    }
})();