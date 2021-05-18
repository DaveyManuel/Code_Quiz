const highscoreName = document.querySelector('#highscoreName');
const saveBtn = document.querySelector('#saveBtn');
const finalScore = document.querySelector('#finalScore');
const lastScore = localStorage.getItem('lastScore');
const highscoreDisplay = document.querySelector('#highscoreDisplay')

const highscores = JSON.parse(localStorage.getItem('highscores')) || []

const maxHighscores = 5

finalScore.innerText = lastScore

highscoreName.addEventListener('keyup', ()=>{
    saveBtn = highscoreName.value
})

console.log(highscores)

saveHighScore = event => {
    event.preventDefault()

    const score = {
        score: lastScore,
        name: highscoreName.value
    }

    highscores.push(score)

    highscores.sort((a,b)=>{
        return b.score - a.score
    })

    highscores.splice(5)

    localStorage.setItem('highscores', JSON.stringify(highscores))

    highscoreDisplay.innerText = highscores    
}


