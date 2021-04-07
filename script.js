const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
fetch('https://icanhazdadjoke.com/', { 
    headers: {
        Accept: 'application/json',
    }
})
    .then((response) => response.json())
    .then((data) => {
        jokeEl.innerText=data.joke
        }
    )
}

jokeBtn.addEventListener('click', function (e) {
    generateJoke()
});

