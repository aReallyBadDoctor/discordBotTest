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
  if (message.substring(0, 5) == '!toto') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    
    for (i = 0; i < args.length; i++){
      if args[i] == ':ok_hand:':
        bot.sendMessage({
          to channelID,
          message: "you fuckin got me bro"
        });
    }
    
    args = args.splice(1);
    switch(cmd.toLowerCase()) {
      case 'help':
        //this will print the help statement
        bot.sendMessage({
          to: channelID,
          message: "help:/nusage: !toto help/ndisplays this message/ngo:/nusage: !toto go/nsends a meme about a very good song/nadd:/nusage: !toto add <picture_url>/nadds something to the queue/nrecommend:/nusage: !toto recommend/nrecommends a version of a really good song/n"
        });
      case 'add':
        //this will place second argument in judgment queue
      case 'go':
        //this will make a meme go
      case 'recommend'
        //this will give a recomendation on what to listen to
