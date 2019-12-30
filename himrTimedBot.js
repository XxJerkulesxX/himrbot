const {Client, RichEmbed} = require('discord.js');
const himrBot = new Client();
const ms = require('ms');
const Datastore = require('nedb');
const fs = require('fs');

const token = 'NjUwNjYwNjE1NjQzNDYzNjg4.Xgo9PQ.1ucxH5EMOEomFQUtp0jjppHFPGg';

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









himrBot.login(token);
