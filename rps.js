// getting the result into local storage
let score = JSON.parse(localStorage.getItem('score')) || {

Win : 0,
Lose : 0, 
Tie : 0
};

updateScore();

// Getting a Random move from Computer

function pickComputerMove()
{
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber <1/3)
computerMove = 'Rock';
else if (randomNumber > 1/3 && randomNumber <2/3)
computerMove = 'Paper';
else if(randomNumber > 2/3 && randomNumber <1){
computerMove = 'Scissors';
}
return computerMove;
}

//Comparing and gettign result WRT Playermove and Computer generated Random Move 

function playGame(playerMove)
{
const computerMove = pickComputerMove();
let result= '';
if(playerMove === 'Rock') {
if(computerMove === 'Rock'){
result = 'Tie';
}
else if( computerMove ==='Scissors'){
result = 'You Win';
}

else if( computerMove ==='Paper'){
result = 'You Lose';
}

}

else if(playerMove === 'Scissors'){
if(computerMove === 'Rock'){
result = 'You Lose';
}

else if( computerMove ==='Scissors'){
result = 'Tie';
}

else if( computerMove ==='Paper'){
result = 'You Win';
}
}
else if(playerMove === 'Paper'){
if(computerMove === 'Rock'){
result = 'You Win';
}

else if( computerMove ==='Scissors'){
result = 'You Lose';
}

else if( computerMove ==='Paper'){
result = 'Tie';
}

}
if(result === 'You Win'){
score.Win += 1;
}
else if(result==='You Lose'){
score.Lose += 1;
}
else if(result==='Tie'){
score.Tie += 1;
}

updateScore();
document.querySelector('.js-pmoves').innerHTML = `<img class="clash-result-images" src="img/${playerMove.toLowerCase();}.png" alt="">`
document.querySelector('.js-cmoves').innerHTML = `<img class="clash-result-images" src="img/${computerMove.toLowerCase();}.png" alt="">`
document.querySelector('.js-result').innerHTML = result; 

// putting the result into localstorge
localStorage.setItem('score', JSON.stringify(score));


}

// upadting the score sheet
function updateScore(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.Win}, Lose ${score.Lose}, Tie:${score.Tie}`;
}


