if(document.lastModified){
    document.getElementById('lastModified').innerHTML=
    new Date(document.lastModified).toLocaleString();
}