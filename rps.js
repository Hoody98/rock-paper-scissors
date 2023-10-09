let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' trumps ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>CPU score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>Victory, refresh to replay!'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('Draw, you chose the same. ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>CPU score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' trumps ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>CPU score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>You lose!'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})