const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '923499833604') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923499833604";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_16_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVkcycWExckl0cURBMy8zT3FsanFsUFdvaHdrNDdUMzVTVG54ekZTNk5scz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWJCdXk4XzlRRHFJdUE2Tmt2WVphUVwiLFxuICBcInBob25lSWRcIjogXCJkNDMyNWU3OC0wNjgyLTRjMWItOTRmMS0wNmM2MDE4ZGNmNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAyMjAsXG4gICAgICAxNTMsXG4gICAgICAxMyxcbiAgICAgIDEwOSxcbiAgICAgIDQyLFxuICAgICAgNjIsXG4gICAgICAxNzYsXG4gICAgICAyMzYsXG4gICAgICAyNTQsXG4gICAgICAyOSxcbiAgICAgIDEzNixcbiAgICAgIDIxMCxcbiAgICAgIDIzOCxcbiAgICAgIDE3NSxcbiAgICAgIDEwLFxuICAgICAgMjM4LFxuICAgICAgMjA1LFxuICAgICAgMjA2LFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMzYsXG4gICAgICAyNTAsXG4gICAgICAxMTEsXG4gICAgICAyMTAsXG4gICAgICAyNTEsXG4gICAgICA3OCxcbiAgICAgIDEzMSxcbiAgICAgIDE4OSxcbiAgICAgIDEyLFxuICAgICAgMjM2LFxuICAgICAgMzIsXG4gICAgICAxMjAsXG4gICAgICAwLFxuICAgICAgNTAsXG4gICAgICAxNTQsXG4gICAgICAxNzMsXG4gICAgICAxMzUsXG4gICAgICAxOTIsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDU3TFpERktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5OTgzMzYwNDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODI4MjU1MjEyNzQ6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW1sOG9nSEVLajR3clFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUeTNEaCtHb0JSYXQ5d3Zqc1VyeFBFcWJTbGpVbGkzYTVPL3QyQ2VrRm00PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIngxVGMzcjJsMmh4c3dJTkNnYXF1RW9zYWcwWktvckZuVC9SY2dvOTVZcmxSb0ZUMTdDMS80YjhCeGNDVnJCd1NFUzJ4TVpIVithU2pOREpSc0ltNEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhQYjF4U1dySFhiaXhCT1NSaG1jTExTai85Und2V2ZxMDk5VXFNSlJYU3NnY1E1N3pqZm5teHdyNzZXVVVSTFhubEpzNno1Z1p4RU1ZN2M0RGtsUUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ5OTgzMzYwNDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3NjEzODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQWGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBYZC5qc29uIjogIntcImtleURhdGFcIjpcIllOazE2V25lMlg5ZElkVjQ0MytIbTg3b3pyRy9SMGl0dENKOC9jU05PZjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5NzY5Nzk5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTQ4NjAyODI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
