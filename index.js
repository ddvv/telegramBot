'use strict'

const TelegramBot = require('node-telegram-bot-api');
const token = '496687864:AAEOjMXjWjqBlMMU2fXwBSdMTITjolzQv_8';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    var hi = 'hi';
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello " + msg.from.first_name);
    }
    
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "До скорой встречи");
    } 

    var robot = "I'm robot";
    if(msg.text.indexOf(robot) === 0){
        bot.sendMessage(msg.chat.id, "Да, я робот!");
    }
});

bot.onText(/\/start/, (msg) => {
    
    bot.sendMessage(msg.chat.id, "Привет, " + msg.from.first_name + "!", {
    "reply_markup": {
        "keyboard": [["/start"], ["bye"], ["I'm robot"], ["/sendpic"]],
        "resize_keyboard": true
        }
    });
    
});


bot.onText(/бургеры/, (msg) => {
    
    bot.sendMessage(msg.chat.id, "Выберите бургер", {
    "reply_markup": {
        "keyboard": [["чикенбургер"], ["бигбургер"]],
        "resize_keyboard": true
        }
    });
    
});



bot.onText(/\/sendpic/, (msg) => {
    bot.sendPhoto(msg.chat.id,"https://i.ytimg.com/vi/9kb2FOnPbSw/mqdefault.jpg",{caption : "Машины будущего уже сегодня!"} );      
});