var net = require( 'net' );
var strftime = require( 'strftime' );

var port = process.argv[2];

var server = net.createServer( function( socket ) {

  socket.end( strftime( '%F %H:%M' ) );

} );

server.listen( port );

//var client = net.connect({port: 85}, function() { //'connect' listener
  
//});

//client.on('data', function(data) {
//  console.log(data.toString());
//  client.end();
//});