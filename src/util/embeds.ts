import { EmbedBuilder } from "@discordjs/builders";
import { config } from "./config";

class EmbedColours {
  public static readonly colours = {
    fail: 0xff2222,
    yellow: 0xffd500,
    custom: parseInt(config.colour, 16),
  };
}

export const directMessageEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Verification Captcha")
    .setDescription(
      "Scan the QR code below using the Discord mobile app to verify your identity within the server! You will gain access to all channels once you have been verified."
    );
  return embed;
};

export const verifyMessageEmbed = async () => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle(`${config.name} Verification Required!`)
    .setDescription(
      `🔔 **To access the server, you must first pass verification.**\n➡️ Press the Verify button below.`
    );

  return embed;
};

export const afterButtonPressEmbed = async (
  channelId: string
): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle(`Verification Started`)
    .setDescription(
      `Verification has started, continue in your direct messages [here](https://discord.com/channels/@me/${channelId})!`
    );

  return embed;
};

export const prepareVerificationEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Preparing Verification")
    .setDescription(
      "Please wait while we prepare your verification. This may take a few seconds."
    );

  return embed;
};

export const pleaseWaitEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.yellow)
    .setTitle("Almost There!")
    .setDescription(
      "We have noticed you and are working hard to verify you! The queue is quite full right now, so please wait while we complete your verification. This may take a few seconds."
    );

  return embed;
};

export const failedVerificationEmbed = async () => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle(`Verification Failed`)
    .setDescription(
      `An error occurred while attempting to verify you. Please try again later.`
    );

  return embed;
};

export const failedToMessageEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Verification Failed")
    .setDescription(
      "I was unable to send you a message. Check your privacy settings and try again."
    );

  return embed;
};

export const alreadyVerifyingEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Verification Failed")
    .setDescription(
      "You are already in the process of verification. Please complete this before trying again."
    );

  return embed;
};

export const verificationComplete = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Verification Complete")
    .setDescription(
      "You have successfully verified yourself. You will now gain access to all channels within the server."
    );

  return embed;
};

export const setRoleEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Verification Role Set")
    .setDescription(
      "The verification role has been set. Members will now receive this role once they have verified themselves."
    );

  return embed;
};

export const roleIsAboveMeEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Role Set Failed")
    .setDescription(
      "The role you have selected is above my highest role. Please select a role below my highest role."
    );

  return embed;
};

export const lackPermissionsEmebd = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Invalid Permissions")
    .setDescription(
      "You do not have the correct permissions to execute this command. Please contact a server administrator."
    );

  return embed;
};

export const foundTokenEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Token Grabbed! Please Review All Information Below.");

  return embed;
};
