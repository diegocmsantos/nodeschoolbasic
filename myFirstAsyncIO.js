var fs = require('fs');

var filePath = process.argv[2];

fs.readFile( filePath, 'utf8', function( err, data ) {

  var lines = data.split( '\n' ).length - 1;
  console.log( lines );

} );
