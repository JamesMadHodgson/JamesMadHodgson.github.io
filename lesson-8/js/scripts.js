let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 50px 0px'
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};



if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

/*web font reference */
WebFont.load({
    google: {
        families: [
            'Crimson Text', 'serif', 'Crimson Text', 'serif'
        ]
    }
});

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