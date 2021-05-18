const highscoreName = document.querySelector('#highscoreName');
const saveBtn = document.querySelector('#saveBtn');
const finalScore = document.querySelector('#finalScore');
const lastScore = document.querySelector('#lastScore');

const highscores = JSON.parse(localStorage.getItem('highscores')) || []

const maxHighscores = 5



