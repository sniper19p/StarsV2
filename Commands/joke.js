
const ms = require('ms');
const {
    MessageEmbed,
    Message
} = require('discord.js')
const fetch = require("node-fetch")
module.exports.run = async(bot, message, args) => {
        let msg = await message.channel.send("Generating...")

        fetch('https://apis.duncte123.me/joke')
            .then(res => res.json()).then(body => {
                if (!body) return message.channel.send("Something went wrong! Please try again or join our support server if this error still occurs.")
                console.log(body)
                let embed = new MessageEmbed()
                    .setColor("RED")
                    .setTitle(body.data.title)
                    .setURL(body.data.url)
                    .setDescription(body.data.body)
                    .setTimestamp()

                msg.edit(embed)
            })
    
};

exports.conf = {
    commands: ["Joke", "joke"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "joke"
  }