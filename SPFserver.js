const  net = require('net')
      ,pg = require('pg')
      ,spawn = require('child_process').spawn
      ,util = require('util');

const { exec } = require('child_process');

const server = net.createServer((c) => {
  // 'connection' listener.
    console.log('client connected');
    console.log('hello   ');    
    c.write('hello\r\n');

  c.on('end', () => {
    console.log('client disconnected');
  });

    c.on('data', (data) => {
	mytarget = data.toString();

	mytarget = mytarget.replace(/^\s+|\s+$/g, '');


	console.log(mytarget);
	
	exec('dig ' + mytarget + '  +authority', (error, stdout, stderr) => {

	    if (error) {
              console.error(`exec error: ${error}`);
              return;
           }

          c.write(`stdout: ${stdout}`);	    
	  console.error(`stderr: ${stderr}`);

	});

	
	
  });

  //  c.pipe(c);

});


server.on('error', (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log('server bound');
});
    


    


