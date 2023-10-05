const token = ~~[Math.random()*12345678]

const pictures = ["1.jpg","2.jpg","3.jpg"]

function login(username ){
    console.log('processing...memvalidasi data!')
    return new Promise(( success, failed) => {
        if(!username) failed("sorry username, wrong user")
        setTimeout(()=>{
            success({token,username})
        }, 200)
        return {token, username}
    })
}

function getUser(token ){
    console.log('proses apiKey now ...')
    return new Promise((success, failed) => {
        if(!token) failed("sorry, no token, Cannot Access")
        setTimeout (() => {
            success ({apiKey: "xkey123"})
        },500)
    })
}

function getPictures (apiKey){
    console.log('procesing pictures now ...')
    if (apiKey)
        setTimeout(()=>{
            return ({ pic : pictures})
        }, 1500)
}

const user = login("2")
user.then(function (response) {
    const {token} = response
    getUser(token).then(function (response){
        console.log({response})
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => conselole.log(err))
}).catch(err => console.log(err))
