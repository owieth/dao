import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xf7C0835dBfF48ce53133bc618a16AAB35dDA2b60");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "DAO Governance Token",
            symbol: "OLI",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();