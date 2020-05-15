const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);


if (document.lastModified) {
    document.getElementById('lastModified').innerHTML =
        new Date(document.lastModified).toLocaleString();
}

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
document.getElementById('currentdate').textContent = new DataCue().toLocaleString('en-US', options);