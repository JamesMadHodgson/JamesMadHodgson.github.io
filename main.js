/* hamburger*/
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);


/* day of the week */
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

/* banner
if (WeekDay[d.getDay()] == "Sunday") {
    document.getElementById("banner").style.display = 'block';
} else {
    document.getElementById("banner").style.display = 'none';
} */
let d = new Date();
const banner =
    document.getElementById('banner');
if (d.getDay() == 5) {
    document.getElementById('banner').style.display = 'block';
} else {
    document.getElementById('banner').style.display = 'none';
}