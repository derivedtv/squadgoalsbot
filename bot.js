const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
  
    client.channels.get("442359380386512916").send({embed: {
        color: 0xff040b,
        author: {
          name: `New User | ${member.user.tag}`,
          icon_url: member.user.avatarURL
        },
        fields: [{
            name: "__**Username:**__",
            value: `${member.user}`,
            inline: true,
          },
          {
            name: "__**Account Created:**__",
            value: `${member.user.createdAt}`,
            inline: true,
          }
        ],
        footer: {
          text: "© ok hand#6327",
        }
      }
      });
    
      var joinrole = member.guild.roles.find('name', 'Member');
      
      member.addRole(joinrole)
    });

    client.on('message', function(message) {
        var args = message.content.split(" ");
        var cmd = args[0];
      
        args = args.splice(1);
      
             switch(cmd) {

case "!win":
let winpic = args.slice(0).join(' ');
                
if(!winpic)
return message.reply("Please include a screenshot link or gfycat link.")
                
client.channels.get("441982577671405569").send("**Victory Royale! **\n" + winpic)
message.delete();
message.reply("Good job on the win! Check <#424336735179374612> to see it!")
break;

case "!purge":
let messagenumber = args.slice(0).join(' ');

if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
return message.reply ("You do not have the required permissions to use this!")

if(!messagenumber)
return message.reply("**Please include a number of messages to delete! (1-99)**\nExample: ``!purge 1``\n__**Make sure to add 1 more than the original amount.**__")

message.delete();

let messagecount = parseInt(messagenumber);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
break;

case "!ping":
message.reply("Pong!")
break;

case "!kick":
if(!message.member.roles.some(r=>["Admin", "Moderator", ":ok_hand:", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();

    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

      let kreason = args.slice(1).join(" ");
    if(!kreason)
      return message.reply("Please indicate a reason for the kick!");

      let kkreason = args.slice(1).join(' ');
      member.kick(kreason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      client.channels.get("442360213467824128").send({embed: {
        color: 0xff040b,
        author: {
          name: `Ban | ${member.user.tag} `,
          icon_url: member.user.avatarURL
        },
        fields: [{
            name: "User",
            value: `${member.user}`,
            inline: true,
          },
          {
            name: "Moderator",
            value: `${message.author}`,
            inline: true,
          },
          {
            name: "Reason",
            value: `${kreason}`,
            inline: true,
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `ID: ${member.user.id}`,
        }
      }
    });
    message.channel.send(`***${member.user.tag} was kicked.***`);
break;

case "!ban":
let bmember = message.mentions.members.first();

  if(!message.member.roles.some(r=>["Admin", ":ok_hand:", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
  
  if(!bmember)
    return message.reply("Please mention a valid member of this server");
  if(!bmember.bannable) 
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let breason = args.slice(1).join(' ');
  if(!breason)
    return message.reply("Please indicate a reason for the ban!");
  
  bmember.ban(breason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    client.channels.get("442360213467824128").send({embed: {
      color: 0xff040b,
      author: {
        name: `Ban | ${bmember.user.tag} `,
        icon_url: bmember.user.avatarURL
      },
      fields: [{
          name: "User",
          value: `${bmember.user}`,
          inline: true,
        },
        {
          name: "Moderator",
          value: `${message.author}`,
          inline: true,
        },
        {
          name: "Reason",
          value: `${breason}`,
          inline: true,
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `ID: ${bmember.user.id}`,
      }
    }
  });
  message.channel.send(`***✅ ${bmember.user.tag} was banned!***`);
break;

case "!warn":
let members = message.mentions.members.first();

  if(!message.member.roles.some(r=>["Admin", ":ok_hand:", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
  
  if(!members)
    return message.reply("Please mention a valid member of this server!");

  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.reply("Please indicate a reason for the warn!");
  
  message.channel.send(`***✅ ${members.user.tag} has been warned.***`);
  client.channels.get("442360213467824128").send({embed: {
    color: 0xff040b,
    author: {
      name: `Warn | ${members.user.tag} `,
      icon_url: members.user.avatarURL
    },
    fields: [{
        name: "User",
        value: `${members.user}`,
        inline: true,
      },
      {
        name: "Moderator",
        value: `${message.author}`,
        inline: true,
      },
      {
        name: "Reason",
        value: `${reason}`,
        inline: true,
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `ID: ${members.user.id}`,
    }
  }
});
  message.mentions.users.first().send(`You were warned in #squadgoals, ${reason}`);
break;

       }
    
});

client.login(process.env.BOT_TOKEN);
