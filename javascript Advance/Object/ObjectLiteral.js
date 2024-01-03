//! 1-object literal
let mahasiswa1 = { //variabel
    nama : 'arif', //properties
    energi : 10, //properties isinya nilai
    makan: function(porsi) { // method = function didalam object
        this.energi = this.energi + porsi; // didalam objek ada keyword this
        console.log(`selamat datang ${this.nama}, selamat makan`) // (``) = string literal
    } // method isinya function
}
// variabel nama harus berbeda agar tidak undefine
let mahasiswa2 = { //variabel
    nama : 'rahman',
    energi : 20,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`selamat datang ${this.nama}, selamat makan`) // (``) = string literal
    } 
}
// ketik mahasiswa + run di console akan tampil inputan diatas