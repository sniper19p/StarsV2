exports.execute = bot => {
  console.log(`${bot.user.username} Just Disconnected!`);
  };
  exports.conf = {
    event: "disconnect"
}