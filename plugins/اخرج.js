let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*اديني سبتلكو كسم البار وخارج روحو يارب تتناكو❣️ ⁦^⁠_⁠^⁩*') 
await conn.groupLeave(id)}
handler.command = /^(اخرج|اطلع|غادر|خروج)$/i
handler.group = true
handler.rowner = true
export default handler
