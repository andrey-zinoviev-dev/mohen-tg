const express = require("express");

const { Bot } = require("grammy");

const app = express();

const dotenv = require('dotenv').config();

// console.log(process.env.token);

const bot = new Bot(process.env.token);

bot.command("start", (ctx) => {
  // console.log("Мохен бот");
  ctx.reply("Алекс Солдатов");
  console.log(ctx.chatId);
});

bot.start();

app.listen(() => {
  console.log("yes");
});