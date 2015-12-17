var http = require( 'http' );
var fs = require( 'fs' );
var port = process.argv[2];
var filePath = process.argv[3];

var dst = null;
var server = http.createServer( function ( req, res ) {

  var rs = fs.createReadStream( filePath );
  rs.pipe( res );

} );

server.listen( port );