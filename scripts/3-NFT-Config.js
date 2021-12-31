import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x576db4a5921606BeCF107F9053708558597A119f",
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