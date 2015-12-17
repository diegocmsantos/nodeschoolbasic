var http = require( 'http' );
var url  = require( 'url' );
var port = process.argv[2];

var server = http.createServer( function( req, res ) {

  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if ( req.method === 'GET' ) {

    var obj = url.parse( req.url, true );
    var date = new Date( obj.query.iso );
    if ( obj.pathname === '/api/parsetime' ) {

      var json = {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      }
      res.end( JSON.stringify( json ) );

    } else if ( obj.pathname === '/api/unixtime' ) {

        var json = { "unixtime": date.getTime() }
        res.end( JSON.stringify( json ) );

    }

  }

} );
server.listen( port );