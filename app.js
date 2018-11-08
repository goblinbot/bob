const Discord = require('discord.js');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;
const config = require('./config/config.js');

client.once('ready', () => {
    console.log('BOB online!');
});

if (config) {
    client.login(config.sys.token);
} else {
    console.error('!! config missing');
}


// test every minute
const minuteRepeater = new CronJob('*/1 * * * *', function() {
//  console.log('Minutelijkse herinnering');
});
// console.log('minuteRepeater->set');
minuteRepeater.start();

client.on('message', message => {
    console.log(message.content);

    if (message.content === 'Bob is stom') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('@everyone');
    }
});
