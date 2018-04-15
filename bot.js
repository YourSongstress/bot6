
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', function(message) {
	let guild = message.guild;
	let channel = message.guild;
	
    if (message.content === "$boo"&&message.channel.id==="423506807823138822") { 
      var interval = setInterval (function () {
        message.channel.send("beep")
      }, 2*1000); 
      var interval = setInterval (function () {
        message.channel.send("p!ping")
      }, 90*1000); 
    }
	if(message.content === "$stop")
	{
		client.destroy();
		setTimeout(function() {
      client.login('');
    }, 5*1000);
		
	}
			
});


client.login(process.env.BOT_TOKEN);
