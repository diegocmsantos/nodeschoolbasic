var mymodule = require('./filteredLSModule');

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

mymodule( dirPath, extension, function( err, list ) {

  if ( err ) throw err;

  list.forEach(function(file){
    console.log( file );
  });

} );