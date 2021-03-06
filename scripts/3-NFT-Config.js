import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xEE20e7BACcEaD8b853DED5f20cEAeE21b0733439",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Member of DAO",
                description: "This NFT will give you access to the DAO!",
                image: readFileSync("scripts/assets/poster.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()