// 1 //

console.log('Looping Pertama')
var angka = 1;
while(angka <= 20) {
  console.log(angka + ' - I love coding'); angka++
}

console.log('Looping Kedua')
var angka2 = 20;
while(angka2 >= 1) {
  console.log(angka2 + ' - I will become fullstack developer'); angka2--
}

// 2 //

console.log('Looping Pertama')

for (var angka = 1; angka <= 20; angka++) {
  console.log(angka + ' - I love coding')
}

console.log('Looping Kedua')

for (var angka2 = 20; angka >= 1; angka--) {
  console.log(angka + ' - I will become fullstack developer')
}

// 3 //

var counter = 1

while(counter <= 100) {
    if (counter % 2 != 0) {
        console.log('GANJIL')
    } else if (counter % 2 === 0) {
        console.log('GENAP')
    }
  counter++
}

var counter2 = 1

while(counter2 <= 100) {
  if (counter2 % 3 === 0) {
    console.log('3 Kelipatan 3')
  } else {
      console.log('" "')
  }
  counter2 += 2;
}

var counter3 = 1

while(counter3 <= 100) {
  if (counter3 % 6 === 0) {
    console.log('6 Kelipatan 6')
  } else {
    console.log('" "')
}
  counter3 += 5
}

var counter4 = 1

while(counter4 <= 100) {
  if(counter4 % 10 === 0) {
    console.log('10 kelipatan 10')
  } else {
    console.log('" "')
}
  counter4 += 9
}