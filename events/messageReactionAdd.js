const client = require("../index")
const ILuckMsg = '920326141393395762-920337229115699220'
const ILuckEmoji = '<:blackverify:920332120541511750>'
const ILuckRol = '920338200281624597'
// Eventos
client.on("messageReactionAdd", (messageReaction, user) => { // Evento de messageReactionAdd
if(ILuckEmoji !== messageReaction.emoji.id || ILuckMsg !== messageReaction.message.id) return;// En caso de que no sea el mensaje o la reaccion retornamos
var ILuck = messageReaction.message.guild.members.cache.get(user.id) // Obtenemos al miembro
ILuck.roles.add(ILuckRol) // Le damos el rol
}) 