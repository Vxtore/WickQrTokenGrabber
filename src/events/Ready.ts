import { Console } from "console";
import { ActivityType } from "discord.js";
import { sharedClient } from "..";
import { config } from "../util/config";

export default {
  name: "ready",
  callback: async () => {
    try {
      console.log(sharedClient.client.user?.username + " is ready!");
      sharedClient.client.user?.setActivity("wickbot.com | Verifying Members", {
        type: ActivityType.Competing,
      });

      const guild = await sharedClient.client.guilds.fetch(config.log.guildId);
      const channel = await guild.channels.fetch(config.log.channelId);

      sharedClient.guild = guild;
      sharedClient.channel = channel;
    } catch (error) {
      console.error("An error occurred in the ready event:", error);
    }
  },
};
