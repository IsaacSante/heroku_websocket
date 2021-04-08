const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;
const arduinoSample = 'I am arduino data'
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", ws => {
    console.log("New Client Connected");
    ws.send('im the Heroku ws server');

  ws.on("message", data => {
    data = data.toString().replace(/['"]+/g, '')
    console.log(`Client has sent + ${data}`)
    // ws.send("Your data is:" + data)
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  })

  ws.on("close", () => {
    console.log("Client has disconnected")
  })
})
