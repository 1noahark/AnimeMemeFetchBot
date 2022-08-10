require('dotenv').config()

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const axios = require('axios');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});





async function fetch(){

    
}


bot.on("message", async (message) => {

    const chatid = message.chat.id
      
        const port = process.env.PORT || 5000;
    
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1
    
    
            const rreddit = [
                "AnimeCharacterGloves",
                "anime",
                "Animemes", 
                "AOTmemes", 
                "OnePunchMan",
                "OnePiece",
                "anime_irl",
                "animememes",
                "DeathNoteMemes"
            ]
    
            function ran(min, max) {
                return Math.floor(Math.random() * (max - min) + min);  
             }
         
             let randomreddit = rreddit[ran(0, rreddit.length)]
             console.log(randomreddit)
         
         
         
             let redditresult;
             await axios
               .get(
                 `https://www.reddit.com/r/${randomreddit}.json`
               )
               .then((result) => {
                 redditresult = result;
         
                 for(var x = 0; x < 7; x++){  
         
                   
         
                     var rannum = ran(1, 10).toFixed()
         
         
                     if(rannum >= 1 && x == 1){

                        

                          bot.sendPhoto(chatid, redditresult["data"]["data"]["children"][rannum]["data"]["url"], {caption: "@animefetch_bot, bot by @noahark"})
                          break

                        
         
                       
                       
         
                     } else {

                        continue
                        
                       
                     }
         
                     
         
                     
                 }
         
                })
    
        
})
