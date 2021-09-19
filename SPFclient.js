var target =  process.argv[2];

console.log('argv ' + process.argv[2]);
console.log('target ' + target);

const net = require('net');
const regex = /target/g;
const client = net.createConnection({ port: 8124 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
//  client.write('world!\r\n');
  client.write(target + '\r\n');  
});

client.on('data', (data) => {
    data = data.toString();
    console.log(data);
//  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});









