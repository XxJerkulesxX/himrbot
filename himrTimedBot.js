const {Client, RichEmbed} = require('discord.js');
const himrBot = new Client();
const ms = require('ms');
const Datastore = require('nedb');
const fs = require('fs');

const token = 'NjUwNjYwNjE1NjQzNDYzNjg4.XgXfew.5Z_ooNJbkFBCijXU1G3glaT97Zo';

const PREFIX = 'HIMR';
var delDanMessBoo;
var time2;
var timeMods;
var danInit;
var modInit;
var adminInit;

//just lets you know via the console that the bot is ready
himrBot.on('ready', () =>{
    console.log('This bot is online!');
})





// // Boss
// // Pia
// // Sid
// // Ilint
// // Para
// // Yoko
// // Missa
// // Jerkules






// takes in the message for Daniel
himrBot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case 'prev':

    
            //checks if the command comes from Daniel 
        if(message.member.roles.find(r => r.name === "The Daniel")) {

            // turns your command into an amount of time
            let time = args[1];

            //if there is a problem with your command, this will stop the command from continuing
            if(!time) {
                let embedDanTime = new RichEmbed()
                .setTitle("Helper for Daniel 😃")
                .setColor(0xFF0000)
                .setDescription("You didn't specify a time");
                return message.author.send(embedDanTime);
            }
            let embedDanMesDel = new RichEmbed()
                .setTitle("Notification for Daniel 😃")
                .setColor(0xFF0000)
                .setDescription(`Your messages will be deleted after ${ms(ms(time))}`);

            message.author.send(embedDanMesDel);

            //takes time specificed and performs desired action
            setTimeout(function() {

            //collects Dnaiels messages and Deletes one by one 
            message.channel.fetchMessages().then(messages => { //collected is a Collection
                //message.member.roles.find(r => r.name === "Admin")
            let DanielMessages = messages.filter(m => m.member.roles.find(r => r.name === "The Daniel"));
            messages.forEach(msg1 => {
                  if (msg1.member.roles.find(r => r.name === "The Daniel")) msg1.delete();

                });

            let messagesDeleted = DanielMessages.array().length; // number of messages deleted

    
            // Logging the number of messages deleted on both the channel and console.
                let embedDanMessDelSuc = new RichEmbed()
                .setTitle("Notification for Daniel 😃")
                .setColor(0xFF0000)
                .setDescription("Deletion of messages successful. Total messages deleted: " + messagesDeleted);

            message.author.send(embedDanMessDelSuc);


            console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
        }).catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
        });

            }, ms(time));



        } else {
            let embedNotDan = new RichEmbed()
                .setTitle("Notification for Normie 😐")
                .setColor(0xFF0000)
                .setDescription('Action can only be performed by Daniel');

            return message.author.send(embedNotDan)
        }
        break;
        case 'del':
            // checks if the user is Daniel 
            if (message.member.roles.find(r => r.name === "The Daniel")) {

                // turns your command into an amount of time
            
            time2 = undefined;
            time2 = args[1];

            //if there is a problem with your command, this will stop the command from continuing
            if(!time2) {
                let embedDanActiveMesTime = new RichEmbed()
                .setTitle("Helper for Daniel 😃")
                .setColor(0xFF0000)
                .setDescription("You didn't specify a time");
                return message.author.send(embedDanActiveMesTime);
            }
            let embedDanActiveMesDel = new RichEmbed()
                .setTitle("Notification for Daniel 😃")
                .setColor(0xFF0000)
                .setDescription(`Now any messages you type will be deleted after ${ms(ms(time2))}`);

            message.author.send(embedDanActiveMesDel);


            danInit = true;
           
            // Start of active messages deleting code 


            let danielMsgCollection = message.channel.awaitMessages(msg3 => {




                if (msg3.member.roles.find(r => r.name === "The Daniel")) {
                    // console logs eash message caught by the await function 
                    delDanMessBoo = true;


    
                }
    
            // Start of active messages deleting code 

            }).catch(err => {
            console.log('Error while deleting messages');
            console.log(err);
        });
             


            //end of check for Daniel if statment 
            } else {
                let embedNotDanActiveMes = new RichEmbed()
                    .setTitle("Notification for Normie 😐")
                    .setColor(0xFF0000)
                    .setDescription('Action can only be performed by Daniel');
    
                return message.author.send(embedNotDanActiveMes)
            }

        break;
        case 'off':
                if(message.member.roles.find(r => r.name === "The Daniel")) {

                delDanMessBoo = false;
                function resetBot(channel) {
                    let embedReset = new RichEmbed()
                    .setTitle("Notification for Daniel 😃")
                    .setColor(0xFF0000)
                    .setDescription('Resetting...');
                    // send channel a message that you're resetting bot [optional]
                    message.author.send(embedReset)
                    .then(msg => himrBot.destroy())
                    .then(() => himrBot.login(token));
                }
                
                resetBot(message.channel);

            }
        break;
    }


})


// deletes messages for Daniel 
himrBot.on('message', message => {
    // statment that looks if delDanMessBoo is true 

    if (typeof message.content === "string" && !message.content.includes("HIMRdel") && danInit) {
        
        message.channel.fetchMessages({limit: 1}).then(messages => { //collected is a Collection
 

        messages.forEach(msg1 => {
              if (msg1.member.roles.find(r => r.name === "The Daniel")) {

                (function (individComment, setTimeComDelFunc){
                        setTimeout(function() {

                            individComment.delete();

                        }, setTimeComDelFunc);
                        
                    })(msg1, ms(time2));
              }

            });

            delDanMessBoo = false;


    }).catch(err => {
        console.log('Error while Deleting');
        console.log(err);
    });

    } else if (message.content.includes("HIMRdel") && message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && danInit) {
        message.channel.fetchMessages({limit: 1}).then(messages => { //collected is a Collection


            messages.forEach(msg2 => {

    
                    (function (individComment, setTimeComDelFunc){
                            setTimeout(function() {
    
                                individComment.delete();
    
                            }, setTimeComDelFunc);
                            
                        })(msg2, ms(time2));
                  
    
                });
    
                delDanMessBoo = false;
    
    
        }).catch(err => {
            console.log('Error while Deleting');
            console.log(err);
        });

    }

   
})







himrBot.login(token);
