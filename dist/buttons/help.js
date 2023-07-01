"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    id: "help",
    callback: (interaction) => {
        interaction.reply({
            ephemeral: true,
            content: "https://wickbot.com/support",
        });
    },
};
