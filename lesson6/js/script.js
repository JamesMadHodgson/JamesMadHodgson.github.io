/*hamburger*/
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

/*date*/

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

/* banner */
let d = new Date();
const banner =
    document.getElementById('banner');
if (d.getDay() == 5) {
    document.getElementById('banner').style.display = 'block';
} else {
    document.getElementById('banner').style.display = 'none';
}


/*web font reference */
WebFont.load({
    google: {
        families: [
            'Crimson Text', 'serif', 'Crimson Text', 'serif'
        ]
    }
});

/*windchill*/

let t = document.getElementById('temp').textContent;
let s = document.getElementById('speed').textContent;
let x = 'N/A';

if (t < 50 && s > 3) {
    let y = Math.pow(s, 0.16);
    let f = 35.74 + 0.6215 * t - 35.75 * y + 0.4275 * t * y;
    let x = f.toFixed(0);
    document.getElementById('chill').textContent = x;
} else {
    document.getElementById('chill').textContent = 'N/A';
}