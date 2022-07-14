const Discord = require('discord.js');
const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const express = require('express');
const server = express();
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Server on'))
app.listen(port, () =>
console.log('App is listening at http://localhost:${port}')
);

global.client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login("OTk1NjA1NDQ0MjEzMDgwMjE1.GqEWqY.wBGrYY3yVXipdLBeYw0CJhwG_tfn1bugfl-OQQ");