const button = document.querySelector('button');
const adviceId = document.querySelector('h1');
const adviceText = document.querySelector('p');

button.addEventListener('click', fetchAdvice);

async function fetchAdvice() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let json = await response.json();
    setText(json);
}

function setText({slip: {id, advice}}) {
    adviceId.innerText = `advice #${id}`;
    adviceText.innerText = advice;
}