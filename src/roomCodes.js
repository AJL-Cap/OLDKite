const makeRoomCode = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let codeArr = []
  for (let i = 0; i < 4; i++) {
    codeArr.push(Math.floor(Math.random() * alphabet.length ))
  }
  return codeArr.join('')
}

export default makeRoomCode
