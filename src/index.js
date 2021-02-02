const WebSocket = require("ws");

// Cria um novo servidor WebSocket
const server = new WebSocket.Server({
  port: 8080,
});

// http://localhost:8080/
// Upgrade required

// Lista de mensagens
const messages = [];

// Define o que fazer ao iniciar uma nova conexão
server.on("connection", (socket) => {
  // Envia as mensagens já salvas
  socket.send(JSON.stringify(messages));

  // Define o que fazer ao receber uma mensagem
  socket.on("message", (message) => {
    // Salva a mensagem na lista de mensagens
    messages.push(message);

    // Transmite a mensagem para cada usuário
    server.clients.forEach((socket) => socket.send(JSON.stringify(messages)));
  });
});
