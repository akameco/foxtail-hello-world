export default (fox) => {
  fox.add((res) => {
    if (res.text === 'hello') res.reply('world')
  })
}
