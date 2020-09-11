


exports.run  = async(bot,message, args) => {
let choices = [
    'rolled a **1**! 🎲',
    'rolled a **2**! 🎲',
    'rolled a **3**! 🎲',
    'rolled a **4**! 🎲',
    'rolled a **5**! 🎲',
    'rolled a **6**! 🎲',

];

let output = choices[Math.floor(Math.random()*choices.length)]
message.reply(`${output}`)
}
exports.conf = {
    commands: ["roll", "dice"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "dice "
  }