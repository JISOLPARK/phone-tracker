// //document.getElementById("count").innerText = 5 //changes from 0 to 5
// //variable count and holds 0.
// let firstBatch = 5
// let secondBatch  = 7

// let count = firstBatch + secondBatch
// //console is for debugging, checking ur code (like print)
// console.log(count)

// //create a variable, myAge and set its value to your age
// let myAge = 20
// //log the myAge variable to the console
// console.log(myAge)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 20
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// intialize the count as 0 
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count in the HTML to reflect the new count
let count = 0
let countEl = document.getElementById("count-el")

function increment(){
    count += 1 
    countEl.innerText = count
}
let saveEl = document.getElementById("save-el")
// 1. Create a function, save(), which logs out the count when it's called 
function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Jisol"
// let greeting = "Hello "
// welcomeEl.innerText = greeting + name
//welcomeEl.innerText += "👋"

