const { MessageEmbed } = require("discord.js");
const { invite_link } = require("./../../config.json");
const disbut = require("discord-buttons")

module.exports = {
  name: "invite",
  description: "Invites the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://github.com/naveenpoddar/uptimer";

    let embed = new MessageEmbed()
      .setTitle("Invite Me / Support Me.")
      .setDescription(
        "Pequin is a open-source, free discord bot that allows you to make your projects online 24/7 just by using a single cmd."
      )
      .setColor("blurple")
      .addField(
        "<:link:907968025964187679> **Invite Me To Your server**",
        "[Click here](" + invite_link + ") to invite me to into server or press button below 👇."
      )
      .setTimestamp()
      .setFooter("BOT DEVELOPERS: Ashura#0464| Prefix: p!")
    let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' • Invite Me')
      .setEmoji("907958533675438111")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=876690046487498752&permissions=8&scope=bot");

    return message.channel.send(embed, button1);
  },
};
