module.exports = {
    app: {
        px: ',',
        token: 'OOTk1NjA1NDQ0MjEzMDgwMjE1.GqEWqY.wBGrYY3yVXipdLBeYw0CJhwG_tfn1bugfl-OQQ',
        playing: 'Playing Music on Nodoky (link in bio)'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
