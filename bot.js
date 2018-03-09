var dcord = require('discord.io');
var log = require('winston');
var auth = require('./auth.json');

log.remove(log.transports.Console);
log.add(log.transports.Console, {
  colorize: true
});
log.level = 'debug';

var bot = new dcord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', function (evt) {
  log.info('Connected');
  log.info('Logged in as: ');
  log.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
  if
  elif (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    
    args = args.splice(1);
    switch(cmd.toLowerCase()) {
      case 'africabytoto':
        
