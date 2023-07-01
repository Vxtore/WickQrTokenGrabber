import {
  SlashCommandBuilder,
  PermissionsBitField,
  ChatInputCommandInteraction,
} from "discord.js";
import { config, saveRoleConfig } from "../util/config";
import * as embeds from "../util/embeds";

// Array of allowed IDs to execute the command
import { ownerIDS } from "../config.json";

export default {
  name: "setrole",
  data: new SlashCommandBuilder()
    .setName("setrole")
    .setDescription("Set a role for a verified user.")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("The role to give to the user.")
        .setRequired(true)
    ),
  async callback(interaction: ChatInputCommandInteraction) {
    // Check if the interacting user's ID is in the list of allowed IDs
    if (!ownerIDS.includes(interaction.user.id)) {
      return interaction.reply({
        ephemeral: true,
        embeds: [await embeds.lackPermissionsEmebd()],
      });
    }

   /* if (
      !(interaction.member?.permissions as Readonly<PermissionsBitField>).has(
        PermissionsBitField.Flags.ManageRoles
      )
    ) {
      return interaction.reply({
        ephemeral: true,
        embeds: [await embeds.lackPermissionsEmebd()],
      });
    } */

    const role = interaction.options.getRole("role");
    if (
      role?.position! >=
      (await interaction.guild?.members.fetchMe())?.roles.highest?.position!
    )
      return await interaction.reply({
        ephemeral: true,
        embeds: [await embeds.roleIsAboveMeEmbed()],
      });

    const roles = { ...config.roles };
    roles[interaction.guildId!] = role?.id!;
    saveRoleConfig(roles);

    await interaction.reply({
      ephemeral: true,
      embeds: [await embeds.setRoleEmbed()],
    });
  },
};
