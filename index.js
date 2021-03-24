const { PeerServer } = require("peer");

let clientsCount = 0;

const customGenerationFunction = () =>
  (Math.random().toString(36) + "000000000000000").substr(2, 11);

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  generateClientId: customGenerationFunction,
});

peerServer.on("connection", (client) => {
  clientsCount++;
  console.log(
    "+ Client connected ",
    "id:" + client.getId(),
    "token:" + client.getToken(),
    "- total: ",
    clientsCount
  );
});

peerServer.on("disconnect", (client) => {
  clientsCount--;
  console.log(
    "- Client disconnected " + client.getId(),
    "- total: ",
    clientsCount
  );
});
