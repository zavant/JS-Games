'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1
let myScore = 20
let highScore = 0
console.log(secretNumber)


const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    //No input
    if(!guess){
        displayMessage('No number entered!!!')
    //When player wins
    }else if (guess === secretNumber) {
        displayMessage('Winner!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
    if(myScore > highScore) {
            highScore = myScore
            document.querySelector('.highscore').textContent = highScore
    }

    //when guess is wrong
    }else if (guess !== secretNumber) {
        if(myScore > 1) {
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!") 
            myScore = myScore - 1
            document.querySelector('.score').textContent = myScore
        }else {
            displayMessage("You lost!")
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    myScore = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    console.log(secretNumber)
    displayMessage("Start guessing...") 
    document.querySelector('.score').textContent = myScore
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'

})

