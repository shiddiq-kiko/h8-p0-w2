function balikKata(kata){
    kataBalik = '';
    for(a=kata.length-1 ; a>= 0 ; a--){
      kataBalik += kata[a]
      }
      return kataBalik
  }
  
  console.log(balikKata('Hello World and Coders'));
  console.log(balikKata('John Doe'));
  console.log(balikKata('I am a bookworm'));
  console.log(balikKata('Coding is my hobby'));
  console.log(balikKata('Super'));