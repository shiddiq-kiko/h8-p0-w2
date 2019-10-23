// 1 //

function shoutOut() {
    return('Halo Function!')
   }
   console.log(shoutOut())

// 2 //

function calculatedMultiply(num1, num2) {
    return hasilPerkalian = num1 * num2
  }
  
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculatedMultiply(num1, num2)
  console.log(hasilPerkalian)

// 3 //

function processSentence(name, age, address, hobby) {
    return fullSentence = 'Nama saya ' + name + ', ' + 'umur saya ' + age + ' tahun, ' + 'alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby
  }
  
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence)