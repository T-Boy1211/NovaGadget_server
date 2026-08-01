const WebSocket = require("ws");

let wss;

function initWebSocket(server) {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (socket) => {
    console.log("Connected to WebSocket server");
  });

  // ws.on('message', (message) => {
  //   console.log('Received message:', message);
  // });

  wss.on("close", () => {
    console.log("Client disconnected");
    setTimeout(() => {
      initWebSocket(server);
    }, 1000); // Reconnect after 1 second
  });
}

function broadcast(data) {
  if (!wss) {
    console.error("WebSocket server is not initialized");
    return;
  }
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

module.exports = {
  initWebSocket,
  broadcast,
};