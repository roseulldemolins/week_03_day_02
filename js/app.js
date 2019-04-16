document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

const rockButton = document.querySelector('#rock');

  rockButton.addEventListener('click', (event) => {
    const playerParag = document.querySelector('#players-choice');
    playerParag.textContent = `Player Plays: Rock`

    const computerParag = document.querySelector('#computers-choice');
    computerParag.textContent = `Computer Plays: ${rand(arrayOfButtons)}`

    if (computerParag.textContent === 'Computer Plays: Rock'){
      const resultParag = document.querySelector('#result');
      resultParag.textContent = `It's a draw!`
    }
    else if (computerParag.textContent === 'Computer Plays: Paper')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `Well done - you win!`}
    else if (computerParag.textContent === 'Computer Plays: Scissors')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `Sorry - you lose!`}

});

const paperButton = document.querySelector('#paper');

  paperButton.addEventListener('click', (event) => {
    const playerParag = document.querySelector('#players-choice');
    playerParag.textContent = `Player Plays: Paper`

    const computerParag = document.querySelector('#computers-choice');
    computerParag.textContent = `Computer Plays: ${rand(arrayOfButtons)}`

    if (computerParag.textContent === 'Computer Plays: Rock')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `Well done - you win!`}
    else if (computerParag.textContent === 'Computer Plays: Paper')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `It's a draw!`}
    else if (computerParag.textContent === 'Computer Plays: Scissors')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `Sorry - you lose!`}
});

const scissorsButton = document.querySelector('#scissors');

  scissorsButton.addEventListener('click', (event) => {
    const playerParag = document.querySelector('#players-choice');
    playerParag.textContent = `Player Plays: Scissors`

    const computerParag = document.querySelector('#computers-choice');
    computerParag.textContent = `Computer Plays: ${rand(arrayOfButtons)}`
    
    if (computerParag.textContent === 'Computer Plays: Rock')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `Sorry - you lose!`}
    else if (computerParag.textContent === 'Computer Plays: Paper')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `Well done - you win!`}
    else if (computerParag.textContent === 'Computer Plays: Scissors')
    {const resultParag = document.querySelector('#result');
    resultParag.textContent = `It's a draw!`}
});
const arrayOfButtons = ['Rock', 'Paper', 'Scissors']
const rand = (array) => {
  return array[Math.floor((Math.random() * Math.floor(array.length)))]};



});
// const paper
// const scissors
