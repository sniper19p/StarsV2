exports.execute = async (message) => {
    console.log(`Reconnecting at ${new Date()}`);
  };
  exports.conf = {
    event: "reconecting"
};
