var fs = require('fs');

var filePath = process.argv[2];

var text = fs.readFileSync(filePath).toString().split( '\n' );

console.log( text.length - 1 );
