import TelegramBot from "node-telegram-bot-api";
import users from './assets/db/db.json' with {type: "json"}
import fs from 'fs'
import { defaultAction } from "./assets/scripts/default.js"
import { sendWebApp } from "./assets/scripts/logic.js";

const bot = new TelegramBot("7020658144:AAF7UD0fBh6VKq8tFflqhinUnK_RdGcqPgA", {polling: true})

bot.on('message', async msg => {
    const user = users.find(user => user.username === msg.from.username)
    if (msg.text === "/start") {
        if(!user){
            users.push({
                username: msg.from.username,
                firstName: msg.from.first_name,
                lastName: msg.from.last_name
            })
            fs.writeFileSync("./assets/db/db.json", JSON.stringify(users, null, 2))
        }
        await defaultAction(bot, msg)
    }
});

bot.on('callback_query', async msg => {
    if(msg.data === "getfree"){
        await sendWebApp(bot, msg)
    }
})

bot.on('polling_error', console.log)