const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using StaticMusic? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('StaticMusic','https://cdn.discordapp.com/avatars/584723604181221396/d9793fc78946dc259170dd17869266ea.webp')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add me to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=803840908125667369&permissions=8&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};