document.title // titik untuk masuk kedalam datanya
console.log(document.title)
document.title = 'MANTAP JAVASCRIPT'
console.log(document.title)

const body = document.body
// body.append( 'Hello World')

// document.createElement('h1')
// const h1 = document.createElement('h1')
// h1.textContent = 'Ini sih agak ribet ya ?' //<h1>Ini sih agak ribet ya ?</h1>
// h1.textContent = 'Helo.....'

// const namaKamu = document.createElement('p')
// namaKamu.innerHTML = '<marque>cantik</marque>'

// const hobyKamu = document.createElement('b')
// hobyKamu.innerHTML = '<marque>membaca</marque>'

// body.append(h1)
// body.append(namaKamu)
// body.append(hobyKamu)

// document.createElement('h5')
// const h5 = document.createElement('h5')
// h5.textContent = 'by arif'
// body.append(h5)

const btn1 = document.getElementById('btn1')
// const btn = document.querySelector('button')

const defaultText = 'klik saya 1'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

// console.log(btn)
function clickButton(){
    // console.log('aman')
    btn1.style.color = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = "hallo Terima kasih telah di klik"
    body.append(newText)
}

function ubahText(){
    // console.log(ubahText)
    btn1.textContent = 'hihihi hahaha'
}

function oriText(){
    btn1.textContent = defaultText
}

//? soal = memunculkan kata dari geser ke button 2

const btn2 = document.getElementById("btn2")

btn2.style.border = 'none'
btn2.style.padding = '10px'
btn2.style.fontSize = '30px'
btn2.style.background = 'danger'

function ubahText2(){
    const newText = document.createElement('p')
    newText.textContent = "hallo Terima kasih telah di klik"
    body.append(newText)
    console.log(newText.textContent)
}
function oriText2(){
    const newText = document.createElement('p')
    newText.textContent = "hallo"
    newText.style.color = 'blue'
    body.append(newText)
    console.log(newText.textContent)
}
