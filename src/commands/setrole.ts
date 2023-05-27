import {
  SlashCommandBuilder,
  PermissionsBitField,
  ChatInputCommandInteraction,
} from "discord.js";
import { config, saveRoleConfig } from "../util/config";
import * as embeds from "../util/embeds";

// Array de IDs permitidos para ejecutar el comando
import { ownerIDS } from "../config.json";

export default {
  name: "setrole",
  data: new SlashCommandBuilder()
    .setName("setrole")
    .setDescription("Establezca un rol para un usuario verificado.")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("El rol a dar al usuario.")
        .setRequired(true)
    ),
  async callback(interaction: ChatInputCommandInteraction) {
    // Verifica si el ID del usuario interactuante está en la lista de IDs permitidos
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
