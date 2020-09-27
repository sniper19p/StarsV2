const Discord = require("discord.js");
const bot = global.client;
const {Token } = require("./Settings/Settings.json");

const PREFIX = "p!"
const client = new Discord.Client();
const config = require('./config.json')
  client.config = config;
bot.events = new Discord.Collection();















client.on("ready", () => {
    console.log("Bot is up and running!");


    const statuschaning= [
      `p!ticket to open ticket`,
      `tickets`,
      `Up and running`
  ]

  let i = 0;
  setInterval(() => client.user.setActivity(`${statuschaning[i++ % statuschaning.length]} | ${PREFIX}help`, { type: 'WATCHING'}), 5000)

});

client.login(Token);
bot.login(global.Settings.Token);