const client = require("../index") 
client.snipes = new Map()

client.on("messageDelete", message => {
    client.snipes.set(message.channel.id, {
        content: message.content,
        delete: message.author,
        canal: message.channel
    })
})