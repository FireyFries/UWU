const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.delete();
    }, 5000);
    setTimeout(async function() {
        const r = await message.reply("Hunt Time! :apple:");
        setTimeout(function() {
            r.delete();
        }, 10000);
    }, 12000)
}

module.exports.help = {
    name: "h"
}
