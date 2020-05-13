function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}


if (document.lastModified) {
    document.getElementById('lastModified').innerHTML =
        new Date(document.lastModified).toLocaleString();
}