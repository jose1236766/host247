
const Discord = require('discord.js');

module.exports = {
  name: "me",
  aliases: ["m"],
  desc: "Sirve para hacer una accion",
  run: async (client, message, args, prefix) => {

      if(!args[0]) return message.channel.send(`Necesitas poner una accion`)

      message.delete()
    
      const embed = new Discord.EmbedBuilder()
      .setTitle(`👋 | Me`)
      .setDescription(`Accion:  **${args.join(" ")}**`)
        .setColor(client.color)
  
        message.channel.send({embeds:[embed]})
    }
  } 
