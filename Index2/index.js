const button = document.querySelector('.button');

function getGalaxy() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=nSWaSAofkks26EIs2BPexzFNf1MSkzYpbiq1PahT')
    .then((response) => {return response.json()})
    .then((data) => 
    (document.querySelector('.explanation').textContent = data.explanation)
    (document.querySelector('.media_type').textContent = data.url)
    );
}

button.addEventListener('click', getGalaxy);