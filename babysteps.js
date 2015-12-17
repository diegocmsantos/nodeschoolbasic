var count = 0;
process.argv.forEach(function(val, index, array) {
  if (index > 1) {
    count += Number(val);
    //console.log(index + ': ' + val);
  }
});
console.log(count);
