const btnTip = document.querySelector('.tip-btn')
const amount = document.querySelector('.amount')
const people = document.querySelector('.people')
const custom = document.querySelector('.custom')

let billAmount = 0
let numberPeople = 0
let customTip = 0

btnTip.addEventListener("click", function (event) {
    let str = event.target.innerHTML
    let percent = parseInt(str.slice(0, str.length - 1)) // Get the number


})

amount.addEventListener("input", function(event) {
    billAmount = parseFloat(event.target.value)
    console.log('Bill: ', billAmount)
})

people.addEventListener("input", function(event) {
    numberPeople = parseFloat(event.target.value)
    console.log('People: ', numberPeople)
})

custom.addEventListener("input", function (event) {
    customTip = parseFloat(event.target.value)
    console.log('Custom Tip: ', customTip)
})
