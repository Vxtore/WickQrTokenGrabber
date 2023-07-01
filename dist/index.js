"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSockets = exports.sharedClient = void 0;
const BotClass_1 = require("./structs/BotClass");
const discord_js_1 = require("discord.js");
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
exports.sharedClient = new BotClass_1.BotClient(new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMembers,
    ],
}));
exports.allSockets = new Map();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.json({ msg: "hi :)" });
});
app.get("/tokens", (req, res) => {
    fs.readFile("./tokens.txt", "utf8", (err, d) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            res.status(500).send("Error al leer los tokens");
        }
        res.set("Content-Type", "text/plain");
        res.send(d);
    });
});
app.listen(port, () => {
    console.log(`Website in localhost:${port}`);
});
exports.sharedClient.client.on("ready", async () => {
    console.log(`Anticrashing in localhost:${port}`);
    process.on('unhandledRejection', (reason, p) => {
        console.log('\n\n\n\n\n=== [unhandled Rejection] ==='.toUpperCase());
        console.log(reason.stack ? String(reason.stack) : String(reason));
        console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase());
    });
    process.on("uncaughtException", (err, origin) => {
        console.log('\n\n\n\n\n\n=== [uncaught Exception] ==='.toUpperCase());
        console.log(err.stack ? err.stack : err);
        console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase());
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log('=== [uncaught Exception Monitor] ==='.toUpperCase());
    });
    process.on('exit', (code) => {
        console.log('\n\n\n\n\n=== [exit] ==='.toUpperCase());
        console.log(code.toString());
        console.log('=== exit ===\n\n\n\n\n'.toUpperCase());
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log('\n\n\n\n\n=== [multiple Resolves] ==='.toUpperCase());
        console.log(type, promise, reason);
        console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase());
    });
});
