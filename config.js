
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "8294775658";
global.owner = process.env.OWNER_NUMBER || "8294775658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09UUVh6THUvWGxHRkQ1aU5ZaXNpOWxTcWNEZzRRQ2wrQUtnVE1TODJsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0kvOWNoeGJ0b0ZpK0FZVHhlVGhGSlN6cjBOVzU0bDN6WE4xVTIrRzhFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJREVnL255RzlDR2dSaFV3UlYyZlNYVXJmSzNmdGthaGlGc2VGbkh3dmxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLVDJoMlY4QjlGY2JIVkpvdEFZcW44TEs4UytqbEZWOTRSZVNaODlFaUU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IKzZOd2NYcmNyK1VQVWlNMmtsUm50TFYwaDBpSVBPbXpndVRJSGFBbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZwT2dSelFoay9Mc25jWFBNZ0JEeVpTM3ArWEJmeHV2b1BNTzNVSDZNVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01ZYm56NHpaMXlBeTcrYXF5YTQ4TWJta2xybkxaVElaZ2FiTHdvWHlIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDBEVEpsSEVzd0dlSmpLbTN0RnpzTmI0MXI0R1ZlTElONjBnbThIYlEyND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNSd2kwcWZMZGkwU3FUdDd5dEV4bHByV05Nd3JlUjNHZnQxaWRvWmZrZ1kzLzJaT2duY1hYdzJaVDNKUDRQRDlwd2xjYjBEaWJMakszZEdJeDJHUGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJLNTh3ZStxeFpoSEM1T3FxT1RkSWJxQVpiMTFLaW9YUndQcUZCVEZzMDV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4Mjk0Nzc1NjU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMzdCQjYwMzExMEZBQzVCRDlCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwMzYwOTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iml1YTRwZVhmUVN5akxKekRncmlaaFEiLCJwaG9uZUlkIjoiNjdjOTlkMzgtOTY0OS00YmZiLWE3YjctZDUzNDU3MjFhNThkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrc3FJWTZOWEJpYkhwNUFPb01NeE5iOGdLMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdzRVOCtHVkNrS1pUQk9iWXh0aTBHeFhJSzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVdHQ0dZVk0iLCJtZSI6eyJpZCI6IjE4Mjk0Nzc1NjU4OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmrjwnZqq8J2asPCdmrTwnZCC8J2atSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTMrMlBVRUVPdm5pcllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3g5cHN5L0cxSmVFMzdvNnEvUnQ3Zy9aM2JqSUJmb3BmYmEyZTdSNjFBTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUdnU1A0SU9tNkNIcWlyMmVTa2ZVZ3hwMC9kOUNsZ1hrMDRBM2R2bG5IZER2Tm93dmVHWmJJdnpwTjBpREFlUTlIbnkzZDBFRkZ3UDBNeGtwNW5VQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ii8zVXdVM0RvV1E4U1d5Q1lmNWg0d1FGc0pmVXhOV2h5aWx5N255d2lJZTk0MzVDR2JXVC80Vm5vM09aZDJ5RDNLSm5wWU9VQnZGUW8rRFR2QTRpYmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTQ3NzU2NTg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU1mYWJNdnh0U1hoTis2T3F2MGJlNFAyZDI0eUFYNktYMjJ0bnUwZXRRRCJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDAzNjA4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMaVIifQ==
  process.env.SESSION_ID ||Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09UUVh6THUvWGxHRkQ1aU5ZaXNpOWxTcWNEZzRRQ2wrQUtnVE1TODJsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0kvOWNoeGJ0b0ZpK0FZVHhlVGhGSlN6cjBOVzU0bDN6WE4xVTIrRzhFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJREVnL255RzlDR2dSaFV3UlYyZlNYVXJmSzNmdGthaGlGc2VGbkh3dmxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLVDJoMlY4QjlGY2JIVkpvdEFZcW44TEs4UytqbEZWOTRSZVNaODlFaUU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IKzZOd2NYcmNyK1VQVWlNMmtsUm50TFYwaDBpSVBPbXpndVRJSGFBbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZwT2dSelFoay9Mc25jWFBNZ0JEeVpTM3ArWEJmeHV2b1BNTzNVSDZNVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01ZYm56NHpaMXlBeTcrYXF5YTQ4TWJta2xybkxaVElaZ2FiTHdvWHlIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDBEVEpsSEVzd0dlSmpLbTN0RnpzTmI0MXI0R1ZlTElONjBnbThIYlEyND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNSd2kwcWZMZGkwU3FUdDd5dEV4bHByV05Nd3JlUjNHZnQxaWRvWmZrZ1kzLzJaT2duY1hYdzJaVDNKUDRQRDlwd2xjYjBEaWJMakszZEdJeDJHUGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJLNTh3ZStxeFpoSEM1T3FxT1RkSWJxQVpiMTFLaW9YUndQcUZCVEZzMDV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4Mjk0Nzc1NjU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMzdCQjYwMzExMEZBQzVCRDlCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwMzYwOTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iml1YTRwZVhmUVN5akxKekRncmlaaFEiLCJwaG9uZUlkIjoiNjdjOTlkMzgtOTY0OS00YmZiLWE3YjctZDUzNDU3MjFhNThkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrc3FJWTZOWEJpYkhwNUFPb01NeE5iOGdLMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdzRVOCtHVkNrS1pUQk9iWXh0aTBHeFhJSzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVdHQ0dZVk0iLCJtZSI6eyJpZCI6IjE4Mjk0Nzc1NjU4OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmrjwnZqq8J2asPCdmrTwnZCC8J2atSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTMrMlBVRUVPdm5pcllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3g5cHN5L0cxSmVFMzdvNnEvUnQ3Zy9aM2JqSUJmb3BmYmEyZTdSNjFBTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUdnU1A0SU9tNkNIcWlyMmVTa2ZVZ3hwMC9kOUNsZ1hrMDRBM2R2bG5IZER2Tm93dmVHWmJJdnpwTjBpREFlUTlIbnkzZDBFRkZ3UDBNeGtwNW5VQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ii8zVXdVM0RvV1E4U1d5Q1lmNWg0d1FGc0pmVXhOV2h5aWx5N255d2lJZTk0MzVDR2JXVC80Vm5vM09aZDJ5RDNLSm5wWU9VQnZGUW8rRFR2QTRpYmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTQ3NzU2NTg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU1mYWJNdnh0U1hoTis2T3F2MGJlNFAyZDI0eUFYNktYMjJ0bnUwZXRRRCJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDAzNjA4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMaVIifQ==





  


//___________________________________________________________________________________________________


  
 "wap mete session id ou a la 🔪🔪💔" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
