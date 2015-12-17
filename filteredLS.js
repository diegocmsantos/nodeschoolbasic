var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir( dirPath, function( err, list ) {

  for( var i = 0; i < list.length; i++ ){

    if ( extension === path.extname( list[i] ) )
      console.log( list[i] );

  }

} );
