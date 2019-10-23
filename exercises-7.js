// 1 //

for (var rows = 1; rows <=5; rows++) {
    console.log('*')
}

// 2 //

for (var rows2 = 1; rows2 <=5; rows2++) {
    var a = '';
    for (var rows2a = 1; rows2a <=5; rows2a++) {
      a += '*'
    }
    console.log(a)
}

// 3 //

for (var rows3 = 1; rows3 <=5; rows3++) {
    var a = '';
    for (var rows3a = 1; rows3a <=rows3; rows3a++) {
      a += '*'
    }
    console.log(a)
}
