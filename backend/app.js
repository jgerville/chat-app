const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 });

const users = [];

const broadcast = (data, wss) => {
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN && client !== wss) {
      client.send(JSON.stringify(data))
    }
  }
}

wss.on('connection', (wss) => {
  let index;
  wss.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_USER':
        index = users.length;
        users.push({
          name: data.name,
          id: index + 1,
        })
        wss.send(JSON.stringify({
          type: 'USERS_LIST',
          users,
        }))
        broadcast({
          type: 'USERS_LIST',
          users,
        }, wss)
        break;
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author,
        }, wss)
        break;
      default:
        break;
    }
  })
})

wss.on('close', () => {
  users.splice(index, 1)
  broadcast({
    type: 'USERS_LIST',
    users,
  }, wss)
})