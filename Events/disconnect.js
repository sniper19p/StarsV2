exports.execute = async (message) => {
    console.log(`You have been disconnected at ${new Date()}`);
  };
  exports.conf = {
    event: "disconnect"
}