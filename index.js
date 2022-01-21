const WebSocket = require('ws')

const server = 'ws://127.0.0.1:5000'

const ws = new WebSocket(server)

ws.on('open', function(){
    ws.send('hello')
})

ws.on('message', function(msg){
    console.log('[server] : ' + msg);
})