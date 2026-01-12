const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Uvazg3ZUo0Mk1xVUY2U0NIb2N4VXZIZmNmUEVQU0YyL0tic2IxbFFGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemQzb0d2WUM4TGpTK3JFM3FuUXlNUXFQZGIwWGE3b01kUnF4RnMyc2JrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RmlxcS8vSFFKT05pTFVsTmRSQUE2aHlmQU9YbWg5MnhMN3J2Q2dVY2xZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZHBWS1dmd3pZdi9pUzU1S0VoSkQyWGI3MHI4MVFlL0c5SkYxc2VzNlYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJM3RTbkRTdDg2WGlobElUTXdRNGxaVW9tWmRWUTlKTjJObmNRSGtna3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVaytGVFp6QlQ0SkZPVy9CUFFGK2llYnhEY1RUWTNSZlYwQ0JYL0pMUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BTZE9EdTNScEtnRndXV3hsazVYVGV4Q1kyTzFMZ0UzU3I1Ky81MDEwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDkwYXNJaFVObTJIcnVKTVArUmJRZ1lrSG5nZzlCT3RLVFJOajVJTmpVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc4cGN6emZTcmM2U2RqOUI1bU5Vcy9oRUZqSVIyeGorRG14dC9iQ2NSOERHUFJtNmRjeDh5Skx2TFhFbWRHYjlWMW5yNWt2QVdSeWhKYWV3dm8wWWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJzUzlzVGZMM2NKblBnamNJUkhiUXlCMm92ZTF4VTFlYytWYUFUUVJSOW5FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzM4NDI4NzQwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzMxNTcwNDBGNjg4OTdBOEM1MjhFOEJFNjhGQkRBRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNzAwNzM2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2VkMxU01UUyIsIm1lIjp7ImlkIjoiOTE3Mzg0Mjg3NDA0Ojk4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQwNDkyOTY5MjUwOTAwOjk4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSy93NTVzRUVQaldoY2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTUdxRGhJcEZQREd0YUdkZGpuL3B6OUE0Zkw1L3AvaG1HT1lLMTBkdk55WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSlF4TlNPNTBrWU4zTFZaaGJPM3pvYzBISVNqOURCSTV4Tk5LeWRTTE9OdzBNKzlMczNoRFhVdFVLVDN4c0YwS1lrSjBnd2g3dzVxNThmRkZHajhqQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImI3RnFqenpKa3lnN0hIZGdPenNEaUw4aHJzNG4wYWtZbytaWU5XOFBJYitURlo3VzVzbTJtRU9rTG52WERPWTgrV2UwdWlaRlF0WHVvN0RWSUVNZWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3Mzg0Mjg3NDA0Ojk4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRCcWc0U0tSVHd4cldoblhZNS82Yy9RT0h5K2Y2ZjRaaGptQ3RkSGJ6Y20ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTcwMDczMSwibGFzdFByb3BIYXNoIjoiQzRmSk4iLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI3aSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "SEEN MY STATUS DEAR WHATSAPP-FRIEND 🤗♥️

       ｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶
SEND THE BOT 𝐥𝐨𝐯𝐞𝐬 𝐲𝐨𝐮 TOO ME 😇♥️𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚈𝙾𝚄𝚁 SMS* I'VE CREATED A *DEX-SAM*  BY SHARING THE NUMBER  +917384287404 ✅🤖👻😜",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || "AS",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/mfvM5mL/1000825221.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "DEX-SAM-HA4K3R V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Sam Chaudhari",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "+917384287404",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SAMIM",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ SAMIM*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/mfvM5mL/1000825221.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *DEX-SAM-HA4K3R*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "+917384287404",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
