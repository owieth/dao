import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0xf2C02F19aFB15c43a7ED29b65ABf250D7b9f2350",
);

const voteModule = sdk.getVoteModule(
    "0x41a653a80D700553b959861Ed5738f4BCf9690ac"
);

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);

        console.log(
            "Successfully gave vote module permissions to act on token module"
        );
    } catch (error) {
        console.error(
            "failed to grant vote module permissions on token module",
            error
        );
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(
            process.env.WALLET_ADDRESS
        );

        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90 = ownedAmount.div(100).mul(90);

        await tokenModule.transfer(
            voteModule.address,
            percent90
        );

        console.log("✅ Successfully transferred tokens to vote module");
    } catch (err) {
        console.error("failed to transfer tokens to vote module", err);
    }
})();
