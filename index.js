
    const Discord = require('discord.js')
    const bot = new Discord.Client()
    
    bot.on('ready', function () {
      console.log("Je suis connecté !")
    })
    
    bot.login('NTA2MDkyNDQ3OTg2NzQ1MzU0.DrdIEg.JYNDTurza5g7RYiTbkqc4kbA9RI')
    bot.on('message', message => {
        if (message.content === 'ping') {
          message.reply('pong !')
        }
      })
      bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
          return channel.send('Bienvenue dans la TEAM ! ' + member.displayName)
        }).catch(console.error)
        
      })
   