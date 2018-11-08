const Discord = require('discord.js');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;

client.once('ready', () => {
    console.log('Ready!');
});

client.login('your-token-goes-here');

// test every minute
const minuteRepeater = new CronJob('*/1 * * * *', function() {
 console.log('Minutelijkse herinnering');
});
console.log('minuteRepeater->set');
minuteRepeater.start();

client.on('message', message => {
    console.log(message.content);
});

{808}
