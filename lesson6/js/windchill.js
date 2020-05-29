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