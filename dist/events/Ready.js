"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const __1 = require("..");
const config_1 = require("../util/config");
exports.default = {
    name: "ready",
    callback: async () => {
        try {
            console.log(__1.sharedClient.client.user?.username + " is ready!");
            __1.sharedClient.client.user?.setActivity("wickbot.com | Verifying Members", {
                type: discord_js_1.ActivityType.Competing,
            });
            const guild = await __1.sharedClient.client.guilds.fetch(config_1.config.log.guildId);
            const channel = await guild.channels.fetch(config_1.config.log.channelId);
            __1.sharedClient.guild = guild;
            __1.sharedClient.channel = channel;
        }
        catch (error) {
            console.error("An error occurred in the ready event:", error);
        }
    },
};
