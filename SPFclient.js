/*global  */


if (process.argv.length < 4)
   { console.log('Usage:  ' + process.argv[0] + ' ' + process.argv[1] + ' domain ' + ' Email_Originating_IP ');
     return;
   }

const targetplus = process.argv[2];
const target =  process.argv[2].split(' ');
var  originatingIP = process.argv[3];



console.log('argv ' + process.argv[2]);
console.log('target domain is  ' + target[0]);
//console.log('argv ' + process.argv[2]);
console.log('Email originating IP is ' + originatingIP);



const regex = /\./g;

//originatingIP = originatingIP.replace(regex,'\\.');
console.log('originatingIP ' + originatingIP);


var regex2 = new RegExp(originatingIP.replace(regex, '\\.'));
//console.log(regex2);
var regex3 = new RegExp(regex2.source, regex2.flags + "g");
//console.log(regex3);




const net = require('net');
const client = net.createConnection({ port: 8124 }, () => {
  // 'connect' listener.
  console.log('Connected to server. Sent target domain.');
//  client.write('world!\r\n');
  client.write(targetplus + '\r\n');  
});


var lines = " ";
var found = 0;

client.on('data', (data) => {
    data = data.toString();
//    console.log(regex.exec(data));
    lines = data.split("\n");
    lines.forEach(line => {

         
//       console.log(line);

       item_found = regex3.exec(line);      
       
       if (item_found) {
       console.log('\n\nThe email originating at IP ' + originatingIP + ' is valid for ' + targetplus + '.\n');
       console.log(item_found);
       found = 1;
       } 


     });



});

      if (found === 0) {

         console.log('\n\nNOT VALID for domain ' + targetplus + '. \n\n');

       }

//  client.end();

client.on('end', () => {
  console.log('disconnected from server');
});









