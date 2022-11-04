const Discord = require('discord.js');

module.exports = {
  name: "msg",
  aliases: ["whats", "msj"],
  desc: "Sirve para enviar un mensaje por whats",
  run: async (client, message, args, prefix) => {
if(!args[0]) return message.channel.send(`Necesitas necesias mencionar a alguien`)

if(!args[1]) return message.channel.send(`Necesitas necesias poner un mensaje`)

let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
    if (!usuario) return message.reply(`❌ **No se encontro el usuario al que mensionaste**`);

      message.delete()
    
      const embed = new Discord.EmbedBuilder()
      .setTitle(`📱​ | WhatsApp`)
      .setDescription(`**De: ${message.author}
Para: <@${usuario.id}>
Mensaje:  ${args[1]}**`)
      .setColor("#008f39")
      .setThumbnail(`https://www.unipile.com/wp-content/uploads/2022/02/icone-logo-whatsapp-vert.png`)
  
        message.channel.send({embeds:[embed]})
    }
  } 
