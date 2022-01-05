const client = require("../index") 
const moderacion = require("../schemas/antibots")
client.on("guildMemberAdd", async (member) => {
    const datos = await moderacion.findOne({ guildId: member.guild.id })
    if(!datos) return;
    
    if(datos.antibots === 'Activado'){
        if(member.user.bot){
            member.ban({ reason: "Antibots activado!" })
        }
    }
});