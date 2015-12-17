var http = require( 'http' );
var bl   = require( 'bl' );

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var content = new Array(3);

http.get( url1, function( resp ) {

  resp.setEncoding( 'utf8' );

  resp.pipe( bl( function( err, data ) {

    content[0] = data.toString();

    if ( content[1] && content[2] )
      content.forEach( function( url ) {
        console.log( url );
      } );

  } ) );

} );

http.get( url2, function( resp ) {

  resp.setEncoding( 'utf8' );

  resp.pipe( bl( function( err, data ) {

    content[1] = data.toString();

    if ( content[0] && content[2] )
      content.forEach( function( url ) {
        console.log( url );
      } );

  } ) );

} );

http.get( url3, function( resp ) {

  resp.setEncoding( 'utf8' );

  resp.pipe( bl( function( err, data ) {

    content[2] = data.toString();

    if ( content[0] && content[1] )
      content.forEach( function( url ) {
        console.log( url );
      } );

  } ) );

} );