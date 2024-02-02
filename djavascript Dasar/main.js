// alert('heyhoy')
// console.log('heyho')
// prompt('masukkan usia anda?')
// var usia = 30
// console.log('usia kamuadalah' + usia)
// const x = 1
// let y = 2
// let usia = rompt('berapa usia kamu')
// alert('usia anda adalah' + usia)

//? asignment(mengisi) variabel
// let nama = 'Arif' // tipe string
// let umur = 25 // tipe int
// let tinggiBadan = 168.5// camelCase tipe double float
// let beratBadan
// let pacar = null
// beratBadan = 50

//? pengkondisian
// if(pacar == null){
//     pacar = 'belum punya'
// }else{
//     pacar = 'udah punya'
// }

// switch(pacar){
//     case 1:
//         pacar = "punya 1 aja"
//         break
//     case 2:
//         pacar = "aku cukup playboy"
//         break
//     default:
//         pacar = "belum punya pacar"
//         break
// }

// let saldoAwal = 5000
// let saldoTambahan = 80000 
// let hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x =3
// const y = 5
// const z = 3 + 5

// alert('nama anda adalah'+nama+'usia anda '+umur+'dengan tinggi '+tinggiBadan+'berat badan saya'+beratBadan+'dan pacar saya'+pacar)
// alert(
//     `nama anda adalah ${nama} usia anda ${umur} dengan tinggi ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`
// )
// alert(
//     `saldo awal anda saat ini adalah Rp. ${saldoAwal} dan untk saldo tambahan tabungan anda adalah Rp. ${saldoTambahan} serta memiliki hutang sebanyak Rp. ${hutang} dan untk saldo akhir adalah ${saldoAkhir}`
// )
// alert(
//     `hasil dari nilai x = ${x} + nilai y ${y} maka hasilnya z = ${z}`
// )

//? array
// let namaGuru = ['jodi','bunga','intan']
// namaGuru.push('dea','fikri')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru[2])
// alert(namaGuru)

// let namaGuru2 = []
// namaGuru2[0] = 'arif'
// namaGuru2[1] = 'rahman'
// alert(namaGuru2)
// console.log(namaGuru.length)

//? for loop
// console.log('nama saya arif')
// console.log('nama saya arif')
// console.log('nama saya arif')
// console.log('nama saya arif')
//? statement
// for(let i = 0; i <= 10; i = i + 1){
//     console.log('nama saya Arif')
// }
//? maping
// let namaGuru = ['jodi','bunga','intan']
// console.log(namaGuru[2])
// for (let i = 0; i < namaGuru.length; i++){
//     console.log(namaGuru[i])
// }
//? do while
// let i = 10
// while (i<10, i++){
//     console.log('Arif rahman')
// }
// do{
//     console.error.log(' Arif Rahman')
// }while(i<10)
//? do
// let i = 10
// do{
//     i++ 
//     console.log('arif rahman')
// }while(i<10)

//?while
let j = 10
while (j=9){ // kondisi
    j++
    console.log('arif rahman')
}

//? Soal
/*
1. prompt untuk mengetahui saldo terakhir dari apa yang diinputkan user
2. menentukan hari dan tanggal yang ada saat ini di pc kalian
*/
// jawaban nomer 1
// const saldoPertama = prompt('masukkan saldo anda?')
// console.log(saldoPertama)
// const saldoTambahan = prompt('masukkan bonus')
// totalSaldo = parseInt(saldoPertama) + parseInt(saldoTambahan)

// alert(`saldo akhir nasabah adalah `+totalSaldo)

// // jawaban nomer 2
// const hari = new Date().toJSON().slice(0,10)
// console.log(hari)
// alert( 'tanggal hari ini adalah = ' + hari)   

// let i = 0
// while (i=10){
//     i++
//     console.log('Arif rahman')
// }
// do{
//     console.error.log(' Arif')
// }while(i=20)