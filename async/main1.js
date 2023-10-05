 /* 
 ? mengenal asyncronus
 */

// function satu(){
//     console.log("satu")
// }
// function dua(){
//     console.log("dua sedang di proses")
//     setTimeout(() => {
//     console.log("dua")
//     }, 3000);
// }
// function tiga(){
//     console.log("tiga")
// }

// satu()
// dua()
// tiga()

//? ==================

// const token = ~~[Math.random()*12345678]

// const pictures = ["1.jpg","2.jpg","3.jpg"]

// function login(username){
//     return {token, username}
// }

// function getUser(token){
//     if(token) return {apiKey: "xkey123"}
// }

// function getPictures (apiKey){
//     if(apiKey) return pictures
// }

// const user = login ("arif_rahman");
// console.log(user.token);

// const {apiKey} = getUser(user.token);
// console.log(apiKey)

// const getUserPicture = getPictures(apiKey)
// console.log(getUserPicture)

//? ==================

const token = ~~[Math.random()*12345678]

const pictures = ["1.jpg","2.jpg","3.jpg"]

function login(username, callback ){
    console.log('processing...memvalidasi data!')
    setTimeout(()=>{
        callback({token,username})
    }, 200)
    return {token, username}
}

function getUser(token, callback){
    console.log('proses apiKey sekarang ...')
    if(token) 
    setTimeout (() => {
        callback ({apiKey: "xkey123"})
    },500)
}

function getPictures (apiKey, callback){
    if(apiKey)
    setTimeout(()=>{
        callback({ pic : pictures})
    }, 1500)
}

login("arif_rahman", function(response){
    const {token} = response
    getUser(token, function(response) {
        const {apiKey} = response
        getPictures(apiKey, function(response){
            const pic = response
            console.log(pic)
        })

    })
})

// const user = login ("arif_rahman");
// console.log(user.token);

// const {apiKey} = getUser(user.token);
// console.log(apiKey)

// const getUserPicture = getPictures(apiKey)
// console.log(getUserPicture)