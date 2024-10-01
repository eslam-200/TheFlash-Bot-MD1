import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const sounds = [
        "./media/احا.mp3",
        "./media/احا1.mp3"
    ];

const sounds2 = [
        "./media/بضاني.mp3",
        "./media/من انت.mp3"
    ];

const sounds3 = [
        "./media/انها المخدرات.mp3",
        "./media/ولا ايه.mp3"
    ];
const sounds4 = "./media/الصدمه.mp3";
const sounds5 = "./media/اسمع.mp3";
const sounds6 = "./media/تعال بف.mp3";
const sounds7 = "./media/العنكبوت.mp3";
const sounds8 = "./media/قصه.mp3";
const sounds9 = "./media/يساتر.mp3";
const sounds10 = "./media/ضحكه.mp3";
const sounds11 = "./media/عصافير.mp3";

  const chat = global.db.data.chats[m.chat];

  if (/^احا|احو$/i.test(m.text) && !chat.isBanned) {

const vn = sounds[Math.floor(Math.random() * sounds.length)];

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  
  } else if (/^شخره$/i.test(m.text) && !chat.isBanned) {

const vn = sounds2[Math.floor(Math.random() * sounds2.length)];

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^هححححح|هححح|هحححح$/i.test(m.text) && !chat.isBanned) {

const vn = sounds3[Math.floor(Math.random() * sounds3.length)];

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^صدمه$/i.test(m.text) && !chat.isBanned) {

const vn = sounds4;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^بقولك$/i.test(m.text) && !chat.isBanned) {

const vn = sounds5;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^اقلع$/i.test(m.text) && !chat.isBanned) {

const vn = sounds6;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^بحبها|بحبو|دوبتني|مراتي$/i.test(m.text) && !chat.isBanned) {

const vn = sounds7;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^قصه تقف لها الازبار|هيجان$/i.test(m.text) && !chat.isBanned) {

const vn = sounds8;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^انبر|يساتر|ي ساتر$/i.test(m.text) && !chat.isBanned) {

const vn = sounds9;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

  } else if (/^ضحكت|بموت$/i.test(m.text) && !chat.isBanned) {

const vn = sounds10;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});

} else if (/^يفاجر|اسكونر$/i.test(m.text) && !chat.isBanned) {

const vn = sounds11;

 conn.sendPresenceUpdate('recording', m.chat);
    
m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'sound.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
          
}
  return !0;
};
export default handler;
