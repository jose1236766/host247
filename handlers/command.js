
const fs = require('fs');
module.exports = async (client) => {
    try {
        console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║   Bienvenido al Handler /-/ por dewstouh#1088 /-/   ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.yellow)
        let comandos = 0;
        
        client.comandos = new Discord.Collection();

        fs.readdirSync("./comandos/").forEach((carpeta) => {
            const commands = fs.readdirSync(`./comandos/${carpeta}`).filter((archivo) => archivo.endsWith(".js"));
            for (let archivo of commands){
                let comando = require(`../comandos/${carpeta}/${archivo}`);
                client.comandos.set(comando.data.name, comando);
            arrayComandos.push(comando.data.toJSON());
            console.log(`✅ | Comando ${archivo.replace(/.js/, '')} cargado`.yellow);
            comandos++;
                if(comando.name) {
                    client.commands.set(comando.name, comando);
                    comandos++
                } else {
                    console.log(`COMANDO [/${carpeta}/${archivo}]`, `error => el comando no está configurado`.brightRed)
                    continue;
                }
                if(comando.aliases && Array.isArray(comando.aliases)) comando.aliases.forEach((alias) => client.aliases.set(alias, comando.name));
            }
        });
        await new Discord.REST({version: 10}).setToken(config.token).put(
            Discord.Routes.applicationGuildCommands('934263709075906590', '955969818782216233'), {
                body: arrayComandos
            }
        );
        console.log(`${comandos} Comandos Cargados`.brightGreen);
    } catch(e){
        console.log(e)
    }
}