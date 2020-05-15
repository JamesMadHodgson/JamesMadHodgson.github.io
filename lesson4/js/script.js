const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);



const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
document.getElementById('currentdate').textContent = new Data().toLocaleString('en-US', options);