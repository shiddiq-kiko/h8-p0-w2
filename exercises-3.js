var nama = '';
var peran = '';

if (nama && !peran) {
    console.log(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`)
} else if (nama && peran === 'Ksatria'){
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"`)
    console.log(`"Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"`)
} else if (nama && peran === 'Tabib') {
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"`)
    console.log(`"Halo Tabib Danu, kamu akan membantu temanmu yang terluka!"`)
} else if (nama && peran === 'Penyihir') {
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"`)
    console.log(`"Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenangan!"`)
} else if (!nama) {
    console.log("Nama harus diisi!")
} else {

}