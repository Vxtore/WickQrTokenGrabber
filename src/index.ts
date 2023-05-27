import { BotClient } from "./structs/BotClass";
import { Client, GatewayIntentBits } from "discord.js";

export const sharedClient = new BotClient(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
    ],
  })
);

export const allSockets = new Map<string, any>();


sharedClient.client.on("ready", async () => {
  console.log(`Anti-cash is complete.`);
  process.on('unhandledRejection', (reason: any, p: Promise<any>) => {
    console.log('\n\n\n\n\n[🚩 ANTI-CASH] unhandled Rejection:'.toUpperCase());
    console.log(reason.stack ? String(reason.stack) : String(reason));
    console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase());
  });
  process.on("uncaughtException", (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    console.log('\n\n\n\n\n\n[🚩 ANTI-CASH] uncaught Exception'.toUpperCase());
    console.log(err.stack ? err.stack : err)
    console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase());
  })
  process.on('uncaughtExceptionMonitor', (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    console.log('[🚩 ANTI-CASH] uncaught Exception Monitor'.toUpperCase());
  });
  process.on('exit', (code: number) => {
    console.log('\n\n\n\n\n[🚩 ANTI-CASH] exit'.toUpperCase());
    console.log(code.toString());
    console.log('=== exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('multipleResolves', (type: string, promise: Promise<any>, reason: any) => {
    console.log('\n\n\n\n\n[🚩 ANTI-CASH] multiple Resolves'.toUpperCase());
    console.log(type, promise, reason);
    console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase());
  });
});