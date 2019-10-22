var tanggal = 31 ;
var bulan   =  0;
var tahun   =  2000 ;

if (tanggal === 0 || tanggal > 31 ) {
    console.log('tanggal di isi dengan tanggal 1-31')
} else if (tahun < 1900 || tahun > 2200) {
    console.log('tahun di isi dengan tahun 1900 - 2200')
} else if (bulan < 1 || bulan > 12) {
    console.log('bulan di isi angka 1-12')
} else {
    switch (bulan) {
        case 1:     console.log(`${tanggal} Januari ${tahun}`);     break;
        case 2:     tanggal<=29 ? console.log(`${tanggal} Februari ${tahun}`) : console.log('Februari hanya berisi 29 hari');   break;
        case 3:     console.log(`${tanggal} Maret ${tahun}`);       break;
        case 4:     tanggal<=30 ? console.log(`${tanggal} April ${tahun}`) : console.log('April hanya berisi 30 hari');         break;
        case 5:     console.log(`${tanggal} Mei ${tahun}`);         break;
        case 6:     tanggal<=30 ? console.log(`${tanggal} Juni ${tahun}`) : console.log('Juni hanya berisi 30 hari');           break;
        case 7:     console.log(`${tanggal} Juli ${tahun}`);        break;
        case 8:     console.log(`${tanggal} Agustus ${tahun}`);     break;
        case 9:     tanggal<=30 ? console.log(`${tanggal} September ${tahun}`) : console.log('September hanya berisi 30 hari'); break;
        case 10:    console.log(`${tanggal} Oktober ${tahun}`);     break;
        case 11:    tanggal<=30 ? console.log(`${tanggal} November ${tahun}`) : console.log('November hanya berisi 30 hari');   break;
        case 12:    console.log(`${tanggal} Desember ${tahun}`);    break;
    }
}