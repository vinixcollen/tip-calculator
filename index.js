const btnTip = document.querySelector('.tip-btn')
const amount = document.querySelector('.amount')
const people = document.querySelector('.people')
const custom = document.querySelector('.custom')
const billMessage = document.querySelector('.bill-message')
const peopleMessage = document.querySelector('.people-message')
const billPerson = document.querySelector('.bill-per-person')
const tipPerson = document.querySelector('.tip-per-person')
const reset = document.querySelector('.reset-btn')

let billAmount = NaN
let numberPeople = NaN
let customTip = NaN
let totalPerPerson = 0
let tipPerPerson = 0

/**
 * This is a function to validate the user input
 * in order to check whether the input value is empty
 * 
 * @param {string} billAmount 
 * @param {string} numberPeople 
 * @returns boolean
 */
function validation(billAmount, numberPeople) {
    let pass = true

    if (isNaN(billAmount)) {
        billMessage.innerHTML = "Can't be zero"
        amount.style.borderColor = 'red'
        pass = false
    } else {
        billMessage.innerHTML = ""
        amount.style.borderColor = 'transparent'
    }

    if (isNaN(numberPeople)) {
        peopleMessage.innerHTML = "Can't be zero"
        people.style.borderColor = 'red'
        pass = false
    } else {
        peopleMessage.innerHTML = ""
        people.style.borderColor = 'transparent'
    }

    return pass
}

reset.addEventListener("click", function () {
    amount.value = ""
    billAmount = NaN

    people.value = ""
    numberPeople = NaN

    custom.value = ""
    customTip = NaN

    billPerson.innerHTML = "$0.00"
    tipPerson.innerHTML = "$0.00"
})

btnTip.addEventListener("click", function (event) {
    let str = event.target.innerHTML
    let percent = parseInt(str.slice(0, str.length - 1)) // Get the number

    let passed = validation(billAmount, numberPeople)

    if (passed) {
        tipPerPerson = (parseFloat(billAmount) * parseInt(percent) * 0.01) / parseInt(numberPeople)
        totalPerPerson = (parseFloat(billAmount) + tipPerPerson) / parseInt(numberPeople)

        billPerson.innerHTML = '$' + totalPerPerson.toFixed(2)
        tipPerson.innerHTML = '$' + tipPerPerson.toFixed(2)
    } else {
        return
    }
})

/**
 * Updates the billAmount everytime user inputs
 * a value
 */
amount.addEventListener("input", function(event) {
    billAmount = parseFloat(event.target.value)
    console.log('Bill: ', billAmount)
})

/**
 * Updates the numberPeople variable everytime
 * user inputs a value
 */
people.addEventListener("input", function(event) {
    numberPeople = parseFloat(event.target.value)
    console.log('People: ', numberPeople)
})

/**
 * Updates the Tip Amount and Total Amount in the front end
 * based on user input
 */
custom.addEventListener("input", function (event) {
    customTip = parseFloat(event.target.value)
    console.log('Custom Tip: ', customTip, isNaN(customTip))

    let passed = validation(billAmount, numberPeople)

    if (passed) {
        tipPerPerson = (parseFloat(billAmount) * parseInt(customTip) * 0.01) / parseInt(numberPeople)
        totalPerPerson = (parseFloat(billAmount) + tipPerPerson) / parseInt(numberPeople)

        billPerson.innerHTML = '$' + totalPerPerson.toFixed(2)
        tipPerson.innerHTML = '$' + tipPerPerson.toFixed(2)
    } else {
        return
    }
})
