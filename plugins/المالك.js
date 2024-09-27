function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['201098829097']
handler.tags = ['ESCONAR']
handler.command = ['201098829097', 'ESCONAR', 'BOT ESCONAR', 'ESCONAR'] 

export default handler
