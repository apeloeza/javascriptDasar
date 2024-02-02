//! pop up box
// alert('hello world'+' saya arif'+' saya belajar pemrograman');
// var nama = prompt('masukkan nama :');
// alert('halo '+ nama);
// var test = confirm('kamu yakin??');
// if (test === true) {
//     alert('kamu menekan OK!');
// }else{
//     alert('kamu menekan CANCEL:');
// }
// alert('selamat datang..');
// var lagi = true;
// while(lagi){
//     alert('hallo' + nama);
//     lagi = config('coba lagi?');
// }
// alert('terima kasih..!');

//! control flow/ alur kendali
    // normal flow

// var nama2 = prompt('masukan nama kamu = ')
// alert('nama kamu adalah'+nama2)

// var angka = prompt('masukan angka :');
//             if (angka % 2 === 0){
//                 alert(angka + ' bilangan genap');
//             }else{
//                 alert(angka + ' bilangan ganjil');
//             }

//! perulangan
//! while
// while(kondisi => (selama kondisi bernilai true)){
//     aksi => ( lakukan aksi dalam blox{} )
// }
// while(true){console.log('helloworld')} //(invinite loop/ looping forever)
// var ulang = true;               // nilai awal
// while(ulang){                   // kondisi terminasi(mengecek nilai awal)
//     console.log('hello world'); // aksi
//     ulang = confirm('lagi?');   // increment(penambahan nilai) / decrement(pengurangan nilai)
// }
// var nilaiAwal = 2;
// while(nilaiAwal <= 4){
//     console.log('halo dunia')
//     nilaiAwal ++  // nilaiAwal = nilaiAwal + 1
// }

// pertanyaan tampilkan 10 angkot berurut dengan tambahan beroperasi dengan baik ?

// var maksimalAngkot = 5
// var angkotMasuk = 1

// while(angkotMasuk <= maksimalAngkot){
//     console.log('angkot ' +angkotMasuk + ' masuk kedalam terminal')
//     angkotMasuk ++
// }
//! for
// for(nilaiAwal = 1; nilaiAwal <=5; nilaiAwal ++){
//     console.log('mantap')
// }
// var jumlahAngkot = 10
// var angkotBeroperasi = 6
// var noAngkot = 1
// while(noAngkot <= angkotBeroperasi){
//     console.log('angkot no. '+noAngkot+'beroperasi')
//     noAngkot++
// }
// for(noAngkot=7 ; noAngkot <= jumlahAngkot; noAngkot++){
//     console.log('angkot tidak beruperasi no. '+noAngkot)
// }
// for(noAngkot=angkotBeroperasi+1; noAngkot <= jumlahAngkot; noAngkot++){
//     console.log('angkot tidak beruperasi no. '+noAngkot)
// }
//! pengkondisian
//! if
// var angka = prompt('masukan angka :')
// if(angka % 2 == 0){
//     alert(angka+'adalah bilangan genap')
// }else{
//     alert(angka + ' adalah bilangan Ganjil')
// }
//! else if
// var angka = prompt('masukan nomor paslon 1/2/3:')
// if(angka === 1){
//     alert(angka+' anda memilih paslon agamis')
// }if(angka === 2 ){
//     alert(angka + ' anda memilih paslon idealis')
// }else{
//     alert(angka + ' anda memilih patriotis ')
// }

// var jumlahAngkot = 10
// var angkotMasuk = 6
// for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
//     if(noAngkot <= 6){
//         console.log('angkot dengan no.' + noAngkot +'beroperasi')
//     }else if(noAngkot===8 || noAngkot===9){      // dapat menambahkan operator logika(and,or,not) di dalam kondisi
//         console.log('angkot no.'+noAngkot+' lembur')
//     }else if(noAngkot===10){
//         console.log('angkot no.'+noAngkot+' lembur')
//     }else{
//         console.log('angkot no.'+noAngkot+' tidak beroperasi')
//     }
// }
//! switch
var angka = prompt('masukkan angka paslon :')
switch(angka){
    case '1':
        alert('anda memilih paslon 1');
        break;
    case '2':
        alert('anda memilih paslon 2');
        break;
    case '3':
        alert('anda memilih paslon 3');
        break;
    default:
        alert('anda salah memilih dan menjadi golput');
        break;
}
