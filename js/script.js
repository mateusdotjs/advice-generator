const button = document.querySelector('button');
const adviceId = document.querySelector('h1');
const adviceText = document.querySelector('p');

button.addEventListener('click', fetchAdvice);

async function fetchAdvice() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let json = await response.json();
    setText(json);
}

function setText({slip}) {
    adviceId.innerText = `advice #${slip.id}`;
    adviceText.innerText = slip.advice;
}