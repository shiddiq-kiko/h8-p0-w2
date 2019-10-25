
function xo(str) {
  var a
  var b = str.length
  var x = 0;
  var o = 0;
  for(a = 0; a < b; a++) {
    if (str[a] === 'x'){
      x += 1
    } else if (str[a] === 'o') {
      o += 1
    }
  } return x === o
}
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));