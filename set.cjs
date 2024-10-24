// GIFTED-TECH 
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Gifted~1Swbp5xw",
  PREFIX: process.env.PREFIX || ',',
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS !== undefined ? process.env.AUTO_READ_STATUS === 'true' : true, 
  AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD !== undefined ? process.env.AUTO_DOWNLOAD === 'true' : false,
  AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES !== undefined ? process.env.AUTO_READ_MESSAGES === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  AUTO_REJECT_CALLS: process.env.AUTO_REJECT_CALLS !== undefined ? process.env.AUTO_REJECT_CALLS === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "GIFTED ᴛᴇᴄʜ",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923409068757",
  GEMINI_KEY: process.env.GEMINI_KEY || "HRKU-90b3f81f-ad23-4861-8f87-e0edf3479972",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
