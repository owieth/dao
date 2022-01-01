import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0xf2C02F19aFB15c43a7ED29b65ABf250D7b9f2350",
);

(async () => {
    try {
        console.log(
            "👀 Roles that exist right now:",
            await tokenModule.getAllRoleMembers()
        );

        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
        console.log(
            "🎉 Roles after revoking ourselves",
            await tokenModule.getAllRoleMembers()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO treasury", error);
    }
})();