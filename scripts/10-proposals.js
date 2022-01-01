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
        const amount = 420_000;
        await voteModule.propose(
            "Should the DAO mint an additional " + amount + " tokens into the treasury?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "mint",
                        [
                            voteModule.address,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),
                    toAddress: tokenModule.address,
                },
            ]
        );

        console.log("✅ Successfully created proposal to mint tokens");
    } catch (error) {
        console.error("failed to create first proposal", error);
        process.exit(1);
    }

    try {
        const amount = 6_900;
        await voteModule.propose(
            "Should the DAO transfer " +
            amount + " tokens from the treasury to " +
            process.env.WALLET_ADDRESS + " for being awesome?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "transfer",
                        [
                            process.env.WALLET_ADDRESS,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),

                    toAddress: tokenModule.address,
                },
            ]
        );

        console.log(
            "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
        );
    } catch (error) {
        console.error("failed to create second proposal", error);
    }
})();