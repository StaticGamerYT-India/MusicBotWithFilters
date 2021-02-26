const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botinfo`,
  description: `Gives you the info of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#F0EAD6")
    .setTitle("Here is a list for all Bot-Lists this Bot is on!")
   .addField("Youtube", "https://www.youtube.com/channel/UCSqkMUjNAYX9m15ZMF60ClA?sub_confirmation=1")
    .addField("Discord1","https://discord.gg/RzxWmYyRNe")
    .addField("Discord2","https://discord.gg/d5ZzH4jU4r")
    .addField("Discord3","https://discord.gg/p9qpsaD")
    );

  }
}