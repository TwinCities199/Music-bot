module.exports = {
    name: 'support',
    aliases: ['sup'],
    utilisation: '{prefix}support',

    execute(client, message) {
        message.channel.send('Join our support server: https://discord.gg/vZQY2SNVyt');
    },
};