const { PeerServer } = require("peer");

let clientsCount = 0;

const peerServer = PeerServer({ port: 9000 });

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
