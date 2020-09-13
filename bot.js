const Discord = require("discord.js");
const bot = global.client;
const {Token } = require("./Settings/Settings.json");
const Canvas = require('canvas');
const PREFIX = "s!"
const client = new Discord.Client();
const config = require('./config.json')
  client.config = config;
bot.events = new Discord.Collection();









const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');


	let fontSize = 70;

	do {

		ctx.font = `${fontSize -= 10}px sans-serif`;

	} while (ctx.measureText(text).width > canvas.width - 300);


	return ctx.font;
};



client.on("ready", () => {
    console.log("Bot is up and running!");

    const statuschaning= [
      `${client.users.cache.size} users`,
      `${client.guilds.cache.size} guilds`,
      `${client.channels.cache.size} channels`
  ]

  let i = 0;
  setInterval(() => client.user.setActivity(`${statuschaning[i++ % statuschaning.length]} | ${PREFIX}help`, { type: 'WATCHING'}), 5000)

});






   client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
  
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
  
    const background = await Canvas.loadImage('./wallpaper.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);
  

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
  
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
  
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
  
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
    channel.send(`Welcome to the server, ${member}!`, attachment);
  });



  client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'leaves');
    if (!channel) return;
  
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
  
    const background = await Canvas.loadImage('./wallpaper2.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Goodbye,', canvas.width / 2.5, canvas.height / 3.5);
  

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
  
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
  
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
  
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
    channel.send(`Goodbye, ${member}!`, attachment);
  });



  client.on('guildCreate', guild => {
    let channelID
        let channels = guild.channels.cache
        channelLoop:
        for (let c of channels) {
          let channelType = c[1].type
          if (channelType === "text") {
              channelID = c[0]
              break channelLoop
            }
        }  
        let channel = client.channels.cache.get(guild.systemChannelID || channelID)
  
        channel.send("Thanks for adding me to your server for a list of my commands do s!help")
        channel.send("Join me in my server https://discord.gg/KWF8tcT");
  })

  client.snipes = new Map()

    
  
  client.on('message', msg => {

   



    
    if (msg.content === 'stars') {
        msg.react('✅')
        msg.channel.send('...');
    }

    if (msg.content == "<@!728001463166697534>") {

      msg.channel.send(`***My prefix is ${PREFIX}***`)
      
  }
});














bot.snipes = new Map() // whatever you define your client as

bot.on('messageDelete', function(message, channel){
 bot.snipes.set(message.channel.id,{
  content: message.content, 
  author: message.author, 
  image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})




bot.login(global.Settings.Token);