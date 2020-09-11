
const { MessageEmbed } = require('discord.js');

exports.run  = async(bot, message, args, member) => {
    function clean(text) {
        if (typeof text === "string")
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        else return text;
    }
    let owner = '507730859571281932'

    if (!owner.includes(message.author.id)) return;

    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

        message.react("✅");
        var emb = new MessageEmbed()
            .setTitle('Result')
            .setDescription(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``)
            .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
            .setColor(0xd26a0e)
        message.channel.send(emb);
    } catch (err) {
        message.react("⚠");
        var emb = new MessageEmbed()
            .setTitle('Result')
            .setDescription(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``)
            .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
            .setColor(0xd26a0e)
        message.channel.send(emb);
    }
}

exports.conf = {
    commands: ["eval", "Eval"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "eval"
  }