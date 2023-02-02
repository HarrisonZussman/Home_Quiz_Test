const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('.mostRecentScore')

const highscore = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

//window.onload = function print() {
//finalScore.innerText = mostRecentScore
//}

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value
// })

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highscore.push(score)

    highscore.sort((a,b) => {
        return b.score -a.score
    })

    highscore.splice(5)

    localStorage.setItem('highscore', JSON.stringify(highscore))
    window.location.assign('/')
}