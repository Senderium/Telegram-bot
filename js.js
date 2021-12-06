"use strict";

const Telegraf = require('telegraf')
const bot_token = '5083324030:AAH0bYYyxcEymbAfSFeHCZ7-nhyRapMxC-E';
const bot = new Telegraf(process.env.bot_token)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()