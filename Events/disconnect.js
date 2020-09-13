exports.execute = async (message) => {
  console.log(`${bot.user.username} Just Disconnected!`);
  };
  exports.conf = {
    event: "disconnect"
}