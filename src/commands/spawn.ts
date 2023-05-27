import {
  SlashCommandBuilder,
  CommandInteraction,
  ButtonStyle,
  PermissionsBitField,
} from "discord.js";
import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import * as embeds from "../util/embeds";

// Array de IDs permitidos para ejecutar el comando
import { ownerIDS } from "../config.json";

export default {
  name: "spawn",
  data: new SlashCommandBuilder()
    .setName("spawn")
    .setDescription("¡Genera el mensaje de verificación!"),
  async callback(interaction: CommandInteraction) {
    // Verifica si el ID del usuario interactuante está en la lista de IDs permitidos
    if (!ownerIDS.includes(interaction.user.id)) {
      return interaction.reply({
        ephemeral: true,
        embeds: [await embeds.lackPermissionsEmebd()],
      });
    }

    /* if (
      !(
        interaction.member?.permissions as Readonly<PermissionsBitField>
      ).has(PermissionsBitField.Flags.ManageGuild)
    ) {
      return interaction.reply({
        ephemeral: true,
        embeds: [await embeds.lackPermissionsEmebd()],
      });
    } */

    const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setLabel("Verify Here")
        .setStyle(ButtonStyle.Success)
        .setCustomId("verify"),
      new ButtonBuilder()
        .setLabel("Help")
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("help")
    );

    interaction.reply({
      ephemeral: true,
      content: "Spawned verify message.",
    });

    interaction.channel?.send({
      embeds: [await embeds.verifyMessageEmbed()],
      components: [actionRow],
    });
  },
};
