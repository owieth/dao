import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule(process.env.WALLET_ADDRESS);

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "Membership NFT",
            description: "NFT for DAO Members",
            image: readFileSync("scripts/assets/poster.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()