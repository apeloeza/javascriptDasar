//
// return => console.log()

// hoisting berlaku di function

//? cara pertama
// keyword new function
const sum1 = new Function (
    'x',
    'y',
    'console.log(x+y)')

//? cara kedua
//standar function
    function sum2(x,y){
        // falidasi
        if (x + y == 4){
            console.log('awowow')
        }
        // console.log(x,y)
    }

//? cara ketiga
//arrow function
const sum3 = (x,y) => {
    console.log(x + y)
}

function randomize(){
    const randomNumber = ~~(Math.random() + 1000)
    if (randomNumber > 200){
        console.log('wow lebih dari 200', randomNumber)
    }else{
        console.log(renderNumber)
    }
}

sum1(1,1)
sum2(2,2)
sum3(3,6)

//? tugas function
/*
1. membuat perhitungan matematika ( luas lingkaran, segitiga, persegi panjang, jajargenjang)
2. menghitung total gaji yang didapat dalam satu bulan dengan input minimal (nama karyawan, gaji perhari, jumlah masuk kerja)
*/

const luas = (x, y, z, a, b, c) => {
    console.log(`panjang = ${x} lebar = ${y} jari-jari = ${z} ⫪ = ${a} alas = ${b} tinggi = ${c} `)
    //Lingkaran
    const LuasLingkaran = (a * z * z)
    console.log(`Lingkaran dengan jari-jari = ${z}` )
    console.log('hasil Luas lingkaran = ' ,LuasLingkaran)
    //SegiTiga
    const LuasSegiTiga = (1/2 * b * c)
    console.log(`Segi Tiga dengan Alas = ${b} & tinggi = ${c}` )
    console.log('hasil Luas Segi Tiga = ' ,LuasSegiTiga)
    // PersegiPanjang
    const LuasPersegiPanjang = (a * b)
    console.log(`Persegi panjang dengan panjang = ${a} & lebar = ${b}` )
    console.log('hasil Luas Persegi panjang = ' ,LuasPersegiPanjang)
    // JajarGenjang 
    const LuasJajarGenjang = (a * b)
    console.log(`Jajar Genjang dengan alas = ${b} & tinggi = ${c}` )
    console.log('hasil Luas Jajar Genjang = ' ,LuasJajarGenjang)
    // nama
    // gaji
}

const Gaji = (d, e, f) => {
    const gajiTotal = (e * f)
    //console.log(Gaji)
    console.log(`${d} memiliki gaji perhari ${e} Rp dan untuk bulan ini ${d} masuk hanya ${f} hari `)
    console.log(`jadi total gaji ${d} adalah  ${gajiTotal}` )
}

luas (2, 5, 7, 3.14, 12, 6)
Gaji ('Rahman', 1000000, 12)


