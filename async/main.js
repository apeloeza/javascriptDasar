const token = ~~[Math.random()*12345678]

const pictures = ["1.jpg","2.jpg","3.jpg"]

function login(username ){
    console.log('processing...memvalidasi data!')
    return new Promise((success, failed) => {
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
    return new Promise((success, failed)=>{
        if (!apiKey) failed("no apikey, cannot acces")
        setTimeout(()=>{
            success ({ pic : pictures})
        }, 1500)
    })

}

async function UserDisplay(){
    // await = menunggu kelar exsekusi baru menampilkan
const user = await login("arif_rahman")
console.log(user)
try {
    const {token} = await login("arif_rahmam")
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)

    console.log(`
    token anda adalah: ${token}
    apikey anda adalah: ${apiKey}
    hasil request gambar anda berikut ini: ${pic}
`)
    }catch (err){
        console.log(err)
    }
} 

UserDisplay()