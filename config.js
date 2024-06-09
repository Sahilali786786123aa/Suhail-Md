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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923093137941";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_05_52_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0h6WXQ3N2xHRGdSajh6Q3BrSm5STTdRUFc4QkJtUkY5L0tGSjJzVnhURT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWFczckg0N2ZTLWFTN3lSMHNDR29qQVwiLFxuICBcInBob25lSWRcIjogXCIzYWIyNWZiYi1jMjUzLTQ5MTQtODg0MC02YjllZjM2ZTNiMDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTE4LFxuICAgICAgMjQ3LFxuICAgICAgNjQsXG4gICAgICA5MCxcbiAgICAgIDc1LFxuICAgICAgMjIwLFxuICAgICAgMTAzLFxuICAgICAgMTYwLFxuICAgICAgMTM2LFxuICAgICAgNSxcbiAgICAgIDc0LFxuICAgICAgMjQzLFxuICAgICAgMTkwLFxuICAgICAgMjE0LFxuICAgICAgMjEyLFxuICAgICAgODQsXG4gICAgICAyNCxcbiAgICAgIDExNCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDAsXG4gICAgICAyMzksXG4gICAgICAxNzIsXG4gICAgICAyNCxcbiAgICAgIDM2LFxuICAgICAgMTY0LFxuICAgICAgMjQ3LFxuICAgICAgODYsXG4gICAgICAxMjIsXG4gICAgICAyMDYsXG4gICAgICA0MSxcbiAgICAgIDE0OCxcbiAgICAgIDIyNyxcbiAgICAgIDg5LFxuICAgICAgMTQ0LFxuICAgICAgMjE0LFxuICAgICAgMjQ0LFxuICAgICAgNzYsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRTkVWRlpTQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDkzMTM3OTQxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkzNTI3NzI3OTg4NzY2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSitYdzRVRUVQaUZsYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtRjhPVlFuSjIrU0s2T3hrQk1nTGhQOGZIaE02bFE2K2s0aUI3VFJqbjJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJrdEhiZGJ3aUFFeUdtbVY0Z0FIMHU1dS9STFVMaDJPWTNBVSt6aEg0RXROM21QYnl6WkFSNys1aWhXdXhndGtLNnAyUWxzaHVqekdpUjB3TlRzbkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNzdE1TRkFUQjJOQzNDSDMzM0M5YnFacElHb3ByZlVpWTdnWURyMUUvSmw2MEYxemtSVkcrTFlFL0NuY24zTUlJUUVaU1BVU1B0dFplMUlHRmo3d2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5MzEzNzk0MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc5MTIzMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFId1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh3US5qc29uIjogIntcImtleURhdGFcIjpcInZnUU5kYlo4YkJVWkFSdHBRMEV4REJXY0xydkRsOThoVVUzSGN6NXZ4U009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA4NTMyODI4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3OTEyMzIxNTI3XCJ9Igp9|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
