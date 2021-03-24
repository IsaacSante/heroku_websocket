const WebSocket = require('ws');

const arduinoSample = 'I am arduino data'

const wss = new WebSocket.Server({ port: 9000 });

wss.on("connection", ws => {
  console.log("New Client Connected");

  ws.on("message", data => {
    console.log(`Client has sent" + ${data}`)

    ws.send("Hello from the server dude")
  })

  ws.on("close", () => {
    console.log("Client has disconnected")
  })

})
