const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendfile('index.html')
})

io.on('connection', socket => {
  console.log('user connected')
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
