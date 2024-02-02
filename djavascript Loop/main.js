/* perulangan javascript

 ? for, for of, for in, foreach
for(statement 1 // statement2 // statement3)
statement 1 = nilai awal dari variabel
statement 2 = condition
statement 3 = Effect (a++)

*/

/*
for (let z=1;z<=5;z++){
    console.log('data ke - ',z)
} 
? infinite loop
*/

//? versi for
for (let z = 1 ; z <= 10; z++){
    if(z%2 !==0)console.log(z,'data tampil')
}

//? versi While
let x =1
while (x<=10){
    if (x %2 !== 0){
        console.log('data ke x - ', x)
    }
    x++
}

//? versi do while
let y = 1
do {
    console.log('data y ke - ', y)
    y++
}
while (y <= 10)
/*
data ke - 1 ---------------------- z = 2
data ke - 2 ---------------------- z = 3
data ke - 3 ---------------------- z = 4
data ke - 4 ---------------------- z = 5
data ke - 5 ---------------------- z = 6
*/

for (let a = 1 ; a <= 5; a++){
    if(a%3)console.log(a,'tampil data a ')
}