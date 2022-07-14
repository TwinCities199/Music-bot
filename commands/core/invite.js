module.exports = {
    name: 'invite',
    aliases: ['inv'],
    utilisation: '{prefix}invite',

    execute(client, message) {
        message.channel.send('Invte me using this link: https://discord.com/api/oauth2/authorize?client_id=995605444213080215&permissions=8&scope=bot');
    },
};