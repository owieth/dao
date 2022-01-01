import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
    "0xf7C0835dBfF48ce53133bc618a16AAB35dDA2b60",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "DAO's Proposals",
            votingTokenAddress: "0xf2C02F19aFB15c43a7ED29b65ABf250D7b9f2350",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.error("Failed to deploy vote module", err);
    }
})();
