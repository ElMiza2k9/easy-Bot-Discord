const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs")

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./util/handler/client")(client);
require("./conexion")

///////////////////////////////HANDLER SLASHCOMMANDS/////////////////////////////////

client.slashcommands = new Collection();
const slashcommandsFiles = readdirSync("./slashcmds").filter(file => file.endsWith("js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmds/${file}`)
    console.log(`Slash command: ${file} cargado`)
    client.slashcommands.set(slash.data.name, slash)
}

///////////////////////////////HANDLER SLASHCOMMANDS/////////////////////////////////

const Distube = require("distube")
client.distube = new Distube.default(client)

for(const file of readdirSync('./eventos_distube/')){
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3)
        let fileContents = require(`./eventos_distube/${file}`)
        client.distube.on(fileName, fileContents.bind(null, client))
    }
}

//anticrash

process.on("unhandledRejection", (reason, p) => {
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
    // console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch");
    // console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
    // console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
    console.log(" [antiCrash] :: Multiple Resolves");
    // console.log(type, promise, reason);
}); 

client.login(client.config.token);