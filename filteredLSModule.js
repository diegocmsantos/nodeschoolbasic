var fs = require('fs');
var path = require('path');

function listAndFilterDir( dirPath, extension, callback ) {

  var fileList = [];

  fs.readdir( dirPath, function( err, list ) {

    if ( err ) return callback( err );

    for( var i = 0; i < list.length; i++ ){

      if ( extension === path.extname( list[i] ) )
        fileList.push( list[i] );

    }

    return callback( null, fileList );

  } );

}

module.exports = listAndFilterDir