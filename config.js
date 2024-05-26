global.owner = ['6289525720818']  
global.mods = ['6289525720818'] 
global.prems = ['6289525720818']
global.nameowner = 'saty'
global.numberowner = '6289525720818'
global.mail = 'jiromarket1@gmail.com' 
global.gc = 'https://chat.whatsapp.com/COKPLNVIV2UB9WhMXQXWdT'
global.instagram = 'https://instagram.com/Jirostore2024'
global.wm = '© saty'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'gWUL2mv3' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'wzPkNry9'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'gWUL2mv3', 
  'https://api.botcahx.eu.org': 'wzPkNry9'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
