/*

! PERULANGAN DI JAVASCRIPT
? for, for of, for in, foreach
*while & do while
! MAP
*/

const pacarSaya = ['Angela', 'Laiya', 'BalmondCantik']

console.log(pacarSaya)

//value
for(let pacar of pacarSaya){
    console.log(pacar)
}

//index
for(let pacar in pacarSaya){
    console.log(pacar)
}

pacarSaya.forEach(pacar => {
    console.log(pacar, index + 1)
});

pacarSaya.map(pacar => {
    console.log(pacar, index + 1)
});