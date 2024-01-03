// cara membuat object di javascript
//! 1- Object literal
//! 2- Function Declaration
// instansi yang berulangkali
function Mahasiswa (nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
}
//
    // argumen/parameter