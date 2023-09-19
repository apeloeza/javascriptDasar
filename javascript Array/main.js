//? Pengenalan Array
/*'🌶','🍓','🌽','🍉','🍆'*/

// const arraySaya = ['😊','😍','😎'] // 0, 1, 2 (key/index)
// console.log(arraySaya)

// const arrayKamu = []
// arrayKamu[0] = '👏'
// arrayKamu[1] = '👍'
// arrayKamu[2] = '🙌'

// console.log(arrayKamu)

// const arrayKita = new Array()
// arrayKita[0] = '❤'
// arrayKita[0] = '💕'
// arrayKita[0] = '💖'
// console.log(arrayKita[1])

 //? mencoba lebih kompleks

// const arrayBuah = ['🌶','🍓','🌽','🍉','🍆'] 

// const semangka = arrayBuah.includes('🍉')

// kondisi
// if (semangka){
//     const posisiSemangka = arrayBuah.indexOf('🍉')
//     console.log (`buah semangka itu ada dan berada di posisi index ke - ${posisiSemangka}`)
// }else{
//     console.log('saya tidak tahu posisi dimana')
// }
// console.log(semangka)


//? logika buah 

// const arrayBuah2 = ['🌶','🍓','🌽','🍉','🍆'] 
// const semangka2 = arrayBuah2.includes('🍉')
// if (semangka2){
//     const posisiSemangka = arrayBuah2.indexOf('🍉')
//     const indexBefore = posisiSemangka - 1 
//     const indexAfter = posisiSemangka + 1
//     const before = arrayBuah2[indexBefore]
//     const after = arrayBuah2[indexAfter]
//     console.log(`buah sebelum sebelum adalah ${before} `)
//     console.log(`buah sesudah semangka adalah ${after} `)
//     const buahAwal = arrayBuah2[0]
//     const buahAkhir = arrayBuah2[arrayBuah2.length - 1]
//     console.log('buah awal adalah buah ',buahAwal)
//     console.log(`buah akhir adalah ${buahAkhir}`)
//     console.log('saya tidak tahu posisinya dimana')
// }

//? logika lanjutan = key

// const arrayBuah = []

// arrayBuah['jeruk'] = '🍊'
// arrayBuah['tomat'] = '🍅'
// console.log(arrayBuah['tomat'])

//? array copy shallow copy & deep copy
// original value jangan sampe berubah

// const arrayBuah = ['🌶','🍓','🌽','🍉','🍆'] //nilai original
// const newArrayBuah = arrayBuah //KW kopian ==> penerapan copy yg salah

// const newArrayBuah2 = JSON.parse(JSON.stringify(arrayBuah))
// const newArrayBuah3 = Array.from(arrayBuah)
// const newArrayBuah4 = [...arrayBuah] //sprid operator
// const newArrayBuah5 = arrayBuah.slice()

// newArrayBuah[0]='💢' // penerapan yang salah

// newArrayBuah3[0] = '💛' // penerapan yg tidak merubah original

// console.log({arrayBuah})
// console.log({newArrayBuah})
// console.log({newArrayBuah3})

//? Array yang berbeda

// const arrayBuah = [
//         '🍅',
//         10,
//         { cabai : true }, 
//         {
//             alpukat : function (){
//                 console.log('ini alpukat')
//             },
//         },
//             ['eat','food']
//     ] 

// console.log(arrayBuah[1])
// arrayBuah[3].alpukat()
// console.log(arrayBuah[4][0])


//? depape double
//mergin 2 buah array menjadi 1

// const arrayMobil = ['🚗','🚓','🚕']
// const arrayBintang = ['🌜','🌟','☀']

// const mergeArray = arrayMobil.concat(arrayBintang)
//console.log(mergeArray)
// for (list in mergeArray) console.log(list)
// for (list of mergeArray) console.log(list)
// mergeArray.map((value, index) => console.log(index,value))
 
//? example mapping data

const datas = [
    {
        nama: ' arif rahman',
        stock: 'js react dll',
        age: 29,
    },
    {
        nama: ' arif bijak',
        stock: 'js react dll',
        age: 30,
    },
    {
        nama: ' arif kesatria',
        stock: 'js react dll',
        age: 31,
    },
    {
        nama: ' arif ganteng',
        stock: 'js react dll',
        age: 32,
    }
]

// datas.map((values, index) => {
//     console.log(values.nama, values.stock)
//     console.log(values)
// })

datas
.sort((a, b) => a.age - b.age)
.filter((x) => x.age >30)
.map((values)=>console.log(values))