function konversiMenit(menit) {
    j = Math.floor(menit/60)
    var m = menit - j*60
    if (m < 10){
      return `${j}:0${m}`
    } else {
      return `${j}:${m}`
    }  
  }
  
  console.log(konversiMenit(63));
  console.log(konversiMenit(124)); 
  console.log(konversiMenit(53)); 
  console.log(konversiMenit(88)); 
  console.log(konversiMenit(120)); 